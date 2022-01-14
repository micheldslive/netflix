import thunk from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import { Action, DispatchType, State } from "reducer/types";
import { reducer } from "reducer/state";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "netflix",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store: Store<State, Action> & { dispatch: DispatchType } =
  createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
