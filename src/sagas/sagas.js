import { call, put, takeLatest } from "redux-saga/effects";
import {
  ApiCallForLogin,
  ApiCallForRegistration,
  ApiCallForFetchPost
} from "../services/index";
import { login_actions } from "../components/login/actions";
import { registerActions } from "../components/register/actions";
import { fetch_posts_actions } from "../components/dashboard/actions";

// worker Saga: will be fired on event of actions
function* LoginSaga(action) {
  try {
    const login = yield call(ApiCallForLogin, action.payload);
    console.log("Login", login);
    yield put({ type: login_actions.LoginActionSucceded, payload: login });
  } catch (e) {
    console.log("Into catch block", e);
    yield put({ type: login_actions.LoginActionFailed, message: e.message });
  }
}

function* RegisterSaga(action) {
  try {
    const register = yield call(ApiCallForRegistration, action.payload);
    console.log("Register", register);
    yield put({
      type: registerActions.RegisterActionSucceded,
      payload: register
    });
  } catch (e) {
    console.log("Into catch block");
    yield put({
      type: registerActions.RegisterActionFailed,
      message: e.message
    });
  }
}

function* FetchPostsSaga(action) {
  try {
    const posts = yield call(ApiCallForFetchPost, action.payload);
    console.log("Fetch posts", posts);
    yield put({
      type: fetch_posts_actions.FetchPostsActionSucceded,
      payload: posts
    });
  } catch (e) {
    console.log("Into catch block");
    yield put({
      type: fetch_posts_actions.FetchPostsActionFailed,
      message: e.message
    });
  }
}
/*
    Alternatively you may use takeLatest.

    Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
    dispatched while a fetch is already pending, that pending fetch is cancelled
    and only the latest one will be run.
  */
function* mySaga() {
  console.log("Calling main saga");
  yield takeLatest(login_actions.LoginActionRequested, LoginSaga);
  yield takeLatest(registerActions.RegisterActionRequested, RegisterSaga);
  yield takeLatest(
    fetch_posts_actions.FetchPostsActionRequested,
    FetchPostsSaga
  );
}

export default mySaga;
