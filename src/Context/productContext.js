import { createContext, useContext, useEffect, useReducer, useCallback } from "react"
import axios from "axios";
import reducer from '../Reducers/productReducer'

const AppContext = createContext();

const API = "https://fakestoreapi.com/products";

const initialState = {
    isLoading : false,
    isError : false,
    products: [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ( {children} ) => {
  const [state, dispatch] = useReducer(reducer, initialState); 
  
  
// Calling all products Functions
  const getProducts = async (url) => {
    dispatch({type:'SET_LOADING'});

       try{
        const res = await axios.get(url);
        const products = await res.data;
        console.log(products);
        dispatch({type:'SET_API_DATA', payload: products} );
       } catch (error) {
        dispatch({type:'API_ERROR'})
       }
  };  
 
//   Caliing single products Functions.

  // const getSingleProduct = async (url) => {
  //   dispatch({ type: 'SET_SINGLE_LOADING' });
  //   try {
  //     const res = await axios.get(url);
  //     const singleProduct = await res.data;
  //     dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct });
  //   } catch (error) {
  //     dispatch({ type: 'SET_SINGLE-ERROR' });
  //   }
  // };

  const getSingleProduct = useCallback(async (url) => {
    dispatch({ type: 'SET_SINGLE_LOADING' });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct });
    } catch (error) {
      dispatch({ type: 'SET_SINGLE_ERROR' });
    }
  }, [dispatch]); // Include any dependencies from the component scope
  

  useEffect( () => {
    getProducts(API);
  }, []);

  

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct}}>
            {children}
        </AppContext.Provider>
        
    )
};

// custom hooks.
const useProductContext = () => {
    return useContext(AppContext);
};

export {AppProvider, AppContext, useProductContext};

