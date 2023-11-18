import { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import BaseLayout from "layout/base.layout";
import { UserProvider } from "contexts/user.context";

const LoginPage = lazy(() => import(`./pages/login/login.page`));
const ProfilePage = lazy(() => import(`./pages/profile/profile.page`));
const HomePage = lazy(() => import(`./pages/home/home.page`));
const ArticlePage = lazy(() => import(`./pages/article/article.page`));

function App() {
  return (
    <UserProvider>
      <Router>
        <BaseLayout>
          <Suspense fallback={<div>Page is Loading...</div>}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              {/* <Route path="/editor" exact component={Editor} />
              <Route path="/editor/:slug" exact component={Editor} /> */}
              <Route path="/login" exact component={LoginPage} />
              {/* <Route path="/logout" exact component={Logout} /> */}
              <Route path="/profile/:username" exact component={ProfilePage} />
              <Route path="/:slug" exact component={ArticlePage} />
              {/* <Route path="/profile/:username/favorites" exact component={Profile} /> */}
              {/* <Route path="/settings" exact component={Settings} />
              
              <Route path="/" component={ArticleList} /> */}
            </Switch>
          </Suspense>
        </BaseLayout>
      </Router>
    </UserProvider>
  );
}

export default App;
