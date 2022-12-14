const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());

app.post("/payment", cors(), async (req, res) => {
    let { amount, id } = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "DEMO COMPANY",
            payment_method: id,
            confirm: true
        })
        console.log("Payment: ", payment);
        res.json({
            message: "Payment Successfull",
            success: true
        })
    } catch (error) {
        console.log("Error: ", error);
        res.json({
            message: "Payment Failed",
            success: false
        })
    }
})

app.listen(4000, () => {
    console.log("Server is running on port 4000 🟢");
})