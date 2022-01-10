import thunk from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import {
  SET_USER,
  SET_PRELOAD,
  SET_RANDOM,
  Action,
  DispatchType,
  State,
} from "reducer/types";

const initialState = {
  user: 0,
  preload: -1,
  random: 0,
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.state.user,
      };

    case SET_PRELOAD:
      return {
        ...state,
        preload: action.state.preload,
      };

    case SET_RANDOM:
      return {
        ...state,
        random: action.state.random,
      };
  }
  return state;
};

export const store: Store<State, Action> & { dispatch: DispatchType } = createStore(reducer, applyMiddleware(thunk));
