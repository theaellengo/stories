from importlib.abc import ResourceReader
from flask_restful import Resource, reqparse
from flask_jwt_extended import create_access_token, jwt_required, get_jwt, get_jwt_identity
from models.user import UserModel
from werkzeug.security import safe_str_cmp

from blacklist import BLACKLIST

parser = reqparse.RequestParser()
parser.add_argument('username', type=str, required=True, help='Username cannot be blank.')
parser.add_argument('password', type=str, required=True, help='Password cannot be blank.')
parser.add_argument('bio', type=str, required=False)

class UserRegister(Resource):
  def post(self):
    req_data = parser.parse_args()

    # check if user already exists
    if UserModel.find_by_username(req_data['username']):
      return {'message': f'User with username {req_data["username"]} already exists.'}, 400

    # create a new user
    user = UserModel(None, req_data['username'], req_data['password'], req_data['bio'])
    user.save_to_db()

    return {'message': 'User successfully created', 'user': user.json()}, 200

class User(Resource):
  def get(self, user_id):
    user = UserModel.find_by_id(user_id)
    if user: return user.json(), 200
    return {'message': f'User with username {user_id} does not exist.'}, 400

  def delete(self, username):
    user = UserModel.find_by_username(username)
    if user: 
      user.delete_from_db()
      return {'message': 'User had been deleted.'}, 200
    return {'message': f'User with username {username} does not exist.'}, 400

class UserCurrent(Resource):
  @jwt_required()
  def get(self):
    user = UserModel.find_by_id(get_jwt_identity())
    if user: return {
      'id': user.id,
      'username': user.username
    }, 200
    return {'message': f'No user authenticated.'}, 400

class UserLogin(Resource):
  def post(self):
    req_data = parser.parse_args()
    user = UserModel.find_by_username(req_data['username'])
    if user and safe_str_cmp(user.password, req_data['password']):
      access_token = create_access_token(identity=user.id, fresh=True)
      return {
        'token': access_token,
        'user': user.json()
      }, 200
    return {'message': 'Invalid credentials.'}, 401

class UserLogout(Resource):
  @jwt_required()
  def post(self):
    jti = get_jwt()['jti'] # jwt id
    BLACKLIST.add(jti)
    return {'message': 'Successfully logged out.'}, 200
