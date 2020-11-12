import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  user: { email: 'test@123.com', password: '123456' }
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return { user: action.json.user }
  }
  return state
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}