import React from 'react';
import  "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';


import { useStateValue } from './StateProvider';
import {useNavigate} from "react-router-dom"
const Subtotal = () => {
  const navigate=useNavigate();

    const [{ basket }, dispatch] = useStateValue();//ezi 

 
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);// Ehe malet materakemachen ezandeandu zdemrlnal keitem gn wagawu bich
    return (
        <div className="subtotal">
       < CurrencyFormat
          renderText={(value) => (
            <div>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </div>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
         /> 
       
        <button onClick={(e) => navigate('/payment')}>
          Proceed to Checkout
        </button>
      </div>
    );
}

export default Subtotal;
