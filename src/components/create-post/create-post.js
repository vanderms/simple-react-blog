import { useState } from 'react';
import styles from './create-post.module.css';
import { useHistory } from 'react-router-dom';

function CreatePost(){

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e){
    e.preventDefault();
    const post = { title, body: content, author };
    
    setIsLoading(true);

    let posts = window.localStorage.getItem('posts');
    posts = JSON.parse(posts);
    post.id = posts[posts.length - 1].id + 1; 
    posts.push(post);
    window.localStorage.setItem('posts', JSON.stringify(posts));
    console.log('new post added');
    setIsLoading(false);
    history.push('/');   
  }

  return (
    <div className="section-container">      
      <h2>Write a new post</h2>
      <form onSubmit={ handleSubmit } className={styles.form}>
        <div className={styles.formFirstRow}>
          <div>
            <label htmlFor='title'>Title: </label>   
            <input 
              type="text"
              id='title'
              value={ title }
              onChange={(e)=>setTitle(e.target.value)}
              required
            />        
          </div>
          <div>
            <label htmlFor='author'>Author: </label>
            <input 
              type="text"
              id='author'
              value={ author }
              onChange={(e)=>setAuthor(e.target.value)}
              required
            />      
          </div>
        </div>
        <label htmlFor="content">Content:
          <textarea
            id="content" 
            cols="30" 
            rows="10"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            required>
          </textarea>     
        </label>        
        { isLoading ? 
          <button disabled>...</button> :
          <button>Publicar</button>
        }        
      </form>         
    </div>
  )
}

export default CreatePost;