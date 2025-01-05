import Image from "next/image"
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SetStateAction, useRef, useState } from "react";
import DynamicImage from "common-components/dynamic-image/dynamic-image";


type ProductImageCarouselProps = {
  productData?: any
}

const ProductImageCarousel = ({ productData }: ProductImageCarouselProps) => {

  let sliderRef = useRef<Slider | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const handleActiveSlideIndex = (slideIndex: number) => { setActiveSlideIndex(slideIndex) }

  const goToSlide = (index: number) => {
    if (sliderRef?.current) {
      sliderRef?.current?.slickGoTo(index);
    }
  };

  var settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    afterChange: handleActiveSlideIndex,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true
        }
      },
    ]
  };

  return (
    <div className="flex w-full gap-4">
      <div className="w-20 hidden md:flex flex-col shrink-0 gap-4">
        {
          productData?.images?.map((url: string, index: number) => {
            return (
              <div className={`${activeSlideIndex === index ? "border-2 border-primary-600" : ''} cursor-pointer`}
                key={index}
                onClick={() => {
                  handleActiveSlideIndex(index)
                  goToSlide(index)
                }}
              >
                <DynamicImage src={url} alt="product.png" height={250} width={380} className="rounded-sm" />
              </div>
            )
          })
        }
      </div>
      <div className="flex-1 max-w-full md:max-w-[calc(100%-96px)] ">
        <Slider
          ref={sliderRef}
          {...settings}
        >
          {
            productData?.images?.map((url: string, index: number) => {
              return (
                <div className={`cursor-pointer`} key={index + "1"}>
                  <DynamicImage src={url} alt="product.png" height={300} width={450} className="rounded-sm w-full" quality={100} />
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default ProductImageCarousel