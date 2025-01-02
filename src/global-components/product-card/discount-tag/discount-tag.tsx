type DiscountTagProps = {
  className: string
}

const DiscountTag = ({ className }: DiscountTagProps) => {
  return (
    <div className={`flex ${className} `}>
      <div className="flex items-center px-1 text-[11px] sm:text-xs font-semibold text-[#fff] primaryBgColor">20% off Sale</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none" className="discountTagSvg">
        <path d="M27 0L0 0V24L27 24L21.6 12L27 0Z" fill-opacity="0.7" />
      </svg>
    </div>
  )
}

export default DiscountTag