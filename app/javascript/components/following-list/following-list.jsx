import React from "react";

const FollowingList = (props) => {
  const {handleClick, status, list, currentUser} = props;

  return <div className={status === true ? `modal-open` : `modal-close`}>
    <div class="modal bgr-dark" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Following</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleClick}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            {
              list.map((user, index) => {
                if(user.handle !== currentUser.handle) {
                  return <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {user.handle}
                    <a href="#" className="btn btn-primary">Unfollow</a>
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