import * as postAPI from "../api/posts";
import {
  handleAsysyncAtions,
  handleAsysyncAtionsById,
  reducerUtils,
  createPromiseSaga,
  createPromiseSagaById,
} from "../lib/axyncUtils";
import { call, put, takeEvery, getContext, select } from "redux-saga/effects";

const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

const GET_POST = "posts/GET_POST";
const GET_POST_SUCCESS = "posts/GET_POST_SUCCESS";
const GET_POST_ERROR = "posts/GET_POST_ERROR";

const CLEAR_POST = "posts/CLEAR_POST";

const GO_TO_HOME = "posts/GO_TO_HOME";

const PRINT_STATE = "posts/PRINT_STATE";

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id });
export const printState = () => ({ type: PRINT_STATE });

const getPostsSaga = createPromiseSaga(GET_POSTS, postAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postAPI.getPostsById);

function* goToHomeSaga() {
  const history = yield getContext("history");
  history.push("/");
}

function* printStateSaga() {
  const state = yield select((state) => state.posts);
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSaga);
  yield takeEvery(PRINT_STATE, printStateSaga);
}

// export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
// export const getPost = createPromiseThunkById(GET_POST, postAPI.getPostsById);
export const goToHome = () => ({ type: GO_TO_HOME });

export const clearPost = () => ({ type: CLEAR_POST });

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

const getPostsReducer = handleAsysyncAtions(GET_POSTS, "posts", true);
const getPostReducer = handleAsysyncAtionsById(GET_POST, "post", true);

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);

    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);

    case CLEAR_POST:
      return { ...state, post: reducerUtils.initial() };
    default:
      return state;
  }
}
