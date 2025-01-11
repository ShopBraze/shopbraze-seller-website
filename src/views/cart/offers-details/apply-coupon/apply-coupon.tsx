import Button from 'common-components/button/button'
import React, { useState } from 'react'

type Props = {}

const ApplyCoupon = (props: Props) => {
  const [couponCode, setCouponCode] = useState("")
  const handleCouponCode = (e: any) => {
    setCouponCode(e.target.value)
  }
  return (
    <div className='w-full px-3 border border-gray-200'>
      <input type='text' value={couponCode} placeholder='Type coupon code' onChange={handleCouponCode} className='w-4/5 py-3 text-sm outline-none text-gray-700 font-semibold' />
      <Button className={`text-sm font-bold w-1/5`} disabled={couponCode?.length > 0 ? false : true}>
        APPLY
      </Button>
    </div>
  )
}

export default ApplyCoupon