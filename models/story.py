from sqlalchemy import desc
from db import db

class StoryModel(db.Model):

  __tablename__= 'stories'
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(80))
  description = db.Column(db.String(300))

  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  user = db.relationship('UserModel')

  def __init__(self, title, description, user_id):
    self.title = title
    self.description = description
    self.user_id = user_id

  def json(self):
    return {
      'title': self.title,
      'description': self.description
    }

  @classmethod
  def find_by_name(self, name):
    story = StoryModel.query.filter_by(name=name).first()
    return story if story else None
  
  @classmethod
  def find_by_id(self, _id):
    story = StoryModel.query.filter_by(id=_id).first()
    return story if story else None
  
  def save_to_db(self):
    db.session.add(self)
    db.session.commit()

  def delete_from_db(self):
    db.session.delete(self)
    db.session.commit()