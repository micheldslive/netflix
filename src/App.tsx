import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { persistor, store } from "reducer/store";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
