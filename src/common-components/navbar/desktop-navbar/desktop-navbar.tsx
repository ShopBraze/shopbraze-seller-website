
import WebsiteLogo from "assets/website-logo/desktop-logo.svg"
import Button from "common-components/button/button"
import SearchIcon from "assets/icons/navbar/search-icon.svg"
import WishlistIcon from "assets/icons/navbar/wishlist-icon.svg"
import CartIcon from "assets/icons/navbar/cart-icon.svg"
import ProfileIcon from "assets/icons/navbar/profile-icon.svg"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"


const DesktopNavConstants = [
  // {
  //   id: "1",
  //   icon: WishlistIcon,
  //   name: "Wishlist",
  // },
  {
    id: "2",
    icon: CartIcon,
    name: "Cart",
    badgeValue: 7,
    path: '/cart'
  },
  {
    id: "3",
    icon: ProfileIcon,
    name: "Orders",
    path: "/orders"
  }
]

const DesktopNavbar = () => {
  const router = useRouter()

  return (
    <div className="flex items-center gap-6 justify-between">

      <Link href={`/`} className="space-y-[2px]">
        <Image src={WebsiteLogo} alt="shopbraze-logo.svg" className="h-[36px] w-[70px]" />
        <p className="text-sm font-semibold primaryColor">SHOP BRAZE</p>
      </Link>
      <div className="flex items-center gap-6">
        {["Closeout Sale", "Topwear", "Bottomwear", "Casualwear"]?.map((item, index) => {
          return (
            <Button className="text-sm xl:text-base font-medium text-gray-600 hover:border-b-2 hover-primaryColor primaryBorderColor" key={index}>{item}</Button>
          )
        })}
      </div>
      <div className="flex items-center gap-8">
        <div className="p-1.5 xl:p-2.5 px-3 flex gap-3 items-center rounded-md bg-gray-200 w-[320px]">
          <Image src={SearchIcon} alt="search.svg" className="h-5 w-5 xl:h-6 xl:w-6" />
          <p className="text-sm xl:text-base text-gray-700">Search</p>
        </div>
        <div className="flex items-center gap-3">
          {
            DesktopNavConstants?.map((navItem) => {
              return (
                <div className="relative cursor-pointer flex flex-col items-center gap-y-1 px-1" key={navItem?.id} onClick={() => { router.push(navItem.path) }} >
                  <Image src={navItem?.icon} alt={`${navItem?.name}.svg`} />
                  <p className="text-xs xl:text-sm text-gray-700 hover-primaryColor">{navItem?.name}</p>
                  {
                    navItem?.badgeValue && navItem?.badgeValue > 0 ?
                      <div className="absolute -right-0.5 -top-2.5 primaryBgColor text-[#fff] rounded-full min-w-5 min-h-5 py-0 px-1.5 flex justify-center text-sm">
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
    </div>
  )
}

export default DesktopNavbar