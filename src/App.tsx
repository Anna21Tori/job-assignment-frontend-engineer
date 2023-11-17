import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Article from "./Article";
import ArticleList from "./ArticleList";
import Editor from "./Editor";
import LoginRegister from "./LoginRegister";
import Logout from "./Logout";
import Profile from "./Profile";
import Settings from "./Settings";
import Header from "components/header.component";
import Footer from "components/footer.component";
import BaseLayout from "layout/base.layout";

const LoginView = lazy(() => import(`./pages/login/login.page`));

function App() {
  return (
    <Router>
      <BaseLayout>
        <Suspense fallback={<div>Page is Loading...</div>}>
          <Switch>
            <Route path="/editor" exact component={Editor} />
            <Route path="/editor/:slug" exact component={Editor} />
            <Route path="/login" exact component={LoginView} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/profile/:username" exact component={Profile} />
            <Route path="/profile/:username/favorites" exact component={Profile} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/:slug" exact component={Article} />
            <Route path="/" component={ArticleList} />
          </Switch>
        </Suspense>
      </BaseLayout>
    </Router>
  );
}

export default App;
