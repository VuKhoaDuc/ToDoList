import Imutable from "seamless-immutable";
import _ from "lodash";

export const types = {
  CHANGE_INPUT: "CHANGE_INPUT",
  RESET_INPUT: "RESET_INPUT"
};
// Selector

// Action Creators
export const actions = {
  typeChangeInput: payload => ({
    type: types.CHANGE_INPUT,
    payload
  }),

  resetInput: payload => ({
    type: types.RESET_INPUT,
    payload
  })
};

// User Reducer
const defaultState = {
  inputVal: "",
  isChanging: false
};
export const actionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_INPUT: {
      const inputVal = _.get(action, "payload") || "";
      const newState = Imutable.setIn(state, ["inputVal"], inputVal);

      return newState;
    }
    case types.RESET_INPUT: {
      return { isChanging: false };
    }
    default:
      return state;
  }
};

export const actionsEpic = {};
