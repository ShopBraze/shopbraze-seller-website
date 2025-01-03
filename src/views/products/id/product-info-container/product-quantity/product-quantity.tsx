import Button from 'common-components/button/button'
import PlusIcon from "assets/icons/product-details/plus-icon.svg"
import MinusIcon from "assets/icons/product-details/minus-icon.svg"
import Image from 'next/image'


type ProductQuantityProps = {}

const ProductQuantity = ({ }: ProductQuantityProps) => {
  return (
    <div className="mt-3 md:mt-5">
      <p className="text-base md:text-lg font-medium">Quantity</p>
      <div className="mt-2 md:mt-3 w-[160px] h-10 border border-gray-300 rounded-md flex">
        <Button className='w-full flex justify-center items-center hover:bg-gray-100 rounded-md'>
          <Image src={PlusIcon} alt="plus.svg" className='' />
        </Button>
        <div className="w-full flex justify-center items-center text-lg font-semibold text-gray-800 ">1</div>
        <Button className='w-full flex justify-center items-center rounded-md hover:bg-gray-100'>
          <Image src={MinusIcon} alt="minus.svg" className='' />
        </Button>
      </div>
    </div>
  )
}

export default ProductQuantity