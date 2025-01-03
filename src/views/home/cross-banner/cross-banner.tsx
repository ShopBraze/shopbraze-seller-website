import { CrossBannerDefaultImageUrl } from 'constants/index.const';
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {}

const CrossBanner = (props: Props) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    speed: 1500,
    // fade: true,
  };

  return (
    <div className="">
      <Slider {...settings}>
        <Image src={CrossBannerDefaultImageUrl} alt="cross-banner.png" height={400} width={1500} quality={100} blurDataURL='' className='w-full max-h-[300px] object-fill rounded-lg' />
        <Image src={CrossBannerDefaultImageUrl} alt="cross-banner.png" height={400} width={1500} quality={100} blurDataURL='' className='w-full max-h-[300px] object-fill rounded-lg' />
        <Image src={CrossBannerDefaultImageUrl} alt="cross-banner.png" height={400} width={1500} quality={100} blurDataURL='' className='w-full max-h-[300px] object-fill rounded-lg' />
      </Slider >
    </div >
  )
}

export default CrossBanner