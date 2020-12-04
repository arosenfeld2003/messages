import dashboardTypes from "./dashboard-types";
import axios from "axios";

import {setListOfItems} from "./dashboard-action";

const INITIAL_STATE = {
  usersList: []
}

const loadUsers = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/users")
    .then((res) => {
      dispatch(setListOfItems(res.data));
    }).catch((error) => {
      console.log(error);
    })
  }
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dashboardTypes.SET_LIST:
      return {
        ...state,
        usersList: action.payload
      }
    default:
      return state;
  }
}

export {dashboardReducer};
