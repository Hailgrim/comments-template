import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import store from "./store/store";
import Comments from "./components/Comments/Comments";

const AppClear: React.FC = () => {
  return (
    <main>
      <Comments />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppClear />
    </Provider>
  );
};

export default App;
