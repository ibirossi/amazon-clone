const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hj18mJDf1jCzZvmY09MDq0DPLdV3PQCSPkYewUU4C5jWlO7gXHosEPtulOzAl0DpY5IlZUdLcL1RIRMdOYafoHa00VCwHZ150"
);

//Set Up for API//

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment requestt received for this amount", total);

  const paymentItent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
  });
  //ok - created
  res.status(201).send({
    clientSecret: paymentItent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//example api endpoint
//http://localhost:5001/clone-14b2b/us-central1/api
