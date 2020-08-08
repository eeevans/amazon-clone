import React from 'react';
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div>
            <img className="checkout__ad" 
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt="" />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping basket is empty.</h2>
                    </div>
            ) : (
                <div>
                    <h2>Your shopping basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            key={item.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Checkout
