import classes from './Home.module.css';
import { useState, useEffect } from 'react';
import PostPreview from '../PostPreview/PostPreview';


function Home(){

  const [posts, setPosts] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState(null);

  const removePostHandler = (id)=>{
    setPosts(posts.filter(post => post.id !== id));
  }

  useEffect(()=>{
    fetch("http://localhost:8000/posts")
      .then(res => {
        if(!res.ok){
          throw Error("Hi there!");
        }
        return res.json();        
      })
      .then(data => {
        setTimeout(()=>{
          setPosts(data);
          setHasLoaded(true);
          setError(null);
        }, 1000);        
      })
      .catch(err => {
        setError(err.message);
        setHasLoaded(true);
      });
  }, []);

  return (
    <div className="section-container">
      {error && <div>{ error }</div>}
      {!hasLoaded && <div>Loading... </div>}
      { posts && posts.map(post => <PostPreview 
        post={post} 
        key={post.id} 
        removeHandler={removePostHandler} 
        />)
      } 
    </div>
  );
}

export default Home;