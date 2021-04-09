import classes from './home.module.css';
import { useState, useEffect } from 'react';
import PostPreview from '../post-preview/post-preview';
import useFetch from '../../custom-hooks/use-fetch';

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