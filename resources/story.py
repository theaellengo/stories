from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.story import StoryModel
from models.user import UserModel

class Story(Resource):
  def get(self, _id):
    story = StoryModel.find_by_id(_id)
    return story.json() if story else {'message': 'Story cannot be found.'}, 404
  
  def delete(self, _id):
    story = StoryModel.find_by_id(_id)
    if story: story.delete_from_db()
    return {'message': 'Story has been deleted'}, 200

class StoryAdd(Resource):

  parser = reqparse.RequestParser()
  parser.add_argument('title', type=str, required=True, help='Every story needs a title.')
  parser.add_argument('description', type=str, required=False)

  @jwt_required()
  def post(self, user_id):
    
    req_data = StoryAdd.parser.parse_args()
    user = UserModel.find_by_id(user_id)

    if not user: return {'message': 'User does not exist. Cannot add story.'}, 404
    
    # check if story is in users list of stories
    story = StoryModel(req_data['title'], req_data['description'], user_id)
    try: story.save_to_db()
    except: {'message': 'An error occured saving the story'}, 500

    return story.json()
  
class StoryList(Resource):
  def get(self):
    return {
      'stories': [story.json() for story in StoryModel.query.all()]
    }