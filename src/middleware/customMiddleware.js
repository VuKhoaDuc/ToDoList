import { getDataBackend } from "../actions";

export default ({ dispatch }) => next => action => {
  console.log("mylog action: ", action.type, action);
  switch (action.type) {
    case "GET_DATA_BACKEND": {
      break; 
    }
  }
  next(action);
};
