import classes from './post-preview.module.css';
import { Link } from 'react-router-dom';

function PostPreview({post}){
  return (
    <div className={classes.postPreview}>
      <Link to={`/posts/${post.id}`} >
        <h3 className={classes.title}>{post.title}</h3>      
        <small>Autor: {post.author}</small>
        <p className={classes.content}> {post.body}</p>
      </Link>           
    </div>
  );
}

export default PostPreview;