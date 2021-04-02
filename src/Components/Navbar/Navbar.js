import classes from "./Navbar.module.css";


function Navbar(){

  return (
      <nav className={classes.navbar + " section-container"}>
        <h1 className={classes.title}>A Simple Blog</h1>
        <div className={classes.links}>
          <a href="/">Home</a>
          <a href="/create">New Post</a>
        </div>
      </nav>
  );
}

export default Navbar;