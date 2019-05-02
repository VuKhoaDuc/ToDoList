import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import Imutable from "seamless-immutable";
import { getDataUser } from "../../services/user-service";
import _ from "lodash";

export const types = {
  RESET_STATE: "RESET_STATE",
  GET_DATA_BACKEND_START: "GET_DATA_BACKEND_START",
  GET_DATA_BACKEND_SUCCESS: "GET_DATA_BACKEND_SUCCESS",
  GET_DATA_BACKEND_FAILURE: "GET_DATA_BACKEND_FAILURE"
};
// Selector
export const getInforUser = state => {
  return state.user.inforUser;
};

// Action Creators
export const actions = {
  resetState: payload => ({
    type: types.RESET_STATE,
    payload
  }),

  getDataBackend: payload => ({
    type: types.GET_DATA_BACKEND_START,
    payload
  }),
  getDataBackendSuccess: payload => ({
    type: types.GET_DATA_BACKEND_SUCCESS,
    payload
  }),
  getDataBackendFailure: payload => ({
    type: types.GET_DATA_BACKEND_FAILURE,
    payload
  })
};

// User Reducer
const defaultState = {
  inforUser: []
};
export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.RESET_STATE: {
      return {
        ...state,
        user: "Chờ nhập dữ liệu"
      };
    }
    case types.GET_DATA_BACKEND_SUCCESS:
      const newInforUser = _.get(action, "payload") || [];
      const newState = Imutable.setIn(state, ["inforUser"], newInforUser);
      return newState;

    case types.GET_DATA_BACKEND_FAILURE:
      console.log("mylog action fail in reducer: ", action);
      return {
        ...state,
        error: action.data.message,
        isHaveError: true
      };
    default:
      return state;
  }
};
// Epic Middleware

const getDataEpic = (action$, store) =>
  action$.ofType(types.GET_DATA_BACKEND_START).switchMap(
    ({ payload }) =>
      new Promise(resolve => {
        const state = store.getState();
        const nickname = _.get(state, "action.inputVal", "");
        const dataGetDataUser = getDataUser(nickname);
        dataGetDataUser
          .then(data => {
            const dataPromise = data.additionalData.userData;
            resolve(actions.getDataBackendSuccess(dataPromise));
          })
          .catch(err => {
            resolve(actions.getDataBackendFailure(err));
          });
        window.dataGetDataUser = dataGetDataUser;
      })
  );

export const userEpics = { getDataEpic };
