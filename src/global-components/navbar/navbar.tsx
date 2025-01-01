import DesktopNavbar from "./desktop-navbar/desktop-navbar"
import MobileNavbar from "./mobile-navbar/mobile-navbar"


type NavbarProps = {}

const Navbar = ({ }: NavbarProps) => {
  return (
    <div className="px-3 md:px-6 pt-3 sticky top-0 bg-[#fff] z-30">
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </div>
  )
}

export default Navbar