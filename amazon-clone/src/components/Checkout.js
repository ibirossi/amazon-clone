import React from "react";
import "./Checkout.css";
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://i.imgur.com/8Wje1hr.jpg"
          alt="advert"
        />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
      <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
