from flask import Flask, jsonify
from flask_restful import Api
from flask_jwt_extended import JWTManager

from resources.user import UserRegister, User, UserLogin, UserLogout, UserCurrent
from resources.story import Story, StoryList, StoryAdd
from resources.part import Part, PartAdd, PartList

from consts import port, secret_key, dbname
from db import db
from blacklist import BLACKLIST

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dbname
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['JWT_BLACKLIST_ENABLE'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access']
app.secret_key = secret_key

api = Api(app)

@app.before_first_request
def create_tables():
  db.create_all()

jwt = JWTManager(app)

@jwt.token_in_blocklist_loader
def check_if_token_in_blacklist(_decrypted_header, decrypted_body):
  return decrypted_body['jti'] in BLACKLIST

@jwt.revoked_token_loader
def revoked_token_callback(_decrypted_header, decrypted_body):
  return jsonify({
    'message': 'This token has been revoked.',
    'error': 'token_revoked'
  }), 401

api.add_resource(User, '/user/<int:user_id>')
api.add_resource(UserCurrent, '/user')
api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(UserLogout, '/logout')

api.add_resource(StoryList, '/stories')
api.add_resource(StoryAdd, '/<int:user_id>/add')
api.add_resource(Story, '/story/<int:_id>')

api.add_resource(PartList, '/parts')
api.add_resource(PartAdd, '/<int:story_id>/<int:user_id>/add')
api.add_resource(Part, '/part/<int:_id>')

if __name__ == '__main__':
  db.init_app(app)
  app.run(port=port, debug=True)