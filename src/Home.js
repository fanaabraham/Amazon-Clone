import React from 'react';

import "./Home.css"
import Product from './Product';
const Home = () => {
    return (
        <div className='home'>
            <div  className='home_container'>
            {/* <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/> */}
            <img className='home_image' src=" https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" alt=""/>
        <div className='home_row'>
              <Product
            id="12321341"
            title=" LED Floor Lamp, Koopala Bright Tall Standing Lamp with 4 Brightness Levels&4 Color Temperatures, Adjustable Gooseneck, ..."
            price={40.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71O-hBnSjRL._AC_SL1500_.jpg"
            // 
          />
        

            <Product
            id="12345432"
            title="Greentime 3Pack Mini Fake Plants in Pots,Artificial Plastic Eucalyptus Plants,Wheat Grass Potted Faux Plants Indoor for Office Desk Coffee Table Bathroom Bedroom Home Decorations"
            price={20.99}
           image="https://m.media-amazon.com/images/I/717y5jhnOAL._AC_UL480_FMwebp_QL65_.jpg" 
      //
      />
      <Product
       id="49538094"
       title="HP Victus 15.6 Gaming Laptop PC, NVIDIA GeForce RTX 3050 Ti, AMD Ryzen 7 5800H, Refined 1080p IPS Display, Compact Design, All-in-One Keyboard with Enlarged Touchpad, HD Webcam (15-fb0028nr, 2022)"
       price={1099}
       rating={4}
       image="https://m.media-amazon.com/images/I/71rbwmEdSSL._AC_SL1500_.jpg" />
       
         
        </div>
        <div className='home_row'>
    
        <Product
            id="12321341"
            title="Gym Owner's Handbook: Everything You Need To Know About Running A Successful Gym. (Grow Your Gym Series) Paperback – December 2, 2020"
            price={19.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/410cEinWIvL._AC_SY780_.jpg"
            // 
          />
      <Product
       
            id="49538094"
            title="
            Jabra Elite 7 Pro in Ear Bluetooth Earbuds - Adjustable Active Noise Cancellation True Wireless Buds in a Compact Design with Jabra MultiSensor Voice..." 
            price={199.83}
            
             rating={4}
             image ="https://m.media-amazon.com/images/I/51b4IaPWkNL._AC_SL1080_.jpg"
           />
      <Product
          
            id="49538094"
            title="AKRacing NITRO Gaming Chair with High Backrest, Recliner, Swivel, Tilt, Rocker & Seat Height Adjustment Mechanisms, 5/10 Warranty - Carbon Black - PC; Mac; Linux" 
            price={399.83}
             rating={4}
             image="https://m.media-amazon.com/images/I/71IsbtykJxL._SY606_.jpg"
            
           />
        <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
          />
      
      
    

        </div>
        <div className='home_row'>
      <Product
       id="49538078"
         title="TeamGee Portable Monitor for Laptop, 12” Full HD IPS Display, Dual Triple Monitor Screen      Extender, HDMI/USB-A/Type-C Plug and Play for Windows, Chrome & Mac, Work with 13”-16” Laptops"
         price={900.99}
         rating={4}
      image="https://m.media-amazon.com/images/I/41W+LEJypcL._AC_SY1000_.jpg"
      />
       <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
        </div>
        <div className='home_row'>
        <Product
            id="90829332"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_SX679_.jpg"
           
            // image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
     


        </div>
        <div className='home_row'>
      <Product
      
 
      id="3254354345"
      title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
      price={598.99}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
   
      />
  
  <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          {/* <div className="home__row"> */}
          <Product
            id="903850"
            title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
          />
          <Product
            id="8903851"
            title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
            price={999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
          />
        

        </div>
        </div>
        </div>
    );
}

export default Home;

