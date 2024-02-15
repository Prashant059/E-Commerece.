const CartReducer = (state, action) => {
  console.log(state);

  
  // Call action for Cart if user click on add.
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;

    let cartProduct;

    cartProduct = {
      id,
      amount,
      img: product.image,
      name: product.title,
      price: product.price
    };

    

    return {
      ...state,
      cartItem: [...state.cartItem, cartProduct],
    }

  }


  // Call action for Cart if user click on remove.
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cartItem.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cartItem: updatedCart,
    };
  }

  // Call action for Cart if user click on toggle remove button inside cart.
  if (action.type === "SET-DECREMENT") {
    const updatedProduct = state.cartItem.map((curEl) => {
      if (curEl.id === action.payload) {
        let decAmount = curEl.amount - 1;

         if(decAmount < 1) {
          decAmount = 1;
         }

        return {
          ...curEl,
          amount: decAmount,
        }

      } else {
        return curEl
      }
    });

    return {...state, cartItem : updatedProduct}
  }

    // Call action for Cart if user click on toggle ADD button inside cart.
    if (action.type === "SET-INCREMENT") {
      const updatedProduct = state.cartItem.map((curEl) => {
        if (curEl.id === action.payload) {
          let increAmount = curEl.amount + 1;
  
           if(increAmount >= curEl.max) {
             increAmount = curEl.max;
           }
  
          return {
            ...curEl,
            amount: increAmount,
          }
  
        } else {
          return curEl
        }
      });
  
      return {...state, cartItem : updatedProduct}
    }
    
  // Call action for Cart to update cart total items.
  if (action.type === "TOTAL_ITEM") {
    console.log(state.cartItem);

    let updateTotalValue = state.cartItem.length > 0
      ? state.cartItem.reduce((initialVal, curEl) => {
        let { amount } = curEl;
        let initialAmt = initialVal + amount;
        return initialAmt;
      }, 0) 
      : 0;  

      console.log(updateTotalValue); 
      
      return {
        ...state,
        total_item: updateTotalValue,
      }

    
    // if (state.cartItem !== null) {
    //   let updateTotalValue = state.cartItem.reduce((initialVal, curEl) => {
    //     let { amount } = curEl;
    //     let initialAmt = initialVal + amount;
  
    //     return initialAmt;
    //   }, 0);
  
    //   console.log(updateTotalValue);
  
      
    // } else {
    //   console.log(`Here from Total Item else block`);
    //   return state;
    // }
  }

  return state;
};

export default CartReducer;
