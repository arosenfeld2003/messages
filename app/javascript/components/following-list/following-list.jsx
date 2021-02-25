import React from "react";
import Button from "../button/button";
import { connect } from "react-redux";
import { onNewRelationship, onDeleteRelationship } from "../../redux/relationship/relationship-reducer";

const FollowingList = (props) => {
  const {
    handleClick,
    status,
    list,
    currentUser,
    onDeleteExistRelationship
  } = props;

  const unfollowUser = (followed) => {
    onDeleteExistRelationship(currentUser, followed);
  }

  return <div className={status === true ? `modal-open` : `modal-close`}>
    <div className="modal bgr-dark" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Following</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleClick}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <ul className="list-group">
            { list ? list.map((user, index) => {
                if(user.handle !== currentUser.handle) {
                  return <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {user.handle}
                    { // <a href="#" className="btn btn-primary">Unfollow</a>
                    }
                    <div className="btn-group-vertical">
                      <Button type="button" className="btn btn-outline-primary" onClick={() => unfollowUser(user)}>
                        Unfollow
                      </Button>
                    </div>
                  </li>
                }
              } ) : ""
            }
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

export default connect(null, mapDispatchToProps)(FollowingList);