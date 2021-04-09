import { useParams } from "react-router";
import useFetch from '../../custom-hooks/use-fetch';
import { useHistory } from 'react-router-dom';



export default function BlogDetails(){
  
  const { id } = useParams();
  const { data: post, error, isLoading } = useFetch(id);
  const history = useHistory();

  const handleOnClick = (id)=>{
    let posts = window.localStorage.getItem('posts');
    posts = JSON.parse(posts);
    posts = posts.filter(post => post.id !== id);
    window.localStorage.setItem('posts', JSON.stringify(posts));
    history.push('/');   
  }  
  
  return (
    <div className="blog-details section-container">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { post && (
        <article>
          <h2>{ post.title }</h2>
          <p><small>Autor: { post.author } </small></p>
          <div>{ post.body }</div>
          <button onClick={() => handleOnClick(post.id)} className='remove-button'>Remover</button>
        </article>  
      )}      
    </div>
  );
}