from db import db

class UserModel(db.Model):

  __tablename__='users'
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(32))
  password = db.Column(db.String(64))

  def __init__(self, _id, username, password):
    self.id = _id
    self.username = username
    self.password = password

  @classmethod
  def save_to_db(self):
    db.session.add(self)
    db.session.commit()