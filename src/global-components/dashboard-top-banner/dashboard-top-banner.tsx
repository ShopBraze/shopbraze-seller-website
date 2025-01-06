import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "common-components/button/button";

type Props = {}

const DashboardTopBanner = (props: Props) => {
  var settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 1500,
    fade: true,
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className="p-2.5 md:p-0 min-h-[45px] bg-primary-700 !flex justify-center items-center gap-4 primaryBgColor">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-[#fff]">The big closeout sale is now live! The big closeout sale is now live!</p>
          <Button className="w-[130px] sm:w-auto px-1.5 md:px-3 py-1 bg-[#fff] flex justify-center rounded-[5px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] text-sm md:text-base">Shop Now</Button>
        </div>
        <div className="p-2.5 md:p-0 min-h-[45px] bg-primary-700 !flex justify-center items-center gap-4 primaryBgColor">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-[#fff]">Shop with us and save 50% on all orders</p>
          <Button className="w-[130px] sm:w-auto px-1.5 md:px-3 py-1 bg-[#fff] flex justify-center rounded-[5px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] text-xs sm:text-sm md:text-base">Shop Now</Button>
        </div>
      </Slider>
    </div>
  )
}

export default DashboardTopBanner