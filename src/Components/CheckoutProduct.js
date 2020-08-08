import React from 'react'
import ProductRating from "./ProductRating"
import "./CheckoutProduct.css"
import { useStateValue } from "./StateProvider"

function CheckoutProduct({ id, title, image, price, rating }) {
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }



    return (
        <div className="checkoutProduct" >
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info" >
                <p className="checkoutProduct__title" >{title}</p>
                <p className="checkoutProduct__price" >
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <ProductRating rating={rating} />

                <button onClick={removeFromBasket} >Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
