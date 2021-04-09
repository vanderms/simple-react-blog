import {useState, useEffect} from 'react';

function useFetch(id){

  id = Number.parseInt(id);
  const URL = 'assets/db.json'; 
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {    

    const abortController = new AbortController();

    function getDataFromLocalStorage(){
      let posts = JSON.parse(localStorage.getItem('posts'));
      
      if(id){
        let post = posts.filter(post => {         
          return post.id === id;
        })[0];                 
        setData(post);             
      } else {       
        setData(posts);
      }
      setIsLoading(false);
      setError(false);
    }

    async function fetchData(){
      try {
        const res = await fetch(URL, { signal: abortController.signal });
        
        if(!res.ok) {
          throw Error("Failed to connect to the server.");
        }

        const data = await res.json();
        window.localStorage.setItem('posts', JSON.stringify(data.posts));                

        if(id){
          let post = data.posts.filter(post => {         
            return post.id === id;
          })[0];                 
          setData(post);                  
        } else {       
          setData(data.posts);
        }
        setIsLoading(false);
        setError(false);

      } catch(err){
        if(err.name === "AbortError"){
          console.log('fetch aborted');          
        } else {
          setIsLoading(false);
          setError(err.message);   
        }
      }
    }
    
    if(window.localStorage.getItem('posts') === null){
      fetchData();      
    } else {      
      getDataFromLocalStorage();
    }
    
    return () => abortController.abort(); 
  }, [id]);  

  return { data, isLoading, error };
}

export default useFetch;