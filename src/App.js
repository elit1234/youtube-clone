import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fallback from "./Fallback";

const Home = React.lazy(() => import("./Views/Home"));
const Explore = React.lazy(() => import("./Views/Explore"));
const Subscriptions = React.lazy(() => import("./Views/Subscriptions"));
const Library = React.lazy(() => import("./Views/Library"));
const Login = React.lazy(() => import("./Views/Login"));
const Account = React.lazy(() => import("./Views/Account"));
const Logout = React.lazy(() => import("./Views/Logout"));
const Channel = React.lazy(() => import("./Views/Channel"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Route path="/" exact component={Home} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/subscriptions" exact component={Subscriptions} />
        <Route path="/library" exact component={Library} />
        <Route path="/login" exact component={Login} />
        <Route path="/account" exact component={Account} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/channel/:channelid" exact component={Channel} />
      </Suspense>
    </Router>
  );
};

export default App;
