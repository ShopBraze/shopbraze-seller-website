import DeliveryIcon from "assets/icons/product-details/delivery-icon.svg"
import CashOnDeliveryIcon from "assets/icons/product-details/cash-on-delivery-icon.svg"
import ReturnProductIcon from "assets/icons/product-details/return-icon.svg"
import Image from "next/image"


type ProductDeliveryInfoProps = {}

const ProductDeliveryInfo = ({ }: ProductDeliveryInfoProps) => {
  return (
    <div className="mt-5 space-y-3">
      <div className="py-2 px-3 border border-gray-300 rounded-md flex items-center gap-3">
        <Image src={DeliveryIcon} alt="delivery-icon.svg" />
        <p className="text-sm text-gray-600 font-medium">Get it Delivery in 4-9 days</p>
      </div>
      <div className="py-2 px-3 border border-gray-300 rounded-md flex items-center gap-3">
        <Image src={CashOnDeliveryIcon} alt="delivery-icon.svg" />
        <p className="text-sm text-gray-600 font-medium">Cash on Delivery </p>
      </div>
      <div className="py-2 px-3 border border-gray-300 rounded-md flex items-center gap-3">
        <Image src={ReturnProductIcon} alt="delivery-icon.svg" />
        <p className="text-sm text-gray-600 font-medium">3 Days Return ( Damaged Items Only) </p>
      </div>
    </div>
  )
}

export default ProductDeliveryInfo