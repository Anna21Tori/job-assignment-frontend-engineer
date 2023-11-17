import React from "react";
import { NavLink } from "react-router-dom";

interface HeaderItemProps {
    slug: string;
    children: React.ReactNode;
}
const NavItem = (props: HeaderItemProps) => {
    const { children, slug } = props;
    return (
        <li className="nav-item">
            <NavLink to={slug} className="nav-link">
                {children}
            </NavLink>
        </li>
    );
}

export default NavItem;