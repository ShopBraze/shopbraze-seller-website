type DiscountSaleProps = {}

const DiscountSale = ({ }: DiscountSaleProps) => {
  return (
    <section className='space-y-4 md:space-y-6'>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <h1 className="text-gray-800 text-xl md:text-3xl font-bold">Discount Sale</h1>
        <p className="text-gray-600 text-xs md:text-sm text-center md:max-w-[70vw]">Discover our special discount collections! We've grouped related products together by shared features, making it easy to browse and find just what you need—all at incredible prices.</p>
      </div>
      <div className="flex gap-2 md:gap-4 justify-evenly overflow-auto scrollbar-hide">

        {
          [1, 1, 1,].map(() => {
            return (
              <div className="relative h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] w-auto aspect-[3/2] discount-sale-box-background bg-contain bg-no-repeat flex justify-center items-center">
                <div className="px-8 md:px-12 py-2 flex flex-col justify-center items-center border border-primary-500 rounded-lg primaryBorderColor">
                  <p className="text-xs font-semibold">Upto</p>
                  <p className="text-lg md:text-2xl font-semibold">₹600</p>
                </div>
                {/* <div className="text-[#fff] text-xs font-semibold py-[2px] flex justify-center w-full absolute top-5 -left-[111px] rotate-[324deg] primaryBgColor">20% off Sale</div> */}
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default DiscountSale