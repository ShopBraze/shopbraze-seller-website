import { DefaultProductImageUrl } from "constants/index.const"
import StarIcon from "assets/icons/rating-star-yellow-icon.svg"
import Image from "next/image"


type ProductCardProps = {}

const ProductCard = ({ }: ProductCardProps) => {
  return (
    <div className="space-y-2 rounded-md shadow-product-card-shadow w-[250px] md:w-[300px]">
      <Image src={DefaultProductImageUrl} alt="product.png" height={300} width={300} className="object-fill h-[200px] sm:h-[250px] md:h-[300px]" />
      <div className="px-2">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-medium">Shiny Dress</p>
          <div className="py-1 px-2 rounded-md flex gap-1 items-center justify-center bg-primary-700">
            <Image src={StarIcon} alt="star.svg" />
            <p className="text-[#fff] text-sm">4.5 | 21</p>
          </div>
        </div>
        <p className="pt-1.5 text-xs text-gray-500">Al Karam</p>
        <div className="py-2 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold text-gray-800">₹950</p>
            <p className="text-gray-600 font-medium line-through">₹1500</p>
          </div>
          <p className="text-red-300 text-sm md:text-base">Almost Sold Out</p>
        </div>

      </div>
    </div>
  )
}

export default ProductCard