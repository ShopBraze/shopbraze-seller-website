
import WebsiteLogo from "assets/website-logo/desktop-logo.svg"
import Button from "common-components/button/button"
import SearchIcon from "assets/icons/navbar/search-icon.svg"
import WishlistIcon from "assets/icons/navbar/wishlist-icon.svg"
import CartIcon from "assets/icons/navbar/cart-icon.svg"
import ProfileIcon from "assets/icons/navbar/profile-icon.svg"
import ThreeDashBarIcon from "assets/icons/navbar/three-dash-horizontal-icon.svg"
import CrossIcon from "assets/icons/navbar/close-nav-icon.svg"
import MyAccountIcon from "assets/icons/navbar/my-account-icon-mobile.svg"
import ArrowRight from "assets/icons/chevron-right-white.svg"
import Image from "next/image"

import { useState } from "react"

const MobileNavbar = () => {

  const MobileNavConstants = [
    {
      id: "1",
      icon: SearchIcon,
      name: "Search"
    },
    {
      id: "1",
      icon: WishlistIcon,
      name: "Wishlist"
    },
    {
      id: "2",
      icon: CartIcon,
      name: "Cart"

    },
    {
      id: "3",
      icon: ProfileIcon,
      name: "Profile"
    }
  ]

  const [openSidebar, setOpenSidebar] = useState(false)
  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  return (<>
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Button onClick={handleToggleSidebar}>
          <Image src={ThreeDashBarIcon} alt="nav-dash.svg" />
        </Button>
        <div className="space-y-[2px]">
          <Image src={WebsiteLogo} alt="shopbraze-logo.svg" className="h-[36px] w-[70px]" />
          <p className="text-primary-700 text-xs sm:text-sm font-semibold">SHOP BRAZE</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {
          MobileNavConstants?.map((navItem) => {
            return (
              <div className="cursor-pointer flex flex-col items-center gap-y-1 px-1" key={navItem?.id}>
                <Image src={navItem?.icon} alt={`${navItem?.name}.svg`} />
              </div>
            )
          })
        }
      </div>
    </div>

    <div className={`fixed top-0 bottom-0 overflow-hidden left-0 bg-[#fff] w-[300px]  border border-gray-200 transform transition-transform duration-300 ease-in-out ${openSidebar ? "translate-x-0" : "-translate-x-full"
      }`}>
      <div className="space-y-3 bg-primary-700 p-3">
        <div className="w-full flex  justify-between">
          <Image src={MyAccountIcon} alt="my-account.svg" onClick={() => { }} className="cursor-pointer" />
          <Image src={CrossIcon} alt="cross.svg" onClick={handleToggleSidebar} className="cursor-pointer" />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#fff] font-semibold">My Account</p>
          <Image src={ArrowRight} alt="right-arrow.svg" onClick={() => { }} className="cursor-pointer" />
        </div>
      </div>

      <div className="p-5 space-y-5">
        {
          ["Closeout Sale", "Bottomwear", "Casualwear", "Topwear"].map((item, index) => {
            return (
              <p className="text-sm md:text-base font-medium cursor-pointer hover:text-primary-400 text-gray-500" key={index}
                onClick={() => {
                  handleToggleSidebar()
                }}>
                {item}
              </p>
            )
          })
        }
      </div>

    </div>

  </>
  )
}

export default MobileNavbar