import Layout from "global-components/layout/layout"
import CheckoutStepper from "./checkout-stepper/checkout-stepper"


type Props = {}

const CheckoutIndexContainer = (props: Props) => {
  return (
    <Layout hideFooter hideTopBanner>
      <div className="px-3 md:px-10 pt-4 md:pt-6 ">

        <CheckoutStepper activeStep={2} />

      </div>
    </Layout>
  )
}

export default CheckoutIndexContainer