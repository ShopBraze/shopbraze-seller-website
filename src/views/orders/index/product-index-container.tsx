import Layout from "global-components/layout/layout"
import ArrowRightIcon from "assets/icons/chevron-right-grey-dark.svg"
import Image from "next/image"
import Button from "common-components/button/button"
import OrderCard from "./order-card/order-card"

type Props = {}

const OrdersIndexContainer = (props: Props) => {
  return (
    <Layout>
      <div className="px-3 md:px-6 pt-4 md:pt-6 space-y-6 ">

        <div className="space-y-4 md:space-y-6">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">MY ORDERS</h3>
          <Button className="flex items-center gap-3">
            <Image src={ArrowRightIcon} alt="go-back.svg" className="rotate-180" />
            <p className="text-sm font-semibold text-gray-600">Back</p>
          </Button>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex-1 md:flex-[0.45] space-y-3">
            {
              [1, 2, 3].map((orderDetails, index) => {
                return (
                  <OrderCard key={index} />
                )
              })
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrdersIndexContainer