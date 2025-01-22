import DeliveryAddress from './delivery-address/delivery-address'
import PaymentMethodAndBillDetails from './payment-method-and-bill-details/payment-method-and-bill-details'

type Props = {}

const Payment = (props: Props) => {

  return (
    <div className="space-y-6 pb-8">
      <DeliveryAddress />
      <PaymentMethodAndBillDetails />
    </div>
  )
}

export default Payment