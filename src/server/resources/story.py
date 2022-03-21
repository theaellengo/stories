from flask_restful import Resource, reqparse
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.story import StoryModel
from models.user import UserModel

class Story(Resource):
  def get(self, _id):
    story = StoryModel.find_by_id(_id)
    if story is None: return {'message': 'Story does not exist.'}, 400
    return story.json(), 200
  
  @jwt_required(optional=True)
  def delete(self, _id):
    story = StoryModel.find_by_id(_id)
    if story: 
      user_id = get_jwt_identity()
      if user_id == story.user_id:
        story.delete_from_db()
      else:
        return {'message': 'Only story owner can delete the story.'}
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