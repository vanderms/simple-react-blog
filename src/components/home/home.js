import PostPreview from '../post-preview/post-preview';
import useFetch from '../../custom-hooks/use-fetch';

function Home(){

  const { data : posts , isLoading, error } = useFetch();  
  
  return (
    <div className="section-container">
      { error && <div>{ error }</div>}
      { isLoading && <div>Loading... </div>}
      { posts && [...posts].reverse().map(post => <PostPreview 
        post={ post }
        key={ post.id } 
        />)
      } 
    </div>
  );
}

export default Home;