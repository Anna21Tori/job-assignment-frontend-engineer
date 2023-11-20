import { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import BaseLayout from "layout/base.layout";
import { UserProvider } from "contexts/user.context";

const LoginPage = lazy(() => import(`./pages/login/login.page`));
const ProfilePage = lazy(() => import(`./pages/profile/profile.page`));
const HomePage = lazy(() => import(`./pages/home/home.page`));
const ArticlePage = lazy(() => import(`./pages/article/article.page`));

/*
  TODO:
  - Upgrade version of React and other dependencies
  - Inseatd of using react context, use redux, redux-saga, redux-persist or react query
  - Implementing translation
  - Styling lazy loading e.g skeleton
  - Error page
  - Handle errors propely e.g. when sth went wrong during fetching data - shows information about it
  - Pagination or lazy loading to show next articels
  - Handle follow/unfollow properly
  - Increasing test coverage
*/
function App() {
  return (
    <UserProvider>
      <Router>
        <BaseLayout>
          <Suspense fallback={<div>Page is Loading...</div>}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/profile/:username" exact component={ProfilePage} />
              <Route path="/:slug" exact component={ArticlePage} />
            </Switch>
          </Suspense>
        </BaseLayout>
      </Router>
    </UserProvider>
  );
}

export default App;
