import {useState, useEffect} from 'react';

function useFetch(url){

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {    

    const abortController = new AbortController();

    async function fetchData(){
      try {
        const res = await fetch(url, { signal: abortController.signal });
        
        if(!res.ok) {
          throw Error("Failed to connect to the server.");
        }

        const data = await res.json();
        setData(data);
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
    fetchData();
    return () => abortController.abort(); 
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;