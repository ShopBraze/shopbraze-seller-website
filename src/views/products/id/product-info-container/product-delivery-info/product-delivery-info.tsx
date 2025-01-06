import { CashOnDeliveryIcon } from "assets/icons/product-details/cash-on-delivery-icon"
import { DeliveryIcon } from "assets/icons/product-details/delivery-icon"
import { ReturnIcon } from "assets/icons/product-details/return-icon"


type ProductDeliveryInfoProps = {}

const ProductDeliveryInfo = ({ }: ProductDeliveryInfoProps) => {
  return (
    <div className="mt-5 space-y-3">
      <div className="py-2 px-3 border border-gray-300 rounded-md flex items-center gap-3">
        <DeliveryIcon className="dynamicIcons" />
        <p className="text-sm text-gray-600 font-medium">Get it Delivery in 4-9 days</p>
      </div>
      <div className="py-2 px-3 border border-gray-300 rounded-md flex items-center gap-3">
        <CashOnDeliveryIcon className="dynamicIcons" />
        <p className="text-sm text-gray-600 font-medium">Cash on Delivery </p>
      </div>
      <div className="py-2 px-3 border border-gray-300 rounded-md flex items-center gap-3">
        <ReturnIcon className="dynamicIcons" />
        <p className="text-sm text-gray-600 font-medium">3 Days Return ( Damaged Items Only) </p>
      </div>
    </div>
  )
}

export default ProductDeliveryInfo