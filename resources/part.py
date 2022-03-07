from flask_restful import Resource, reqparse
from models.part import PartModel
from models.story import StoryModel
from models.user import UserModel

class Part(Resource):
  def get(self, _id):
    part = PartModel.find_by_id(_id)
    return part.json() if part else {'message': 'Part cannot be found.'}, 404

class PartAdd(Resource):

  parser = reqparse.RequestParser()
  parser.add_argument('description', type=str, required=True, help='Content is required.')

  def post(self, story_id, user_id):
    
    user = UserModel.find_by_id(user_id)
    story = StoryModel.find_by_id(story_id)
    if not user or not story:
      return {'message': 'Story or User does not exist.'}, 404
    
    req_data = PartAdd.parser.parse_args()
    part = PartModel(req_data['description'], user_id, story_id)

    try: part.save_to_db()
    except: {'message': 'An error occured saving the part'}, 500

    return part.json(), 200

class PartList(Resource):
  def get():
    parts = [part.json() for part in PartModel.query.all()]
    return parts