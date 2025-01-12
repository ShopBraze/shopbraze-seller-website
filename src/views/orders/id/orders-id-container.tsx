import Layout from "global-components/layout/layout"
import ArrowRightIcon from "assets/icons/chevron-right-grey-dark.svg"
import Image from "next/image"
import Button from "common-components/button/button"
import { DefaultProductImageUrl } from "constants/index.const"
import Link from "next/link"

type Props = {}

const OrdersIdContainer = (props: Props) => {
  return (
    <Layout hideNavbar>

      <div className="w-full p-3 border-b border-gray-300">
        <Link href={`/orders`}>
          <Button className="flex items-center gap-4">
            <Image src={ArrowRightIcon} alt="go-back.svg" className="rotate-180 h-7 w-7" />
            <p className="text-xl text-gray-900 font-bold">Order Details</p>
          </Button>
        </Link>
      </div>

      <div className="px-3 xl:w-4/5 md:mx-auto pt-4 md:pt-6 space-y-6">

        {/* Navigation Path */}
        <div className="py-4 flex items-center gap-3">
          <p className="text-sm text-gray-400 font-semibold">Home</p>
          <Image src={ArrowRightIcon} alt="go-back.svg" className="h-7 w-7 opacity-60" />
          <p className="text-sm text-gray-400 font-semibold">My Orders</p>
          <Image src={ArrowRightIcon} alt="go-back.svg" className="h-7 w-7 opacity-60" />
          <p className="text-sm font-semibold text-gray-600">Order ID 1234</p>
        </div>

        {/* Order Details Container*/}

        <div className="flex flex-col lg:flex-row gap-y-6 justify-between">

          {/* Order Details */}
          <div className="flex-[0.45]">
            <p className="text-error-600 font-bold">Cancelled</p>
            <div className="mt-3 p-3 rounded-md border border-gray-200 flex items-center gap-4">
              <Image src={DefaultProductImageUrl} alt="prduct.png" height={100} width={80} className="max-w-16 h-auto" />
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-800">Lavender evil eye set Straight Winter friendly suits sets</p>
                <p className="text-xs font-semibold text-gray-600">Sixe: L/Qty:3</p>
                <p className="text-xs font-bold text-gray-800">₹7,794</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="pb-6 text-gray-800 font-bold">Order Details:</p>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-800">Units Ordered</p>
                  <p className="text-xs font-semibold text-gray-500">3</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-800">Delivery Date</p>
                  <p className="text-xs font-semibold text-gray-500">Sun, 19th Jan 2025</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-800">Delivery Address</p>
                  <p className="text-xs font-semibold text-gray-500 break-words whitespace-pre-line">gf, Sagar Garments, Kudni Chauraha, Bakewar, Fatehpur, Uttar Pradesh-212657
                    Contact Number: 6307963128, 6307963128</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-800">Order Date</p>
                  <p className="text-xs font-semibold text-gray-500">12 Jan 2025</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-800">Order ID</p>
                  <p className="text-xs font-semibold text-gray-500">1234</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-800">Order Total</p>
                  <p className="text-xs font-semibold text-gray-500">₹3,897</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-800">Payment Method</p>
                  <p className="text-xs font-semibold text-gray-500">CASH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="flex-[0.45]">
            <div className="bg-gray-50 p-3 rounded-md space-y-4 md:space-y-8">
              <div className=" space-y-3 md:space-y-6">
                <p className="text-[15px] md:text-base text-gray-800 font-bold">Order Summary</p>
                <p className="text-[15px] md:text-base text-gray-800 font-bold">Bill Details</p>
              </div>
              <div className="px-2 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-[15px] md:text-base text-gray-700 font-semibold">Item Total</p>
                  <p className="text-[15px] md:text-base text-gray-500 font-semibold">₹7,794</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[15px] md:text-base text-gray-700 font-semibold">Sale Discount</p>
                  <p className="text-[15px] md:text-base text-gray-500 font-semibold">-₹3,897</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[15px] md:text-base text-gray-700 font-semibold">Delivery fee</p>
                  <p className="text-[15px] md:text-base text-gray-500 font-semibold">₹0</p>
                </div>

                <div className="py-3 border-t border-gray-300">
                  <div className="flex items-center justify-between">
                    <p className="text-[15px] md:text-base text-gray-800 font-bold">Total Amount</p>
                    <p className="text-[15px] md:text-base text-gray-800 font-bold">₹3,897</p>
                  </div>
                  <Link href={`/products/1234`} >
                    <Button variant="primary" className="text-[15px] md:text-base font-semibold mt-4 w-full  text-[#fff]">
                      Order Again
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrdersIdContainer