
import OffersTagIcon from "assets/icons/offers-tag-icon.svg"
import Modal from "common-components/modal/modal"
import Image from "next/image"
import CloseIcon from "assets/icons/cross-icon.svg"
import ApplyCoupon from "./apply-coupon/apply-coupon"
import Button from "common-components/button/button"
import TagIcon from "assets/icons/offers-tag-icon.svg"

type OffersDetailsProps = {
  className?: string
}

const OffersData = [
  {
    type: "Special Offers",
    isAvailable: true,
    offers: [
      {
        description: "Sale discount of 50% off each item",
        isApplied: true
      },
    ]

  },
  {
    type: "Checkout Offers",
    isAvailable: true,
    offers: [
      {
        description: "Pay online | Extra 10% Off",
        isApplied: false
      }
    ]
  },
  {
    type: "Other Offers",
    isAvailable: false,
    offers: [
      {
        description: "Get 10 % off upto Rs. 100! on minimum purchase of Rs.1049! Use coupon code: GET10",
        isApplied: false
      },
      {
        description: "Get 15 % off upto Rs. 150! on mimimum purchase of Rs.1599! Use coupon code: GET15",
        isApplied: false
      },
      {
        description: "Buy 2 & Get 10 % off upto Rs. 100! on minimum purchase of Rs.1749! Use coupon code: BUY2",
        isApplied: false
      },
      {
        description: "Buy 3 & Get 15 % off upto Rs. 150! on minimum purchase of Rs.2649! Use coupon code: BUY3",
        isApplied: false
      },
      {
        description: "10 % off upto Rs. 100! on minimum purchase of Rs.2949! Use coupon code: SALE10",
        isApplied: false
      },
      {
        description: "15 % off upto Rs. 150! on minimum purchase of Rs 4449! Use coupon code: SALE15",
        isApplied: false
      }
    ]
  }
]


const OffersDetails = ({ className }: OffersDetailsProps) => {
  return (
    <div className={`${className}`}>
      <Modal>
        {({ open, handleOpenToggle }) => {
          return (
            <>
              <Modal.Button onClick={handleOpenToggle} className="w-full">
                <div className={`py-2.5 lg:py-3 px-2.5 rounded-lg bg-[#d4f6df] flex justify-between items-center`}>
                  <div className="flex gap-3 items-center">
                    <Image src={OffersTagIcon} alt="offers-tag.svg" />
                    <div className="space-y-2 text-left">
                      <p className="text-xs font-bold text-gray-800">Save Upto ₹250</p>
                      <p className="text-xs font-bold text-success-700">8 Offers Available</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-success-600">OFFERS</p>
                </div>
              </Modal.Button>
              <Modal.Dialog open={open} handleOpenToggle={handleOpenToggle} closeOnOutsideClick={true} className='bg-[#fff] w-full md:w-[390px] h-[90vh] md:h-[100vh] overflow-auto' position="right">
                <div className="py-6 px-3">
                  <div className="flex justify-between">
                    <h3 className="text-xl text-gray-800 font-semibold">All offers & coupons</h3>
                    <Button onClick={handleOpenToggle}>
                      <Image src={CloseIcon} alt="close.svg" />
                    </Button>
                  </div>
                  <div className="mt-10">
                    <ApplyCoupon />
                  </div>
                  <div className="mt-4 space-y-3">
                    {
                      OffersData?.map((item, index) => {
                        return (
                          <div className="space-y-2">
                            <p className="text-xs font-bold">{item?.type}</p>
                            <div className="space-y-2">
                              {
                                item?.offers?.map((offer, index) => {
                                  return (
                                    <div className="py-4 px-2 border border-dashed border-gray-300">
                                      <div className={`flex items-center gap-2 ${item.isAvailable ? "" : "grayscale opacity-60"}`}>
                                        <Image src={OffersTagIcon} alt="offer-tag.svg" className="h-9 w-9" />
                                        <div className="space-y-1">
                                          <p className="text-xs text-gray-800 font-semibold">{offer.description}</p>
                                          <p className="text-success-500 text-xs font-semibold">Know More</p>
                                        </div>
                                        {offer.isApplied && <div className="ml-auto text-success-600 text-sm font-bold">APPLIED</div>}
                                      </div>
                                    </div>
                                  )
                                })
                              }
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </Modal.Dialog>
            </>
          )
        }}
      </Modal>
    </div>
  )
}

export default OffersDetails