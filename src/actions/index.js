export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggle= id => ({
  type: "TOGGLE",
  id
});


export const resetState = () => ({
    type: "RESET_STATE",
})

export const typeChangeInput = payload => ({
  type: "CHANGE_INPUT",
  payload
})

export const resetInput = payload => ({
  type: "RESET_INPUT",
  payload
})

export const getDataBackend = nickname => ({
  type: "GET_DATA_BACKEND",
  nickname
});
export const getDataBackendSuccess = data => ({
  type: "GET_DATA_BACKEND_SUCCESS",
  data
});
export const getDataBackendFailure = data => ({
  type: "GET_DATA_BACKEND_FAILURE",
  data
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETE: "SHOW_COMPLETE",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
