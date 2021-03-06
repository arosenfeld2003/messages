import React from "react";
import Button from "../button/button";
import { connect } from "react-redux";
import { onNewRelationship, onDeleteRelationship } from "../../redux/relationship/relationship-reducer";
import { Link } from "react-router-dom";

const FollowersList = (props) => {
  const {
    handleClick,
    status,
    list,
    currentUser,
    profileFollowing,
    onCreateNewRelationship,
    onDeleteExistRelationship
  } = props;

  const handleFollowAction = (followed) => {
    onCreateNewRelationship(currentUser, followed);
  }

  const handleUnfollowAction = (followed) => {
    onDeleteExistRelationship(currentUser, followed);
  }


  return <div className={status === true ? `modal-open` : `modal-close`}>
  <div className="modal bgr-dark" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Followers</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClick}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <ul className="list-group">
            { list ? list.map((user, index) => {
                return <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                  <Link to={`/profile/${user.id}`} className="btn btn-link">{user.handle}</Link>

                  <div className="btn-group-vertical">
                    {
                      profileFollowing && profileFollowing.filter(follower => user.id === follower.id).length > 0 ? <Button type="button" className="btn btn-outline-primary" onClick={() => {
                        handleUnfollowAction(user);
                      }}>
                        Unfollow
                      </Button> : <Button type="button" className="btn btn-outline-dark" onClick={() => {
                        handleFollowAction(user);
                      }}>
                        Follow
                      </Button>
                    }
                  </div>
                </li>
            }) : "" }
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
}

const mapDispatchToProps = (dispatch) => ({
  onCreateNewRelationship: (user, currentUser) => {
    dispatch(onNewRelationship(user, currentUser));
  },
  onDeleteExistRelationship: (user, currentUser) => {
    dispatch(onDeleteRelationship(user, currentUser));
  }
})

export default connect(null, mapDispatchToProps)(FollowersList);