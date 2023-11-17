import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Article from "./Article";
import ArticleList from "./ArticleList";
import Editor from "./Editor";
import Logout from "./Logout";
// import Profile from "./Profile";
import Settings from "./Settings";
import BaseLayout from "layout/base.layout";
import { UserProvider } from "contexts/user.context";

const LoginPage = lazy(() => import(`./pages/login/login.page`));
const ProfilePage = lazy(() => import(`./pages/profile/profile.page`));

function App() {
  return (
    <UserProvider>
      <Router>
        <BaseLayout>
          <Suspense fallback={<div>Page is Loading...</div>}>
            <Switch>
              <Route path="/editor" exact component={Editor} />
              <Route path="/editor/:slug" exact component={Editor} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/logout" exact component={Logout} />
              <Route path="/profile/:username" exact component={ProfilePage} />
              {/* <Route path="/profile/:username/favorites" exact component={Profile} /> */}
              <Route path="/settings" exact component={Settings} />
              <Route path="/:slug" exact component={Article} />
              <Route path="/" component={ArticleList} />
            </Switch>
          </Suspense>
        </BaseLayout>
      </Router>
    </UserProvider>
  );
}

export default App;
