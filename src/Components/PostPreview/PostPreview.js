import classes from './PostPreview.module.css';


function PostPreview({post, removeHandler}){
  return (
    <div className={classes.postPreview}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <small>{post.author}</small>
      <button onClick={()=> removeHandler(post.id)}>delete post</button>
    </div>
  );
}

export default PostPreview;