import React from "react";
import FollowButton from "../../components/follow-button/follow-button";

const FollowingList = (props) => {
  const {
    handleClick,
    status,
    list,
    currentUser,
    handleFollowAction,
    handleUnfollowAction
  } = props;

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
            {
              list.map((user, index) => {
                if(user.handle !== currentUser.handle) {
                  return <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {user.handle}
                    { // <a href="#" className="btn btn-primary">Unfollow</a>
                    }
                    <FollowButton
                      user={currentUser}
                      currentUser={currentUser}
                      profileFollowers={list}
                      handleFollow={handleFollowAction}
                      handleUnfollow={handleUnfollowAction}
                    />
                  </li>
                }
              })
            }
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

}

export default FollowingList