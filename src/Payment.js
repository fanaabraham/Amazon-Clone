






import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { db } from './Firebase';

function Payment() {
  const [{ basket, user }, dispach] = useStateValue();
const navigate =useNavigate();
  const getBasketTotal = (basket) => {
    return basket?.reduce((sum, item) => item.price + sum, 0);
  };

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded,setSucceeded]=useState(false);
  const [processing,setProcessing]=useState('');

  const [clientSecret,setClientSecret]=useState(true);
  useEffect(()=>{
    const getClientSecret =async()=>{
        const response=await axios({
            method:'post',
            url:`/payments/create?total=${getBasketTotal(basket)*100}`,
        })
        .catch((err)=>console.log(err));

        // console.log(response.data.clientSecret );
        setClientSecret(response?.data.clientSecret);
    };

    getClientSecret();

  },[basket]);

  console.log('the secret is >>>>',clientSecret);
  
  const handleSubmit=async(event)=>{
event.preventDefault();
setProcessing(true);

const payload= await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
       card:elements.getElement(CardElement), 
    },
}).then(({paymentIntent})=>{
    //paymentIntent = payment confirmation

     db.collection('users')
     .doc(user?.uid)
     .collection('orders')
     .doc(paymentIntent.id)
     .set({
        basket:basket,
        amount:paymentIntent.amount,
        created:paymentIntent.created,
     });





    setSucceeded(true);
    setError(null);
    setProcessing(false);

    dispach({
        type:'EMPTY_BASKET',
    });

    navigate('/orders')
})


  }

  const handleChange=(event)=>{
   setDisabled(event.empty);
   setError(event.error?event.error.message:'');
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          checkout (
          <Link to="/checkout" className="alink">
            {basket?.length} items
          </Link>
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>Chicago,IL</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.map((item) => (
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total:{value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing||disabled||succeeded}>
                    <span>{processing?<p>processing</p>:"Buy Now"}</span>
                </button>
              </div>
              {error&&<div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;











