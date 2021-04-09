import { useState } from 'react';
import styles from './CreatePost.module.css';

function CreatePost(){

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState("John Doe");

  function handleSubmit(e){
    e.preventDefault();
    const blog = { title, content, author };
    console.log(blog);
  }

  return (
    <div className="section-container">
      <div className={styles.container}>
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
            <select 
              name="author" 
              id="author"
              value={author}
              onChange ={(e) => setAuthor(e.target.value)}
              >
              <option value="John Doe">John Doe</option>
              <option value="Mary Ann">Mary Ann</option>
            </select>
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
        <button>Create Post</button>
      </form>
      </div>     
    </div>
  )
}

export default CreatePost;