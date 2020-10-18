import { Dispatch } from 'redux';
//import { RootState } from '..';
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';

export function getUserProfileThunk(username: string) {
  //return async (dispatch: Dispatch, getState: () => RootState) => {
  return async (dispatch: Dispatch) => {
    // const state = getState();
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());

    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
