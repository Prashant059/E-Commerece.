import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../Context/cart_context';

const CartItem = ({ id, name, amount, price, img }) => {
    const { removeItem, setDecrease, setIncrease } = useCartContext();

    return (
        <div className='cart-heading grid grid-five-column container-fluid '>
            <div className='cart-image--name'>
                {/* Image and title of product */}
                <div>
                    <figure>
                        <img src={img} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                </div>
            </div>
            <div className='cart-price'>
                {/* Price of product inside cart */}
                <p>
                    <FormatPrice price={price} />

                </p>
            </div>

            {/* QUuanity */}
            <div className='cart-button'>
                <CartAmountToggle
                    amount={amount}
                    setDecrease={() => setDecrease(id)}
                    setIncrease={() => setIncrease(id)}
                />
            </div>


            {/* SubTotal */}
            <div className='cart-hide subtotal'>
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div>

            <div className='remove'>
                <FaTrash className='remove-icon' color='' onClick={() => removeItem(id)} />
            </div>
        </div>
    )
}

export default CartItem;