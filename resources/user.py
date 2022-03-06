from flask_restful import Resource, reqparse
from models.user import UserModel

class UserRegister(Resource):
  
  parser = reqparse.RequestParser()
  parser.add_argument('username', type=str, required=True, help='Username cannot be blank.')
  parser.add_argument('password', type=str, required=True, help='Password cannot be blank.')
  parser.add_argument('bio', type=str, required=False)

  def post(self):
    data = UserRegister.parser.parse_args()

    # check if user already exists
    if UserModel.find_by_username(data['username']):
      return {'message': f'User with username {data["username"]} already exists.'}, 400

    # create a new user
    user = UserModel(None, data['username'], data['password'], data['bio'])
    user.save_to_db()

    return {'message': 'User successfully created'}, 200

class User(Resource):

  parser = reqparse.RequestParser()
  parser.add_argument('username', type=str, required=True, help='Username cannot be blank.')

  def get(self, username):
    user = UserModel.find_by_username(username)
    if user: return user.json(), 200
    return {'message': f'User with username {username} does not exist.'}, 400