from db import db

class UserModel(db.Model):

  __tablename__='users'
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(32))
  password = db.Column(db.String(64))
  bio = db.Column(db.String(150))

  stories = db.relationship('StoryModel', lazy='dynamic')

  def __init__(self, _id, username, password, bio):
    self.id = _id
    self.username = username
    self.password = password
    self.bio = bio
  
  def json(self):
    return {
      'username': self.username,
      'bio': self.bio,
      'stories': [story.json() for story in self.stories.all()]
    }

  def save_to_db(self):
    db.session.add(self)
    db.session.commit()

  @classmethod
  def find_by_username(self, username):
    user = UserModel.query.filter_by(username=username).first()
    return user if user else None

  @classmethod
  def find_by_id(self, _id):
    user = UserModel.query.filter_by(id=_id).first()
    return user if user else None