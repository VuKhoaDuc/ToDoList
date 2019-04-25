const infor = (state = {}, action) => {
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
        isSuccess: true,
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

export default infor;
