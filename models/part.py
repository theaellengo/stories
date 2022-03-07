from db import db

class PartModel(db.Model):
  
  __tablename__ = 'parts'
  id = db.Column(db.Integer, primary_key=True)
  part = db.Column(db.String(10000))
  
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  user = db.relationship('UserModel')

  story_id = db.Column(db.Integer, db.ForeignKey('stories.id'))
  story = db.relationship('StoryModel')

  def __init__(self, part, story_id, user_id):
    self.part = part
    self.user_id = user_id
    self.story_id = story_id
  
  def json(self):
    return {
      'id': self.id,
      'part': self.part,
      'user_id': self.user_id,
      'story_id': self.story_id
    }
  
  @classmethod
  def find_by_id(self, _id):
    part = PartModel.query.filter_by(id=_id).first
    return part if part else None

  def save_to_db(self):
    db.session.add(self)
    db.session.commit()

  def delete_from_db(self):
    db.session.add(self)
    db.session.commit()