import classes from "./Navbar.module.css";
import { Link } from 'react-router-dom';


function Navbar(){

  return (
      <nav className={classes.navbar + " section-container"}>
        <h1 className={classes.title}>A Simple Blog</h1>
        <div className={classes.links}>
          <Link to="/">Home</Link>
          <Link to="/create">New Post</Link>
        </div>
      </nav>
  );
}

export default Navbar;