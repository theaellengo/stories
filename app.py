from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
from resources.user import UserRegister
from security import authenticate, identity

from consts import port, secret_key, dbname
from db import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dbname
api = Api(app)
app.secret_key = secret_key

jwt = JWT(app, authenticate, identity)

api.add_resource(UserRegister, '/register')

if __name__ == '__main__':
  db.init_app(app)
  app.run(port=port, debug=True)