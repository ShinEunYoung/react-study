import * as postAPI from "../api/posts";
import {
  createPromiseThunk,
  handleAsysyncAtions,
  reducerUtils,
} from "../lib/axyncUtils";

const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

const GET_POST = "posts/GET_POST";
const GET_POST_SUCCESS = "posts/GET_POST_SUCCESS";
const GET_POST_ERROR = "posts/GET_POST_ERROR";

const CLEAR_POST = "posts/CLEAR_POST";

export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postAPI.getPostsById);
export const clearPost = () => ({ type: CLEAR_POST });

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

const getPostsReducer = handleAsysyncAtions(GET_POSTS, "posts", true);
const getPostReducer = handleAsysyncAtions(GET_POST, "post");

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
