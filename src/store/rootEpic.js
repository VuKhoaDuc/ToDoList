import { combineEpics } from "redux-observable";
import _ from "lodash";
import { userEpics } from "./modules/usersDuck";
import { actionsEpic } from "./modules/actionsDuck";

export default combineEpics(..._.values(userEpics), ..._.values(actionsEpic));
