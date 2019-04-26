const initialState = {
  user: null,
  isSuccess: false,
  error: null,
  isFetching: false,
}

const infor = (state = {...initialState}, action) => {
  switch (action.type) {
    
    case "RESET_STATE": {
      return {
        ...initialState
      };
    }
    case "GET_DATA_BACKEND_SUCCESS":
      console.log("mylog action in reducer: ", action);
      return {
        ...initialState,
        user: action.data,
        isSuccess: true,
      };
    case "GET_DATA_BACKEND_FAILURE":
      console.log("mylog action fail in reducer: ", action);
      return {
        ...initialState,
        error: action.data.message,
      };
    default:
      return state;
  }
};

export default infor;
