import { ActionType, createAction, createReducer } from 'typesafe-actions';

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

export const addTodo = createAction(ADD_TODO, (text: string) => ({
  id: nextId++,
  text: text,
}))();

export const toggleTodo = createAction(
  TOGGLE_TODO,
  (payload: number) => payload
)();

export const removeTodo = createAction(
  REMOVE_TODO,
  (payload: number) => payload
)();

const actions = { addTodo, toggleTodo, removeTodo }; // 모든 액션 생성함수들을 actions 객체에 넣습니다
type TodosAction = ActionType<typeof actions>; // ActionType 를 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있습니다

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload, // id, text 를 이 안에 넣기
      done: false,
    }),
  // 바구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있음
  [TOGGLE_TODO]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

export default todos;
