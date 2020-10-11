import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TodosAction = ActionType<typeof actions>; // ActionType 를 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있습니다

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
