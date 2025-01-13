import { DefaultProductImageUrl } from 'constants/index.const'
import ChevronDownIcon from "assets/icons/chevron-down-gray.svg"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from 'common-components/button/button'

type Props = {}

const CheckoutItemsContainer = (props: Props) => {
  const [showItems, setShowItems] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 1024) setShowItems(false)
    else setShowItems(true)
  }, [])

  return (
    <div className=' pb-4 border-b lg:border-none border-gray-300 '>
      <Button className="px-3 py-1.5 lg:hidden w-full  flex justify-between items-center hover:bg-gray-50 rounded-md" onClick={() => { setShowItems(!showItems) }}>
        <p className="text-lg text-gray-900 font-bold">4 Item</p>
        <Image src={ChevronDownIcon} alt="arrow-down.svg" />
      </Button>

      <p className="hidden lg:block text-lg text-gray-900 font-bold">4 Item</p>
      <div className={`space-y-4 ${showItems ? "max-h-[1000px]" : "max-h-0"} overflow-hidden transition-all duration-300`}>
        {
          [1, 2, 3,].map((_, index) => {
            return (
              <div className="mt-3 p-2.5 lg:p-3 rounded-md border border-gray-200 flex items-center gap-4" key={index}>
                <Image src={DefaultProductImageUrl} alt="prduct.png" height={120} width={100} className="max-w-20 lg:max-w-28 h-auto rounded-md" />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-900">Lavender evil eye set Straight Winter friendly suits sets</p>
                  <p className="text-sm font-semibold text-gray-600">Sixe: L/Qty:3</p>
                  <p className="text-sm font-bold text-gray-900">₹7,794</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CheckoutItemsContainer