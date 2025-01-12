import { DefaultProductImageUrl } from 'constants/index.const'
import Layout from 'global-components/layout/layout'

import OffersDetails from '../../global-components/offers-details/offers-details'
import SubTotalAndCheckOut from './subtotal-and-checkout/subtotal-and-checkout'
import CartProductsContainer from './cart-products-container/cart-products-container'

type Props = {}

const CartIndexContainer = (props: Props) => {
  return (
    <Layout hideFooter>
      <div className="px-3 md:px-10 pt-2 md:pt-4 space-y-8 md:space-y-12">
        <h3 className="text-gray-800 font-bold text-2xl">My Bag</h3>
        <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between pb-10 lg:pb-0">
          <OffersDetails className="lg:hidden" />
          <CartProductsContainer className="lg:flex-[0.5]" />
          <div className="space-y-3 w-full fixed bottom-0 left-0 right-0 lg:relative lg:flex-[0.4]">
            <OffersDetails className="hidden lg:flex" />
            <SubTotalAndCheckOut />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CartIndexContainer