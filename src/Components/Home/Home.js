import classes from './Home.module.css';
import { useState, useEffect } from 'react';
import PostPreview from '../PostPreview/PostPreview';


function Home(){

  const [posts, setPosts] = useState([
    {title: "My new website", body: "Lorem ipsum...", author: "Henry VIII", id: 1},
    {title: "Welcome party!", body: "Lorem ipsum...", author: "Charles V", id: 2},
    {title: "Web dev top tips", body: "Lorem ipsum...", author: "Francis I", id: 3},
  ]);
    
  const removePostHandler = (id)=>{
    setPosts(posts.filter(post => post.id !== id));
  }

  useEffect(()=>{
    console.log("use effect ran");
  }, []);

  return (
    <div className="section-container">
      { posts.map(post => <PostPreview 
        post={post} 
        key={post.id} 
        removeHandler={removePostHandler} 
        />)
      } 
    </div>
  );
}

export default Home;