import relationshipTypes from './relationship-types'

export const createNewRelationship = (follower, following) => ({
  type: relationshipTypes.CREATE_NEW_RELATIONSHIP,
  payload: relationship
});

export const deleteRelationship = (follower, following) => ({
  type: relationshipTypes.DELETE_RELATIONSHIP,
  payload: relationship
});
