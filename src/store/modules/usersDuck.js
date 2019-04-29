import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { getDataUser } from "../../services/user-service";

export const types = {
  RESET_STATE: "RESET_STATE",
  GET_DATA_BACKEND_START: "GET_DATA_BACKEND_START",
  GET_DATA_BACKEND_SUCCESS: "GET_DATA_BACKEND_SUCCESS",
  GET_DATA_BACKEND_FAILURE: "GET_DATA_BACKEND_FAILURE"
};
// Selector

// Action Creators
export const actions = {
  resetState: payload => ({
    type: types.RESET_STATE,
    payload
  }),

  getDataBackend: payload => ({
    type: "GET_DATA_BACKEND_START",
    payload
  }),
  getDataBackendSuccess: payload => ({
    type: "GET_DATA_BACKEND_SUCCESS",
    payload
  }),
  getDataBackendFailure: payload => ({
    type: "GET_DATA_BACKEND_FAILURE",
    payload
  })
};

// User Reducer
export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "RESET_STATE": {
      return {
        ...state,
        user: "Chờ nhập dữ liệu"
      };
    }
    case "GET_DATA_BACKEND_SUCCESS":
      console.log("mylog action in reducer: ", action);
      return {
        ...state,
        user: action.data,
        text: action.data.fullName,
        isSuccess: true
      };
    case "GET_DATA_BACKEND_FAILURE":
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
    action =>
      new Promise(resolve => {
        const dataGetDataUser = getDataUser(action.nickname);
        dataGetDataUser
          .then(data => {
            const dataPromise = data.additionalData.userData;
            resolve(actions.getDataBackendSuccess(dataPromise));
          })
          .catch(err => {
            resolve(actions.getDataBackendFailure(err));
          });
        console.log("mylog data: ", dataGetDataUser);
        window.dataGetDataUser = dataGetDataUser;
      })
  );

export const userEpics = { getDataEpic };
