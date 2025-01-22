import Layout from 'global-components/layout/layout'
import React from 'react'
import CheckoutStepper from '../components/checkout-stepper/checkout-stepper'
import CheckoutItemsContainer from '../components/checkout-items-container/checkout-items-container'
import CheckoutSteps from '../components/checkout-steps/checkout-steps'

type Props = {}

const CheckoutAddToCartIndexContainer = (props: Props) => {
  return (
    <Layout hideFooter hideTopBanner>
      <div className="px-3 pb-10 lg:pb-0 lg:px-10 pt-4 lg:pt-6 ">
        <CheckoutStepper activeStep={2} />

        <div className="pt-10 flex flex-col gap-y-8 lg:flex-row justify-between">
          <div className="flex-[0.45]">
            <CheckoutItemsContainer />
          </div>
          <div className="flex-[0.42]">
            <CheckoutSteps />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutAddToCartIndexContainer