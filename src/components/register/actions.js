export const registerActions = {
  RegisterActionRequested: "register/REGISTER_USER_REQUESTED",
  RegisterActionSucceded: "register/REGISTER_USER_SUCCEEDED",
  RegisterActionFailed: "register/REGISTER_USER_FAILED"
};

export const register_request = params => ({
  type: registerActions.RegisterActionRequested,
  payload: params
});
export const register_success = data => ({
  type: registerActions.RegisterActionSucceded,
  payload: data
});
export const register_failed = err => ({
  type: registerActions.RegisterActionFailed,
  payload: err
});
