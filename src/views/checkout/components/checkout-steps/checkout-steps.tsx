import React from 'react'
import Login from './login/login'
import Address from './address/address'

type Props = {}

const CheckoutSteps = (props: Props) => {
  return (
    <div>
      {/* <Login /> */}
      <Address />
    </div>
  )
}

export default CheckoutSteps