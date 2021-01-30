import React, { useEffect } from "react";
import { connect } from "react-redux";
import { onGetUserFollowers } from "../../redux/user/user-reducer";

const Followers = (props) => {
  const { user, fetchUserFollowers, userFollowers } = props;
  const loadUserFollowers = () => {
    fetchUserFollowers(user) || [];
  }
  useEffect(() => {
    loadUserFollowers()
  }, [])
  /*
    userFollowers: {…}
  ​    followers: (1) […]
    ​​​​    0: {…}
      ​​​​​    created_at: "2021-01-24T23:31:36.596Z"
      ​​​​​    email: "testfour@test.com"
      ​​​​​    firstname: null
      ​​​​​    handle: "testfour"
      ​​​​​    id: 4
      ​​​​​    is_admin: false
      ​​​​​    lastname: null
      ​​​​​    updated_at: "2021-01-24T23:31:36.596Z"
​​​    <prototype>: Object { … }
​    length: 1
  */
  return (
    <div>
      <h3 className="Followers">UserFollowers</h3>
      {
        userFollowers.followers != undefined ? userFollowers.followers.map(follower => (
          <p>{follower.handle}</p>
        )) : ''
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  userFollowers: state.user.userFollowers,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFollowers: (user) => dispatch(onGetUserFollowers(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Followers);