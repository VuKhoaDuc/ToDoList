import { combineEpics, ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import {
    getDataUser
  } from "../services/user-service"

import { getDataBackend, getDataBackendSuccess, getDataBackendFailure} from "../actions";



const getDataEpic = (action$, store) =>
  action$.pipe(
    ofType("GET_DATA_BACKEND"),
    switchMap(
      action =>
        new Promise(resolve => {
            const dataGetDataUser = getDataUser(action.nickname);
            dataGetDataUser.then(data => {
                const dataPromise = data.additionalData.userData
                resolve(getDataBackendSuccess(dataPromise))
            }).catch(err => {
                resolve(getDataBackendFailure(err))
            })
            console.log("mylog data: ", dataGetDataUser);
            window.dataGetDataUser = dataGetDataUser;
        })
    )
  );

export default combineEpics(getDataEpic);
