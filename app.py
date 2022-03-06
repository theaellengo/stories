from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
from security import authenticate, identity

from resources.user import UserRegister, User

from consts import port, secret_key, dbname
from db import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dbname
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)
app.secret_key = secret_key

@app.before_first_request
def create_tables():
  db.create_all()

jwt = JWT(app, authenticate, identity)

api.add_resource(User, '/user/<string:username>')
api.add_resource(UserRegister, '/register')

if __name__ == '__main__':
  db.init_app(app)
  app.run(port=port, debug=True)