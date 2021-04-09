import classes from './PostPreview.module.css';
import { Link } from 'react-router-dom';

function PostPreview({post}){
  return (
    <div className={classes.postPreview}>
      <Link to={`/posts/${post.id}`} >
        <h3>{post.title}</h3>      
        <p>{post.body}</p>      
      </Link>   
      <small>{post.author}</small>      
    </div>
  );
}

export default PostPreview;