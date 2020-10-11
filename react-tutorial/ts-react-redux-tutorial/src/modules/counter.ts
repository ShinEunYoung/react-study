import { createAction, ActionType, createReducer } from 'typesafe-actions';
//액션 타입, 액션 생성 함수, 리듀서

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();

export const increaseBy = createAction(
  INCREASE_BY,
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

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }), // 액션을 참조 할 필요 없으면 파라미터로 state 만 받아와도 됩니다
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }), // 액션의 타입을 유추 할 수 있습니다.
});

export default counter;
