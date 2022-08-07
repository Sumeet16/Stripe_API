import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51LBwr5SAPjZcwZjNK2yfvdlfvqJwuUgJDtO9reMWMthC824NCC7ztOCBsg8iFyD66jLiXTzmok4lS1osOZcLBb4p00bTK66v5M";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
    </Elements>
  )
}

export default StripeContainer