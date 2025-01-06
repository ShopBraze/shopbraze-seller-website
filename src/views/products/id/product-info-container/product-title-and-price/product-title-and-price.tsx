import ShareIcon from 'assets/icons/product-details/share-icon.svg'
import Button from 'common-components/button/button'
import Image from 'next/image'

type ProductTitleAndPriceProps = {
  productData?: any
}

const ProductTitleAndPrice = ({ productData }: ProductTitleAndPriceProps) => {
  return (
    <div>
      <div className="flex gap-4 md:gap-6 items-start">
        <p className="textbase md:text-xl text-gray-700 font-medium">{productData?.title}</p>
        <Button>
          <Image src={ShareIcon} alt='share.svg' />
        </Button>
      </div>
      <div className="pt-2 md:pt-4 flex items-center gap-4 md:gap-10">
        <div className="flex items-center gap-2 md:gap-4">
          <p className="text-lg md:text-2xl font-semibold">₹1,999</p>
          <p className="text-gray-600 text-sm md:text-xl line-through">₹2350</p>
        </div>
        <div className="">
          <p className="text-sm md:text-base font-bold primaryColor">65% OFF</p>
        </div>
      </div>
      <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-500 font-semibold">Inclusive of all Taxes</p>
      <div className="pt-2 md:pt-4 flex items-center gap-4">
        <div className="py-1 px-2 text-xs text-[#fff] rounded-sm primaryBgColor border-dashed border">Free Delivery</div>
        <div className="py-1 px-2 text-xs text-[#fff] rounded-sm primaryBgColor primaryBgColor border-dashed border">View Available Offers</div>
      </div>
    </div>
  )
}

export default ProductTitleAndPrice