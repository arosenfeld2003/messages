import dashboardTypes from "./dashboard-types";

export const setListOfItems = (list) => ({
  type: dashboardTypes.SET_LIST,
  payload: list
})
