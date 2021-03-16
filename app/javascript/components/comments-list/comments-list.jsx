import React from "react";

import "./comments-list.scss";

const CommentsList = () => {
  return <div class="panel panel-default widget text-left">
    <div class="panel-heading">
      <h5 class="panel-title">
        Recent Comments
      </h5>
      <button type="button" class="btn btn-link" title="Delete">
        <small>Add comment</small>
      </button>
    </div>
    <div class="panel-body">
      <ul class="list-group">
        <li class="list-group-item">
          <div class="row">
            <div class="col-xs-10 col-md-11">
              <div class="mic-info">
                By: <a href="#">Bhaumik Patel</a> on 2 Aug 2013
              </div>
              <div class="comment-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
              </div>
              <div class="action">
                <button type="button" class="btn btn-link" title="Delete">
                  <small>Delete</small>
                </button>
              </div>
            </div>
          </div>
        </li>
          
        <li class="list-group-item">
          <div class="row">
            <div class="col-xs-10 col-md-11">
              <div class="mic-info">
                By: <a href="#">Bhaumik Patel</a> on 2 Aug 2013
              </div>
              <div class="comment-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
              </div>
              <div class="action">
                <button type="button" class="btn btn-link" title="Delete">
                  <small>Delete</small>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
}

export default CommentsList;