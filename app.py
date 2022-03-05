from flask import Flask
from flask_restful import Api
from flask_jwt import JWT

from consts import port, secret_key, dbname
from db import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dbname
api = Api(app)
app.secret_key = secret_key

@app.route('/')
def index(): return 'Hello World'

if __name__ == '__main__':
  db.init_app(app)
  app.run(port=port, debug=True)