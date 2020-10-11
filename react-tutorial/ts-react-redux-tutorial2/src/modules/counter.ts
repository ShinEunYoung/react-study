//메서드 체이닝 방식
import { createAction, ActionType, createReducer } from 'typesafe-actions';
//액션 타입, 액션 생성 함수, 리듀서

export const increase = createAction('counter/INCREASE')();
export const decrease = createAction('counter/DECREASE')();
export const increaseBy = createAction(
  'counter/INCREASE_BY',
  (payload: number) => payload
)();

const actions = { increase, decrease, increaseBy }; // 모든 액션 생성함수들을 actions 객체에 넣습니다
type CounterAction = ActionType<typeof actions>; // ActionType 를 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있습니다

type CounterState = {
  count: number;
};
const initialState: CounterState = {
  count: 0,
};

const counter = createReducer<CounterState, CounterAction>(initialState) //, {
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));

export default counter;
