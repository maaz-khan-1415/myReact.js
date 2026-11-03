import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./productcard";
import Skeleton from "./Skeleton";


const Home = () => {
  const [products, setProducts] = useState([]);
  const[error,setError]=useState(0);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    const getProducts=async()=>{
      try{
      const {data,status}=await axios.get("https://dummyjson.com/products");
      if(status>=200 && status<300)
      {
        setProducts(data.products)
      }
      }catch(err){
       if(err.code=="Err_BAD_REQUEST")
        SpeechSynthesisErrorEvent(err.message);
      }
      finally{
        setLoading(false);
      }
    }
    getProducts();
  },[] );

  if(loading) return <Skeleton limit={30}/>
  if(error) return <h1>(error)</h1>

  return (
    <div className="container">
      {
        // products = [ {}, {}, {}, ......]
        products.map((element) => (
          <ProductCard key={element.id} element={element} />
        ))
      }
    </div>
  );
};

export default Home;

//2. Why does the API return an object?
//Because an object allows the API to organize different types of related information in one response.

//But React expects the effect callback to return either nothing or a cleanup function, not a Promise.

//An async function always returns a Promise.

//That's why we create a separate async function inside useEffect and call it

// - finally executes whether the request succeeds or fails.
// - setLoading(false) changes the loading state to false.
// - This tells React that the API request has finished.
// Why is this important?

// Because we don't want to keep showing skeleton cards after the API request has completed.

// This closes the useEffect.

// The empty dependency array [] means the effect runs when the component mounts, rather than after every render.

// map() is a JavaScript array method.

// It loops through the products array and returns a new array of elements.
//element represents the current product object during each iteration.

// API data comes in an object because the backend developer wants to send different information together in one response.

// For example, products, total, skip, and limit are stored in one object.

// Simply: An object keeps all related API data together in one place.