import React, {useState, useEffect} from "react";
import API from "../../api";

import "./comments-list.scss";

const CommentsList = (props) => {

  const {tweet, currentUser} = props;

  const [newComment, setNewComment] = useState("");
  const [tweetComments, setTweetComments] = useState([]); // comments for a tweet
  const [tweetIdToUpdate, setTweetIdToUpdate] = useState(""); // for tracking tweet to update
  const [isAddCommentForm, setIsAddCommentForm] = useState(false); // show and hide form for add comment
  const [isCommentsList, setIsCommentsList] = useState(false); // show and hide comments list

  const handleChange = (evt) => {
    const { target } = evt;
    setNewComment(target.value);
  }

  const onAddComment = (text) => {
    API.post("tweet/comment", {comment: {
      author: currentUser.handle,
      comment: text
    },
    tweet_id: tweet.id})
    .then((res) => {
      setIsAddCommentForm(false);
      setTweetComments(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const onLoadComments = (tweet_id) => {
    API.get(`tweet/${tweet_id}/comments`)
    .then((res) => {
      console.log(res);
      if (res) {
        setTweetComments(res.data);
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  const onDeleteComment = (tweet) => {
    API.delete("tweet/comment", {data: {tweet_id: tweet.tweet_id}})
    .then((res) => {
      if(res) {
        setTweetIdToUpdate(res.data.comment.tweet_id);
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  const onAddCommentForm = () => {
    if(isAddCommentForm === false) {
      setIsAddCommentForm(true);
    } else {
      setIsAddCommentForm(false);
    }
  }

  const onShowCommentsList = () => {
    setIsCommentsList(true);
  }

  useEffect(() => {
    onLoadComments(tweet.id);
  }, [tweet])

  // update tweet when delete comment
  useEffect(() => {
    if(tweetIdToUpdate !== "") {
      onLoadComments(tweetIdToUpdate);
    }
  }, [tweetIdToUpdate])

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (newComment.length > 0) {
      onAddComment(newComment);
    }
  }

  return <div className="panel panel-default widget text-left">
    <div className="panel-heading">
      <h5 className="panel-title">
        Recent Comments
      </h5>
      <button type="button" className="btn btn-link" title="Delete" onClick={onAddCommentForm}>
        { isAddCommentForm ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        }
      </button>
    </div>
    {
      isAddCommentForm ? <form className="comment-form">
      <div className="form-group">
        <textarea name="comment border border-primary" className="form-control" rows="2" onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="btn btn-outline-primary btn-sm" onClick={(e) => handleSubmit(e)}>Send</button>
    </form> : ""
    }
    
    <div className="panel-body">
      <ul className="list-group">
        {
          tweetComments.map((item, index) => {
            return <li className="list-group-item" key={index}>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <div className="mic-info">
                      By: <a href="#">{item.author}</a> on {item.created_at.slice(0, 10)}
                    </div>
                  </div>
                  <div className="col text-right">
                    <button type="button" className="btn btn-link text-danger" title="Delete" onClick={() => {
                      onDeleteComment(item);
                    }}>Delete
                    </button>
                  </div>
                </div>
                <div className="comment-text">
                    {item.comment}
                </div>
              </div>
            </div>
          </li>
          })
        }
      </ul>
    </div>
  </div>
}

export default CommentsList;