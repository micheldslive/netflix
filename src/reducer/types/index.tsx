import { mapDispatchToProps, mapStateToProps } from "reducer/maps";

export interface State {
  user?: number;
  preload?: number;
  random?: number;
}

export type Action = {
  type: string;
  state: State;
};

export type DispatchType = (args: Action) => Action;

export type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export const SET_USER = "SET_USER";

export const SET_PRELOAD = "SET_PRELOAD";

export const SET_RANDOM = "SET_RANDOM";