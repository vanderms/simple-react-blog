import classes from './App.module.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePost from '../CreatePost/CreatePost';


function App() {  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>  
          <Route path="/create">
            <CreatePost/>
          </Route>
        </Switch> 
      </div>
    </div>
    </Router>
   
  );
}

export default App;
