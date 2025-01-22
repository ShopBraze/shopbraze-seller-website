import React from 'react'
import AddressChangePopUp from '../../address/address-change-popup'

type Props = {}

const DeliveryAddress = (props: Props) => {
  return (
    <div className='space-y-3'>
      <p className="text-sm font-bold">Delivery Address</p>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-gray-600">COS</p>
        <AddressChangePopUp />
      </div>
      <p className="text-xs font-semibold text-gray-600">gf, Sagar Garments, Kudni Chauraha, Bakewar, Fatehpur, Uttar Pradesh, 212657
        Contact number: 6307963128 , 6307963128</p>
      <div className="p-1 w-full bg-gray-100 text-xs font-semibold text-gray-600 flex justify-center">Free Delivery within 4-9 days</div>
    </div>
  )
}

export default DeliveryAddress