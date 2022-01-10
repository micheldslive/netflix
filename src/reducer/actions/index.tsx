import {
  SET_USER,
  SET_PRELOAD,
  SET_RANDOM,
  State,
  Action,
  DispatchType,
} from "reducer/types/index";

export function setUser(state: State) {
  const action: Action = {
    type: SET_USER,
    state,
  };

  return simulateHttpRequest(action);
}

export function setPreload(state: State) {
  const action: Action = {
    type: SET_PRELOAD,
    state,
  };

  return simulateHttpRequest(action);
}

export function setRandom(state: State) {
  const action: Action = {
    type: SET_RANDOM,
    state,
  };

  return simulateHttpRequest(action);
}

function simulateHttpRequest(action: Action) {
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
