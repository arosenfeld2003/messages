/*
  Feed will be determined by relationships.
  We can start with a relationship between user and itself.
  Every time 'follow' is clicked, we add relationship.
*/
import React from "react";
import Button from "../button/button";
import { connect } from "react-redux";
import { onNewRelationship, onDeleteRelationship } from "../../redux/relationship/relationship-reducer";

// need current user
//profile followers and profile following
// check if current user exist in profile following -> show Unfollow button
// check id=f current user dosn't exist in profile following -> show Follow button

const FollowButton = (props) => {
  const {
    user,
    currentUser,
    profileFollowers,
    profileFollowing,
    onCreateNewRelationship,
    onDeleteExistRelationship
  } = props;

  const handleFollowAction = () => {
    onCreateNewRelationship(currentUser, user);
  }

  const handleUnfollowAction = () => {
    onDeleteExistRelationship(currentUser, user);
  }

  return <div className="col">
    <div className="btn-group-vertical">
      {
        profileFollowers.filter(user => user.id === currentUser.id).length > 0 ? <Button type="button" className="btn btn-outline-primary" onClick={handleUnfollowAction}>
        Unfollow
      </Button> : <Button type="button" className="btn btn-outline-primary" onClick={handleFollowAction}>
        Follow
      </Button>
      }
      
    </div>
  </div>
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onCreateNewRelationship: (user, currentUser) => {
    dispatch(onNewRelationship(user, currentUser));
  },
  onDeleteExistRelationship: (user, currentUser) => {
    dispatch(onDeleteRelationship(user, currentUser));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton)
