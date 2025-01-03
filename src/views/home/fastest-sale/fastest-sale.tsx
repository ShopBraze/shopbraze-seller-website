import HorizontalScroll from "common-components/horizontal-scroll/horizontal-scroll"
import ProductCard from "global-components/product-card/product-card"
import FastestSaleNav from "./fastest-sale-nav/fastest-sale-nav"

type FastestSaleProps = {}

const FastestSale = ({ }: FastestSaleProps) => {
  return (
    <section className='space-y-4 md:space-y-6'>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <h1 className="text-gray-800 text-xl md:text-3xl font-bold">Fastest Sale</h1>
        <p className="text-gray-600 text-xs md:text-sm text-center md:max-w-[70vw]">Shop our curated collection of top picks! Find everything you need in one place, organized by category for a seamless shopping experience. Dive in and discover deals designed for a fast</p>
      </div>
      <FastestSaleNav />
      <HorizontalScroll>
        {
          [1, 2, 2, 3, 3, 3, 3, 3, 3].map((_, index) => {
            return (
              <div className='flex-shrink-0 p-2'>
                <ProductCard key={index} />
              </div>
            )
          })
        }
      </HorizontalScroll>
    </section>
  )
}

export default FastestSale