import { useParams } from "react-router";
import useFetch from '../../CustomHooks/useFetch';



export default function BlogDetails(){
  
  const { id } = useParams();
  const { data: post, error, isLoading } = useFetch('http://localhost:8000/posts/' + id);
  
  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { post && (
        <article>
          <h2>{ post.title }</h2>
          <p><small>written by: { post.author } </small></p>
          <div>{ post.body }</div>
        </article>  
      )}      
    </div>
  );
}