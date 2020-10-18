import { createReducer } from 'typesafe-actions';
import { GithubState, GithubAction } from './types';
import {
  // GET_USER_PROFILE,
  // GET_USER_PROFILE_SUCCESS,
  // GET_USER_PROFILE_ERROR,
  getUserProfileAsync,
} from './actions';
import {
  asyncState,
  createAsyncReducer,
  transformToArray,
} from '../../lib/reducerUtils';

// const initialState: GithubState = {
//   userProfile: {
//     loading: false,
//     error: null,
//     data: null,
//   },
// };

// const github = createReducer<GithubState, GithubAction>(initialState, {
//   [GET_USER_PROFILE]: (state) => ({
//     ...state,
//     userProfile: { loading: true, error: null, data: null },
//   }),
//   [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//     ...state,
//     userProfile: { loading: false, error: null, data: action.payload },
//   }),
//   [GET_USER_PROFILE_ERROR]: (state, action) => ({
//     ...state,
//     userProfile: { loading: false, error: action.payload, data: null },
//   }),
// });

const initialState: GithubState = {
  userProfile: asyncState.initial(),
};

// const github = createReducer<GithubState, GithubAction>(initialState, {
//   [GET_USER_PROFILE]: (state) => ({
//     ...state,
//     userProfile: asyncState.load(),
//     //userProfile: asyncState.load(state.userProfile.data), // 이전 상태 값 유지하고 싶으면 값 넣어줌
//   }),
//   [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//     ...state,
//     userProfile: asyncState.success(action.payload),
//   }),
//   [GET_USER_PROFILE_ERROR]: (state, action) => ({
//     ...state,
//     userProfile: asyncState.error(action.payload),
//   }),
// });

// const github = createReducer<GithubState, GithubAction>(
//   initialState
// ).handleAction(
//   [
//     getUserProfileAsync.request,
//     getUserProfileAsync.success,
//     getUserProfileAsync.failure,
//   ],
//   createAsyncReducer(getUserProfileAsync, 'userProfile')
// );

const github = createReducer<GithubState, GithubAction>(
  initialState
).handleAction(
  transformToArray(getUserProfileAsync),
  createAsyncReducer(getUserProfileAsync, 'userProfile')
);

export default github;
