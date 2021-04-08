import classes from './Home.module.css';
import { useState, useEffect } from 'react';
import PostPreview from '../PostPreview/PostPreview';
import useFetch from '../../CustomHooks/useFetch';

function Home(){

  const { data, isLoading, error } = useFetch('http://localhost:8000/posts');  

  return (
    <div className="section-container">
      { error && <div>{ error }</div>}
      { isLoading && <div>Loading... </div>}
      { data && data.map(post => <PostPreview 
        post={ post }
        key={ post.id }      
        />)
      } 
    </div>
  );
}

export default Home;