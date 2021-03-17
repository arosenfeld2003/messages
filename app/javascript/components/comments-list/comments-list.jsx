import React, {useState} from "react";
import API from "../../api";

import "./comments-list.scss";

const CommentsList = (props) => {

  const {tweet, currentUser} = props;

  const [newComment, setNewComment] = useState("");

  const handleChange = (evt) => {
    const { target } = evt;
    setNewComment(target.value);
  }

  const onAddComment = (tweetId, user, text) => {
    API.post("tweet/comment", {comment: {
      author: currentUser.handle,
      comment: text
    },
    tweet_id: tweet.id})
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (newComment.length > 0) {
      onAddComment(tweet.id, currentUser, newComment);
    }
  }

  return <div className="panel panel-default widget text-left">
    <div className="panel-heading">
      <h5 className="panel-title">
        Recent Comments
      </h5>
      <button type="button" className="btn btn-link" title="Delete">
        <small>Add comment</small>
      </button>
    </div>
    <form className="comment-form">
      <div className="form-group">
        <textarea name="comment" className="form-control" rows="3" onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="btn btn-outline-primary btn-sm" onClick={(e) => handleSubmit(e)}>Send</button>
    </form>
    <div className="panel-body">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <div className="mic-info">
                By: <a href="#">Bhaumik Patel</a> on 2 Aug 2013
              </div>
              <div className="comment-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
              </div>
              <div className="action text-right">
                <button type="button" className="btn btn-link" title="Delete">
                  <small>Delete</small>
                </button>
              </div>
            </div>
          </div>
        </li>
          
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <div className="mic-info">
                By: <a href="#">Bhaumik Patel</a> on 2 Aug 2013
              </div>
              <div className="comment-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
              </div>
              <div className="action text-right">
                <button type="button" className="btn btn-link" title="Delete">
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