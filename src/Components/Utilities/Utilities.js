import classes from './Utilities.module.css';


export function PostPreview(props){
  return (
    <div className={classes.postPreview}>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <small>{props.author}</small>
    </div>
  );
}
