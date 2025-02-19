import React from 'react'
import OffersDetails from '../../../global-components/offers-details/offers-details'
import Button from 'common-components/button/button'
import Link from 'next/link'

type Props = {}

const SubTotalAndCheckOut = (props: Props) => {
  return (
    <div className="w-full">
      <div className="py-6 px-3 bg-gray-100 rounded-lg">
        <div className="flex items-center justify-between">
          <p className="text-gray-800 font-semibold">Subtotal (3 items)</p>
          <p className="text-xl text-gray-800 font-semibold">₹7,194</p>
        </div>
        <p className="mt-1.5 text-xs font-bold text-success-700">Saving ₹8,400</p>
        <Link href="/checkout/add-to-cart">
          <Button className="mt-3 w-full py-2.5 rounded-md text-[#fff] text-sm font-semibold primaryBgColor">
            CHECKOUT
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SubTotalAndCheckOut