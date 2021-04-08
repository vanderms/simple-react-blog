import classes from './PostPreview.module.css';


function PostPreview({post}){
  return (
    <div className={classes.postPreview}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <small>{post.author}</small>      
    </div>
  );
}

export default PostPreview;