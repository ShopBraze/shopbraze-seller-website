import HorizontalScroll from 'common-components/horizontal-scroll/horizontal-scroll'
import ProductCard from 'global-components/product-card/product-card'
import React from 'react'

type Props = {}

const RecentlyViewed = (props: Props) => {
  return (
    <div className='space-y-6 md:space-y-8'>
      <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">Recently Viewed</h1>
      <HorizontalScroll containerClassName='flex gap-4 p-2'>
        {
          [1, 2, 3, 4, 5]?.map((_, index) => {
            return (
              <ProductCard />
            )
          })
        }
      </HorizontalScroll>
    </div>
  )
}

export default RecentlyViewed