import { combineReducers } from "redux";
import { userReducer } from "./modules/usersDuck";
import {actionsReducer } from "./modules/actionsDuck"

const appReducer = combineReducers({
  user: userReducer,
  action: actionsReducer
});

export default function createReducer(state, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }

  return appReducer(newState, action);
}
