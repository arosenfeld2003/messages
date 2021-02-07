/*
  Feed will be determined by relationships.
  We can start with a relationship between user and itself.
  Every time 'follow' is clicked, we add relationship.
*/
import React from "react";
import Button from "../button/button";
import { connect } from "react-redux";
import { onNewRelationship } from "../../redux/relationship/relationship-reducer";

const FollowButton = (props) => {
  const {
    user,
    profile,
    currentUser,
    userFollowers,
    onCreateNewRelationship
  } = props;

  const handleFollowAction = () => {
    debugger;
    onCreateNewRelationship(currentUser, user);
  }

  return <div className="col">
    <div className="btn-group-vertical">
      <Button type="button" className="btn btn-outline-primary" onClick={handleFollowAction}>
        Follow
      </Button>
    </div>
  </div>
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onCreateNewRelationship: (user, currentUser) => {
    dispatch(onNewRelationship(user, currentUser));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton)
