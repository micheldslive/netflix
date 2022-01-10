import { bindActionCreators, Dispatch } from "redux";
import * as action from "reducer/actions";
import { State } from "reducer/types";

export const mapStateToProps = (state: State) => ({ state });

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(action, dispatch);
