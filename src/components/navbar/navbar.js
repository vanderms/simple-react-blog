import classes from "./navbar.module.css";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Navbar(){

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() =>{
    setIsSidebarOpen(false);
  }, [location]);

  return (
    <>
      <nav className={ classes.navbar }>
        <Link to='/'>
          <h1 className={classes.title}>A Simple Blog</h1>
        </Link>       
        <div className={classes.links}>
          <Link to="/">Home</Link>
          <Link to="/create">Novo Post</Link>          
        </div>       
        <div className={classes.menu} onClick={() => setIsSidebarOpen(true)}>&#9776;</div>
      </nav>
      { isSidebarOpen &&
        <>
        <nav className={classes.sidebar}>        
          <Link to="/">Home</Link>
          <Link to="/create">Novo Post</Link>        
          <div className={classes.closeButton} onClick={() => setIsSidebarOpen(false)}>&#10005;</div> 
        </nav>
       
        <div className={classes.backdrop} onClick={() => setIsSidebarOpen(false)}></div>
        </>
      }     
    </>
  );
}

export default Navbar;