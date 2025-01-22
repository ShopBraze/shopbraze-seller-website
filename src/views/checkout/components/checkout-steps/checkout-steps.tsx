import React, { useState } from 'react'
import Login from './login/login'
import Address from './address/address'
import Payment from './payment/payment'

type Props = {}

const CheckoutSteps = (props: Props) => {
  const [activeCheckoutStep, setActiveCheckoutStep] = useState(1)
  const handleCheckoutSteps = (stepNumber: number) => {
    setActiveCheckoutStep(stepNumber)
  }
  return (
    <div>
      {activeCheckoutStep === 1 && <Login handleCheckoutSteps={handleCheckoutSteps} />}
      {activeCheckoutStep === 2 && <Address handleCheckoutSteps={handleCheckoutSteps} />}
      {activeCheckoutStep === 3 && <Payment />}
    </div>
  )
}

export default CheckoutSteps