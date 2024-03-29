// const functions = require("firebase-functions");

// const express = require('express');
// const cors = require('cors');
// const stripe = require('stripe')(
//    'sk_test_51Lw9slDP4vFusEUsrVANBbMqoF36sjmBH0Flv74bd9Sg2EKEEV92NMVIhjPyq4v8ffqQzukPm8r6J8cRCdxKCi9V00VylAv7rm'
  
// );
// // - App config
// const app = express();

// // - Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());//ymnlkew file

// app.get('/', (request, response) => response.status(200).send('hello world'));


// app.post('/payments/create', async (request, response) => {
//   const total = request.query.total;

//   console.log('Payment Request Recieved for this amount >>> ', total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // subunits of the currency
//     currency: 'usd',
//   });

//   // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });




// // - Listen command
// exports.api = functions.https.onRequest(app);


// //http://127.0.0.1:5001/fir-ea9f8/us-central1/api.






const functions = require("firebase-functions");
const express=require('express');
const cors=require('cors')
const stripe=require('stripe')(
 'sk_test_51Lw9slDP4vFusEUsrVANBbMqoF36sjmBH0Flv74bd9Sg2EKEEV92NMVIhjPyq4v8ffqQzukPm8r6J8cRCdxKCi9V00VylAv7rm'
)

//App config
const app=express();
//-middlewares
app.use(cors({origin:true}));
app.use(express.json());

app.get('/',(req,res)=>res.status(200).send('hello world'));

app.post('/payments/create', async(req,res)=>{
    const total=req.query.total;

    console.log('payment recieved for this amount >>>',total);
    
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:'usd',
    });

    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
})

//listen command 
exports.api=functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-6d084/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });