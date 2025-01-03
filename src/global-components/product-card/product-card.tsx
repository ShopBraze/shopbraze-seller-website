import { DefaultProductImageUrl } from "constants/index.const"
import StarIcon from "assets/icons/rating-star-yellow-icon.svg"
import Image from "next/image"
import DiscountTag from "./discount-tag/discount-tag"


type ProductCardProps = {}

const ProductCard = ({ }: ProductCardProps) => {

  return (
    <div className="relative space-y-2 rounded-md shadow-product-card-shadow w-[210px] md:w-[240px] flex-shrink-0">
      <Image src={DefaultProductImageUrl} alt="product.png" height={300} width={300} className="object-fill w-full " />
      <div className="px-2">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-sm md:text-base font-medium">Shiny Dress</p>
          <div className="py-1 px-1.5 md:px-2 rounded-md flex gap-1 items-center justify-center bg-primary-700">
            <Image src={StarIcon} alt="star.svg" />
            <p className="text-[#fff] text-xs md:text-sm">4.5 | 21</p>
          </div>
        </div>
        <p className="pt-1 md:pt-1.5 text-[10px] md:text-xs text-gray-500">Al Karam</p>
        <div className="py-2 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="text-sm md:text-lg font-semibold text-gray-800">₹950</p>
            <p className="text-sm md:text-base text-gray-600 font-medium line-through">₹1500</p>
          </div>
          <p className="text-red-300 text-xs md:text-base">Almost Sold Out</p>
        </div>

      </div>
      <DiscountTag className="absolute top-4 left-0" />
    </div>
  )
}

export default ProductCard