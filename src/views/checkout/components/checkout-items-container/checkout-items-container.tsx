import { DefaultProductImageUrl } from 'constants/index.const'
import Image from 'next/image'
import React from 'react'

type Props = {}

const CheckoutItemsContainer = (props: Props) => {
  return (
    <div className='space-y-5'>
      <p className="text-lg text-gray-900 font-bold">4 Item</p>
      <div className="space-y-4">
        {
          [1, 2, 3,].map((_, index) => {
            return (
              <div className="mt-3 p-3 rounded-md border border-gray-200 flex items-center gap-4" key={index}>
                <Image src={DefaultProductImageUrl} alt="prduct.png" height={120} width={100} className="max-w-28 h-auto rounded-md" />
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