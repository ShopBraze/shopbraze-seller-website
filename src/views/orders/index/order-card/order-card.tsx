import ArrowRightIcon from "assets/icons/chevron-right-grey-dark.svg"
import Image from "next/image"
import Button from "common-components/button/button"
import ReOrderIcon from "assets/icons/reorder-icon.svg"

import { DefaultProductImageUrl } from "constants/index.const"
import Link from "next/link"

type Props = {}

const OrderCard = (props: Props) => {
  return (
    <div className="p-3 rounded-md border border-gray-200 space-y-4">

      <Link href={`/orders/1234`}>
        <div className="flex gap-6 items-center cursor-pointer">
          <Image src={DefaultProductImageUrl} alt="product.png" height={120} width={90} className="rounded-md w-auto max-h-32" />
          <div className="flex flex-1 gap-4 justify-between items-center">
            <div className="space-y-1">
              <p className="text-[13px] md:text-sm font-semibold text-gray-800">Lavender evil eye set Straight Winter friendly suits sets (L)</p>
              <p className="text-sm md:text-base font-bold text-gray-600">L</p>
              <p className="text-xs md:text-sm font-semibold text-success-700">Order Placed</p>
            </div>
            <Image src={ArrowRightIcon} alt="arrow-right.svg" className="h-7 w-7" />
          </div>
        </div>
      </Link>

      <div className="flex w-full justify-center gap-3">
        <Button variant="tertiary" className="w-full rounded-lg hover:bg-gray-200 transition-all duration-300">
          <p className="text-xs text-gray-800 font-semibold"> CANCEL ORDER </p>
        </Button>
        <Button variant="tertiary" className="w-full items-center gap-2 md:gap-3 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300">
          <p className="text-xs text-gray-800 font-semibold">ORDER AGAIN</p>
          <Image src={ReOrderIcon} alt="reorder.svg" />
        </Button>
      </div>
    </div>
  )
}

export default OrderCard