from flask import Flask
from flask_restful import Api
from flask_jwt_extended import JWTManager

from resources.user import UserRegister, User, UserLogin
from resources.story import Story, StoryList, StoryAdd
from resources.part import Part, PartAdd, PartList

from consts import port, secret_key, dbname
from db import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dbname
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = secret_key

api = Api(app)

@app.before_first_request
def create_tables():
  db.create_all()

jwt = JWTManager(app)

api.add_resource(User, '/user/<string:username>')
api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(StoryList, '/stories')
api.add_resource(StoryAdd, '/<int:user_id>/add')
api.add_resource(Story, '/story/<int:_id>')
api.add_resource(PartList, '/parts')
api.add_resource(PartAdd, '/<int:story_id>/<int:user_id>/add')
api.add_resource(Part, '/part/<int:_id>')

if __name__ == '__main__':
  db.init_app(app)
  app.run(port=port, debug=True)