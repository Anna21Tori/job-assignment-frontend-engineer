import NavItem from "./nav-item.component";

const Header = () => {
    return (
        <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/#">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <NavItem slug="/" title="Home"/>
            <NavItem slug="/editor" title="New Article"/>
            <NavItem slug="/settings" title="Settings"/>
            <NavItem slug="login" title="Sign in"/>
          </ul>
        </div>
      </nav>
    );
}
export default Header;
