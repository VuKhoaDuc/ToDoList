const statusInput = (state = {}, action) => {
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
  
  export default statusInput;