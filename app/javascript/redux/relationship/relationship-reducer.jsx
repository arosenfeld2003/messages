import relationshipTypes from './relationship-types';
import {
  createNewRelationship,
  deleteRelationship
} from './relationship-actions';
import API from '../../api';

const onNewRelationship = (follower, followed) => {
  return (dispatch) => {
    API.post("relationships", {follower: follower, followed: followed})
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onDeleteRelationship = (follower, followed) => {
  return (dispatch) => {
    console.log(tweetId);
    API.delete("relationships", {follower: follower, followed: followed})
    .then((res) => {
      console.log(res);
      dispatch();
    }).catch((error) => {
      console.log(error);
    })
  }
}

const relationshipReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case relationshipTypes.CREATE_NEW_RELATIONSHIP:
      return {
        ...state,
        newRelationship: action.payload
      }
    case relationshipTypes.DELETE_RELATIONSHIP:
      return {
        ...state,
        deleteRelationship: action.payload
      }
    default:
      return state;
  }
}

export {relationshipReducer, onNewRelationship, onDeleteRelationship};