// src/pages/PlaceOrder.jsx
import React, { useState, useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import Footer from '../components/Footer'
import { ShopContext } from '../context/ShopContext'

// Stripe imports
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'

// load your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

// this is the inner form just for Stripe
function CheckoutForm({ amount, currency }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    setError('')

    // send { amount } (in cents) to match server.js
    const resp = await fetch('http://localhost:4000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amount * 100 })
    })
    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}))
      setError(err.error || 'Server error')
      setLoading(false)
      return
    }
    const { clientSecret } = await resp.json()

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    })

    if (result.error) {
      setError(result.error.message)
    } else if (result.paymentIntent?.status === 'succeeded') {
      alert('🎉 Payment succeeded!')
      // TODO: clear cart / redirect to thank-you page
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement options={{ hidePostalCode: true }} className="p-3 border rounded" />
      {error && <p className="text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="btn-secondaryOne"
      >
        {loading ? 'Processing…' : `Pay ${currency}${amount}.00`}
      </button>
    </form>
  )
}

export default function PlaceOrder() {
  const [method, setMethod] = useState('stripe')
  const { getCartAmount, delivery_charges, currency } = useContext(ShopContext)

  const subtotal = getCartAmount()
  const total = subtotal === 0 ? 0 : subtotal + delivery_charges

  return (
    <section className="max-padd-container">
      <div className="pt-28">
        <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">

          {/* LEFT—Delivery Info */}
          <div className="flex-1 flex flex-col gap-3 text-[95%]">
            <Title title1="Delivery" title2="Information" />
            <div className="flex gap-3">
              <input type="text" name="firstName" placeholder="First Name"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
              <input type="text" name="lastName" placeholder="Last Name"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
            </div>
            <input type="email" name="email" placeholder="Email"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none" />
            <input type="text" name="phone" placeholder="Phone Number"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none" />
            <input type="text" name="street" placeholder="Street"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none" />

            <div className="flex gap-3">
              <input type="text" name="city" placeholder="City"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
              <input type="text" name="state" placeholder="State"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
            </div>

            <div className="flex gap-3">
              <input type="text" name="zip" placeholder="Zip Code"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
              <input type="text" name="country" placeholder="Country"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2" />
            </div>
          </div>

          {/* RIGHT—Summary & Payment */}
          <div className="flex-1 flex flex-col">
            <CartTotal />

            <div className="my-6">
              <h3 className="text-2xl font-bold mb-4">
                Payment <span className="text-amber-700">Method</span>
              </h3>
              <div className="flex gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setMethod('stripe')}
                  className={method === 'stripe' ? 'btn-secondary' : 'btn-white'}
                >
                  Stripe
                </button>
                <button
                  type="button"
                  onClick={() => setMethod('amazon')}
                  className={method === 'amazon' ? 'btn-secondary' : 'btn-white'}
                >
                  Amazon
                </button>
                <button
                  type="button"
                  onClick={() => setMethod('paypal')}
                  className={method === 'paypal' ? 'btn-secondary' : 'btn-white'}
                >
                  PayPal
                </button>
              </div>

              {method === 'stripe' && (
                <Elements stripe={stripePromise}>
                  <CheckoutForm amount={total} currency={currency} />
                </Elements>
              )}

              {method === 'amazon' && (
                <a
                  href="https://www.amazon.co.uk/dp/1068795506"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block btn-secondaryOne"
                >
                  Buy on Amazon
                </a>
              )}

              {method === 'paypal' && (
                <a
                  href="https://www.paypal.com/checkout"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block btn-secondaryOne"
                >
                  Pay with PayPal
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
