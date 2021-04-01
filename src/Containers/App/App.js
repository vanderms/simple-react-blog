import classes from './App.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Components/Home/Home';

function App() {

  
  return (
   <div className="App">
     <Navbar/>
     <div className="content">
       <Home/>    
     </div>
   </div>
  );
}

export default App;
