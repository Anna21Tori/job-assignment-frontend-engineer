import { useContext } from "react";
import NavItem from "./nav-item.component";
import { IUserContext, UserContext } from "contexts/user.context";
import { Avatar } from "@mui/material";
import image from "../assets/user.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { currentUser } = useContext<IUserContext>(UserContext);
  return (
    <nav className="navbar navbar-light main-header">
      <div className="container d-flex justify-content-between">
        <div>
          <a className="navbar-brand" href="/">
            conduit
          </a>
        </div>

        <div className="d-flex justify-content-end">
          <ul className="navbar-nav">
            <NavItem slug="/">Home</NavItem>
            {!currentUser && <NavItem slug="/login">Sign in</NavItem>}
            {currentUser && (
              <li className="nav-item">
                <Avatar
                  src={currentUser.image ? currentUser.image : image}
                  component={NavLink}
                  to={`/profile/${currentUser.username}`}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
