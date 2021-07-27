// import "./App.css";
import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import AppBar from "./components/AppBar";
import "./style.css";
import routes from "./routes";
import { connect } from "react-redux";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() =>
  import("./views/HomeView" /*webpackChunkName *home-view**/)
);
const RegisterPage = lazy(() =>
  import("./views/RegisterPage" /*webpackChunkName *movies-page**/)
);
const LoginPage = lazy(() =>
  import("./views/LoginPage" /*webpackChunkName *movie-details-page**/)
);
const ContactsPage = lazy(() =>
  import("./views/ContactsPage" /*webpackChunkName *movie-details-page**/)
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomeView} />
            <PublicRoute exact path={routes.registerPage} restricted
              redirectTo='/contacts' component={RegisterPage} />
            <PublicRoute
              path={routes.loginPage}
              restricted
              redirectTo='/contacts'
              component={LoginPage}
            />
            <PrivateRoute
              path={routes.contactsPage}
              component={ContactsPage}
              redirectTo='/login'
            />

            <Route component={HomeView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

// const App = () => {
//   return (
//     <>
//       <AppBar />

//       <Suspense fallback={<Loader />}>
//         <Switch>
//           <Route exact path={routes.home} component={HomeView} />
//           <Route exact path={routes.registerPage} component={RegisterPage} />
//           <Route path={routes.loginPage} component={LoginPage} />
//           <Route path={routes.contactsPage} component={ContactsPage} />

//           <Route component={HomeView} />
//         </Switch>
//       </Suspense>
//     </>
//   );
// };

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
