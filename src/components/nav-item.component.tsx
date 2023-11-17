import { Link } from "react-router-dom";

interface HeaderItemProps {
    title: string;
    slug: string
}
const NavItem = (props: HeaderItemProps) => {
    const {title, slug} = props;
    return (
        <li className="nav-item">
              <Link to={slug}>
                {title}
              </Link>
        </li>
    );
}

export default NavItem;