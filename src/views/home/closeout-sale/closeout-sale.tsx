
import HorizontalScroll from 'common-components/horizontal-scroll/horizontal-scroll';
import ProductCard from 'global-components/product-card/product-card';
import CloseOutSaleNav from './closeout-sale-nav/closeout-sale-nav';


type CloseOutSaleProps = {}

const CloseOutSale = ({ }: CloseOutSaleProps) => {



  return (
    <section className='space-y-4 md:space-y-6'>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <h1 className="text-gray-800 text-xl md:text-3xl font-bold">Closeout Sale</h1>
        <p className="text-gray-600 text-xs md:text-sm text-center md:max-w-[70vw]">Discover our exclusive closeout sale—a curated collection of products grouped by popular demand and shared features.We’ve organized everything into easy-to-browse sections to help you find exactly what you need, quickly and effortlessly.</p>
      </div>
      <CloseOutSaleNav />
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

export default CloseOutSale