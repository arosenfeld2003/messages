import dashboardTypes from "./dashboard-types";

const INITIAL_STATE = {
  itemsList: []
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dashboardTypes.SET_LIST:
      return {
        ...state,
        itemsList: action.payload
      }
    default:
      return state;
  }
}

export {dashboardReducer};
