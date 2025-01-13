import AddToCart from 'global-components/add-to-cart/add-to-cart'
import BuyNow from 'global-components/buy-now/buy-now'

type ActionCtaProps = {}

const ActionCta = ({ }: ActionCtaProps) => {
  // const { isInView } = useIsInView({ elementId: "product-page-action-cta" })

  return (
    <>
      <div className="mt-5 hidden md:flex w-full gap-3 sm:gap-5" id="product-page-action-cta">
        <AddToCart />
        <BuyNow />
      </div>

      <div className="md:hidden fixed z-30 bottom-0 left-0 right-0 bg-[#fff] py-2.5 md:py-4 px-3 border-t-2 border-gray-200 md:bg-gray-100">
        <div className="flex w-full gap-3 sm:gap-5" id="product-page-action-cta">
          <AddToCart />
          <BuyNow />
        </div>
      </div>
    </>
  )
}

export default ActionCta