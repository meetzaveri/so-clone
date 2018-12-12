import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes/routes";
import { withAuth as AuthWrapper } from "./wrappers/auth";
import Loadable from "react-loadable";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import "./App.css";
import "./components/main.css";

const store = configureStore({});

const Loading = () => <div>Loading ...</div>;

const LoginContainerLoader = Loadable({
  loader: () => import("./containers/Login"),
  loading: Loading
});

const RegisterContainerLoader = Loadable({
  loader: () => import("./containers/Register"),
  loading: Loading
});

const DashboardContainerLoader = Loadable({
  loader: () => import("./containers/Dashboard"),
  loading: Loading
});

const WritePostContainerLoader = Loadable({
  loader: () => import("./containers/Writepost"),
  loading: Loading
});

const ReadPostContainerLoader = Loadable({
  loader: () => import("./containers/ReadPost"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Router>
            <Switch>
              <Route
                exact
                path={routes.login}
                component={LoginContainerLoader}
              />
              <Route
                exact
                path={routes.register}
                component={RegisterContainerLoader}
              />
              <Route
                exact
                path={routes.index}
                component={DashboardContainerLoader}
              />
              <Route
                exact
                path={routes.write}
                component={WritePostContainerLoader}
              />
              <Route
                exact
                path={routes.read + ":id"}
                component={ReadPostContainerLoader}
              />
            </Switch>
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
