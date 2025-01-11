import Button from 'common-components/button/button'
import PlusIcon from "assets/icons/product-details/plus-icon.svg"
import MinusIcon from "assets/icons/product-details/minus-icon.svg"
import CrossIcon from "assets/icons/cross-icon.svg"
import Image from 'next/image'
import { DefaultProductImageUrl } from 'constants/index.const'

type CartProductsContainerProps = {
  className?: string
}

const CartProductsContainer = ({ className }: CartProductsContainerProps) => {
  return (
    <div className={`w-full space-y-4 ${className}`}>
      {
        [1, 2, 3].map((_, index) => {
          return (
            <div className="relative p-3 rounded-lg border border-gray-300 flex items-center gap-6" key={index}>
              <Image src={DefaultProductImageUrl} alt="product.png" height={120} width={100} className='rounded-md' />
              <div className="flex-1 space-y-2 md:space-y-3">
                <p className="w-[90%] text-gray-900 font-semibold text-xs sm:text-sm lg:text-base">Shea berry suit Straight Winter friendly suits sets (XS)</p>
                <p className="text-sm md:text-base text-gray-600 font-semibold">XS</p>

                <div className="flex flex-col gap-y-3 md:flex-row md:justify-between md:items-baseline">
                  <div className="xs:w-[160px] h-9 xs:h-10 border border-gray-300 rounded-md flex">
                    <Button className='w-full flex justify-center items-center rounded-md hover:bg-gray-100'>
                      <Image src={MinusIcon} alt="minus.svg" />
                    </Button>
                    <div className="w-full flex justify-center items-center text-base xs:text-lg font-semibold text-gray-800 ">1</div>
                    <Button className='w-full flex justify-center items-center hover:bg-gray-100 rounded-md'>
                      <Image src={PlusIcon} alt="plus.svg" />
                    </Button>
                  </div>
                  <p className="text-sm md:text-lg text-gray-600 font-semibold text-end">₹2,398</p>
                </div>
              </div>
              <Button className='absolute right-1.5 top-2'>
                <Image src={CrossIcon} alt="cross.svg" className='h-5 w-5' />
              </Button>
            </div>
          )
        })
      }</div>
  )
}

export default CartProductsContainer