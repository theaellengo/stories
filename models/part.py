from db import db

class PartModel(db.Model):
  
  __tablename__ = 'parts'
  id = db.Column(db.Integer, primary_key=True)
  part = db.Column(db.String(10000))

  def __init__(self, part):
    self.part = part
  
  def json(self):
    return {
      'id': self.id,
      'part': self.part,
      'user_id': self.user_id
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