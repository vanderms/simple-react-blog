import classes from "./Navbar.module.css";


function Navbar(){

  return (
      <nav className={classes.navbar}>
        <h1 className={classes.title}>A Simple Blog</h1>
        <div className={classes.links}>
          <a href="/">Home</a>
          <a href="/create">New Blog</a>
        </div>
      </nav>
  );
}

export default Navbar;