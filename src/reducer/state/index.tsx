import { SET_USER, SET_PRELOAD, SET_RANDOM, Action, State } from "reducer/types";

const initialState = {
  user: 0,
  preload: -1,
  random: 0,
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.state.user };

    case SET_PRELOAD:
      return { ...state, preload: action.state.preload };

    case SET_RANDOM:
      return { ...state, random: action.state.random };
  }
  return state;
};
