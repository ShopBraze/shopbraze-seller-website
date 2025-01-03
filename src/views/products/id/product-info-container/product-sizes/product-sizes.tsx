import SizeGuideIcon from "assets/icons/product-details/size-guide-icon.svg"
import Image from "next/image"
type Props = {}

const ProductSizes = (props: Props) => {
  return (
    <div className="pt-4 md:pt-6 space-y-1.5 md:space-y-3">
      <div className="flex items-center gap-3">
        <p className="text-base md:text-lg font-medium">Size</p>
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-primary-500 cursor-pointer">
          <span className="">--</span>
          <span>
            <Image src={SizeGuideIcon} alt="size-icon.svg" />
          </span>
          Size Guide
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        {
          ['S', 'M', 'L', "XL", 'XXL'].map((size) => {
            return (
              <div className="flex justify-center items-center h-8 w-8 md:h-10 md:w-10 rounded-full border border-gray-200 font-medium text-sm md:text-base text-gray-800" key={size}>{size}</div>
            )
          })
        }
      </div>
    </div>

  )
}

export default ProductSizes