from flask import Flask
from flask_restful import Api
from flask_jwt import JWT

from consts import port, secret_key

app = Flask(__name__)
api = Api(app)
app.secret_key = secret_key

@app.route('/')
def index(): return 'Hello World'

if __name__ == '__main__':
  app.run(port=port, debug=True)