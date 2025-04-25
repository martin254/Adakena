import React, { useState, useContext } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { ShopContext } from '../context/ShopContext'

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const { getCartAmount } = useContext(ShopContext)
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setStatus("Creating payment…")

    // 1) ask our backend for a PaymentIntent
    const res = await fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: Math.round(getCartAmount() * 100), 
      }),
    })
    const { clientSecret } = await res.json()

    // 2) confirm the payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) }
    })

    if (error) {
      setStatus("❌ " + error.message)
    } else if (paymentIntent.status === "succeeded") {
      setStatus("✅ Payment succeeded!")
      // optionally clear cart or redirect…
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-3 border rounded" />
      <button
        type="submit"
        disabled={!stripe}
        className="btn-secondaryOne"
      >
        Pay ${getCartAmount().toFixed(2)}
      </button>
      {status && <div className="text-sm mt-2">{status}</div>}
    </form>
  )
}
