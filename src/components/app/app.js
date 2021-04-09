import Navbar from '../navbar/navbar';
import Home from '../home/home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePost from '../create-post/create-post';
import BlogDetails from '../blog-details/blog-details';
import NotFound from '../not-found/not-found';
import Footer from '../footer/footer';

function App() {  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <main>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>  
          <Route path="/create">
            <CreatePost/>
          </Route>
          <Route path="/posts/:id">
            <BlogDetails/>
          </Route>
          <Route path='*'>
            <NotFound/>            
          </Route>
        </Switch>       
      </main>
    </div>
    <Footer/>
    </Router>   
  );
}

export default App;
