import Button from 'common-components/button/button'
import React from 'react'

type Props = {}

const FastestSaleNav = (props: Props) => {
  return (
    <div className='py-1 md:py-2 flex items-center justify-between'>
      <div className="flex items-center gap-2 md:gap-4">
        {
          ['All Products', 'T-Shirt', 'Hoodies', 'jacket'].map((item, index) => {
            return (
              <Button className={`${index === 0 ? 'text-gray-1000' : 'text-gray-600'} font-semibold text-[13px] sm:text-sm md:text-base`}>{item}</Button>
            )
          })
        }
      </div>
      <Button className='py-1 px-3 text-[#fff] rounded-sm text-xs sm:text-sm md:text-base primaryBgColor'>
        Show All
      </Button>
    </div>
  )
}

export default FastestSaleNav