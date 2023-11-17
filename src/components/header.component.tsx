import { useContext } from "react";
import NavItem from "./nav-item.component";
import { IUserContext, UserContext } from "contexts/user.context";

const Header = () => {
    const { currentUser } = useContext<IUserContext>(UserContext);
    return (
        <nav className="navbar navbar-light">
        <div className="container d-flex justify-content-between">
          <div>
            <a className="navbar-brand" href="/">
              conduit
            </a>
          </div>
          
          <div className="d-flex justify-content-end"> 
              <ul className="navbar-nav">
                <NavItem slug="/">
                  Home
                </NavItem>
                {
                  currentUser && 
                  <NavItem slug="/editor">
                    <i className="ion-compose" />
                    &nbsp;New Article
                  </NavItem>
                }
                {
                  currentUser && 
                  <NavItem slug="/settings">
                    Settings
                  </NavItem>
                }
                {
                  !currentUser && 
                  <NavItem slug="/login">
                    Sign in
                  </NavItem>
                }
                {
                  currentUser && 
                  <NavItem slug="/login">
                    <img src={currentUser.image} />
                    &nbsp;{currentUser.username}
                  </NavItem>
                }
              </ul>
          </div>
        </div>
      </nav>
    );
}
export default Header;
