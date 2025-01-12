import DesktopNavbar from "./desktop-navbar/desktop-navbar"
import MobileNavbar from "./mobile-navbar/mobile-navbar"


type NavbarProps = {}

const Navbar = ({ }: NavbarProps) => {
  return (
    <nav className="px-3 md:px-6 pt-3 pb-2 border-b border-gray-200">
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </nav>
  )
}

export default Navbar