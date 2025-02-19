
import WebsiteLogo from "assets/website-logo/desktop-logo.svg"
import Button from "common-components/button/button"
import SearchIcon from "assets/icons/navbar/search-icon.svg"
import WishlistIcon from "assets/icons/navbar/wishlist-icon.svg"
import CartIcon from "assets/icons/navbar/cart-icon.svg"
import ProfileIcon from "assets/icons/navbar/profile-icon.svg"
import ThreeDashBarIcon from "assets/icons/navbar/three-dash-horizontal-icon.svg"
import CrossIcon from "assets/icons/navbar/close-nav-icon.svg"
import ArrowRight from "assets/icons/chevron-right-white.svg"
import Image from "next/image"

import { useRef, useState } from "react"
import Link from "next/link"
import { MyAccountIcon } from "assets/icons/navbar/my-account-icon-mobile"
import useClickOutside from "core/hooks/use-click-outside"
import { useRouter } from "next/router"

const MobileNavConstants = [
  {
    id: "1",
    icon: SearchIcon,
    name: "Search",
    path: '/search'
  },
  // {
  //   id: "1",
  //   icon: WishlistIcon,
  //   name: "Wishlist",
  //   badgeValue: 0,
  // },
  {
    id: "2",
    icon: CartIcon,
    name: "Cart",
    badgeValue: 2,
    path: '/cart'

  },
  {
    id: "3",
    icon: ProfileIcon,
    name: "Orders",
    path: '/orders'
  }
]

const MobileNavbar = () => {

  const router = useRouter()

  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [openSidebar, setOpenSidebar] = useState(false)
  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  useClickOutside(sidebarRef as React.RefObject<HTMLElement>, () => setOpenSidebar(false));

  return (<>
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Button onClick={handleToggleSidebar}>
          <Image src={ThreeDashBarIcon} alt="nav-dash.svg" />
        </Button>
        <Link href={`/`} className="space-y-[2px]">
          <Image src={WebsiteLogo} alt="shopbraze-logo.svg" className="h-[36px] w-[70px]" />
          <p className="text-xs sm:text-sm font-semibold primaryColor">SHOP BRAZE</p>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {
          MobileNavConstants?.map((navItem) => {
            return (
              <div className="relative cursor-pointer flex flex-col items-center gap-y-1 px-1" key={navItem?.id} onClick={() => { router.push(navItem.path) }}>
                <Image src={navItem?.icon} alt={`${navItem?.name}.svg`} />
                {
                  navItem?.badgeValue && navItem?.badgeValue > 0 ?
                    <div className="absolute -right-1.5 -top-2.5 primaryBgColor text-[#fff] rounded-full min-w-5 min-h-5 py-0 px-1.5 flex justify-center text-sm">
                      {navItem?.badgeValue}
                    </div>
                    : <></>
                }
              </div>
            )
          })
        }
      </div>
    </div>

    <div className={`fixed top-0 bottom-0 overflow-hidden left-0 bg-[#fff] w-[300px]  border border-gray-200 transform transition-transform duration-300 ease-in-out ${openSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
      id="sidebar-nav"
      ref={sidebarRef}
    >
      <div className="space-y-3 p-3 primaryBgColor">
        <div className="w-full flex  justify-between">
          <MyAccountIcon className="dynamicIcons cursor-pointer" />
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
              <p className="text-sm md:text-base font-medium cursor-pointer text-gray-500 hover-primaryColor" key={index}
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