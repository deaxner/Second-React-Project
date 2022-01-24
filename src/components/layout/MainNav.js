import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/nieuwe-meeting"> Nieuwe Meeting</Link>
          </li>
          <li>
            <Link to="/favorieten"> Favorieten</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
