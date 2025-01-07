import Image from 'next/image';
import { DefaultProductImageUrl } from 'constants/index.const';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type RecentPurchasesProps = {}

const RecentPurchases = ({ }: RecentPurchasesProps) => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <div className='space-y-6 md:space-y-8'>
      <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">Recent Purchases</h1>
      <div className="max-w-full">
        <Slider
          {...settings}
        >
          {
            [...new Array(6)].map((_, index) => {
              return (
                <div className="pr-3">
                  <div className="px-2 py-1.5 rounded-md !flex gap-3 border border-gray-200" key={index}>
                    <Image src={DefaultProductImageUrl} alt="product-name.png" height={80} width={75} className='rounded-lg h-20' />
                    <div className="space-y-3">
                      <p className="text-xs font-medium text-gray-800">Morpankhi Pool Set for Winter</p>
                      <p className="text-[13px] font-semibold text-gray-600">Special Straight Winter Friendly </p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-primary-700 font-semibold">10 Minutes ago</p>
                        <p className='text-sm text-primary-700 font-bold'>View</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default RecentPurchases