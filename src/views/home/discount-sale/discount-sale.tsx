
type DiscountSaleProps = {}

const DiscountSale = ({ }: DiscountSaleProps) => {
  return (
    <div className='space-y-4 md:space-y-6'>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <h1 className="text-gray-800 text-xl md:text-3xl font-bold">Discount Sale</h1>
        <p className="text-gray-600 text-xs md:text-sm text-center md:max-w-[70vw]">Discover our special discount collections! We've grouped related products together by shared features, making it easy to browse and find just what you need—all at incredible prices.</p>
      </div>

    </div>
  )
}

export default DiscountSale