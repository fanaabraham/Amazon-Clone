import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Checkout from './Checkout'; 
import Login from './Login';
import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import { auth } from './Firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
 const promise= loadStripe("pk_test_51Lw9slDP4vFusEUsOrPtSh4I5qGoBtPz7UexVipcwqfNprmwgm2Zg25RXzn2XXuqHwNZ2WHfXPhidwe64oCHQIDz00hmo8dNKf")


// sk_test_51Lw9slDP4vFusEUsrVANBbMqoF36sjmBH0Flv74bd9Sg2EKEEV92NMVIhjPyq4v8ffqQzukPm8r6J8cRCdxKCi9V00VylAv7rm

function App() {
  const [{}, dispach] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log('the user is>>>',authUser);
      if (authUser) {//reducer ezi wst bado [] yskemtne authUser ehen amtalign
        //the user just loged in or was loged in
        dispach({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out
        dispach({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    
   <Router> 
    <div className='App'>
      < Routes >
      <Route path="/checkout" element= {<><Header/> <Checkout/></>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/orders" element= {<><Header/><Orders/></>}/>
      
      <Route path="/payment" 
        element={
        <Elements stripe={promise}>
          <Payment />
          </Elements>} 
          />

      
     
    
  
    <Route path="/" element={<><Header/><Home/></>}/>
    
     
    </Routes>
    </div> 
    </Router>
   
  );
}

export default App;
