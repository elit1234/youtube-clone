import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fallback from "./Fallback";

const Home = React.lazy(() => import("./Views/Home"));
const Explore = React.lazy(() => import("./Views/Explore"));
const Subscriptions = React.lazy(() => import("./Views/Subscriptions"));
const Library = React.lazy(() => import("./Views/Library"));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Route path="/" exact component={Home} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/subscriptions" exact component={Subscriptions} />
        <Route path="/library" exact component={Library} />
      </Suspense>
    </Router>
  )
}

export default App;