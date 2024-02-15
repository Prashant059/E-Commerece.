import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducers/cartReducer'

const CartContext = createContext();

const getLocalCartData = () => {
      const localCartData = localStorage.getItem("cartProducts");
      if(localCartData === null) {
         return [];
      } else {
        return JSON.parse(localCartData);
      };
};
console.log(getLocalCartData());
const initialState = {
    cartItem: getLocalCartData(), 
    total_item: 0,
    total_price: "",
};



const CartProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    
    
    // Increment and Decrement the toggle button in Cart.

    const setDecrease = (id) => {
        dispatch({type: "SET-DECREMENT", payload: id})
    };
    
    const setIncrease = (id) => {
        dispatch({type: "SET-INCREMENT", payload: id})
    };

    //  Remove and Add item from Cart.

    const addToCart = (id, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
    };

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      };

    // Add Existing data into local storage.
    useEffect(() => {

        if (state.cartItem !== null) {
            dispatch({ type: "TOTAL_ITEM" });
            localStorage.setItem("cartProducts", JSON.stringify(state.cartItem));
          }
    }, [state.cartItem, dispatch]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, setDecrease, setIncrease }}>
            {children}
        </CartContext.Provider>
    )
};


const useCartContext = () => {
    return useContext(CartContext);
};

export {useCartContext, CartProvider};