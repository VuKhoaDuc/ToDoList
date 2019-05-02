import { combineEpics } from "redux-observable";
import _ from "lodash";
import { userEpics } from "./modules/usersDuck";
// import { actionsEpic } from "./modules/actionsDuck";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/toPromise";

export default combineEpics(..._.values(userEpics));
