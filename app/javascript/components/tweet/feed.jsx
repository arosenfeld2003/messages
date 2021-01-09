import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { onGetUserFeed } from '../../redux/user/user-reducer';

const UpdateFeed = (props) => {
  const {currentUser, fetchUserFeed} = props;
  const [userFeed, setUserFeed] = useState({});
  // const [userFeed] = useState(fetchUserFeed(currentUser));
  // we need the result of the API call from 'getUserFeed' reducer
  const loadUserFeed = function () {
    const currentFeed = props.fetchUserFeed(currentUser) || [];
    setUserFeed({ userFeed: currentFeed });
  }

  useEffect(() => {
    loadUserFeed()
  }, [])

  return (
    <div>
    {/* State is not being updated with userFeed */}
      <p>Total Tweets: {userFeed.length}</p>
    </div>
  );
}


const mapStateToProps = (state) => ({
  userFeed: state.userFeed,
  currentUser: state.user.currentUser,
  userFeed: state.userFeed
})

const mapDispatchToProps = (dispatch) => {
  return {
    // available as props.fetchUserFeed()
    fetchUserFeed: () => dispatch(onGetUserFeed())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFeed);