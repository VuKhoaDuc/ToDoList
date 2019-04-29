// import {
//     getDataUser
//   } from "../../services/user-service";

export const types = {
    CHANGE_INPUT: "CHANGE_INPUT",
    RESET_INPUT: "RESET_INPUT",
    
  };
  // Selector
  
  // Action Creators
  export const actions = {
    
  
    typeChangeInput: payload => ({
      type: "CHANGE_INPUT",
      payload
    }),
  
    resetInput: payload => ({
      type: "RESET_INPUT",
      payload
    }),
  };
  
  
  // User Reducer
  export const actionsReducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_INPUT": {
            return {
              isChanging: true,
            };
          }
          case "RESET_INPUT": {
            return { isChanging: false }
          }
          default:
            return state;
        }
  };

  
  export const actionsEpic = {};