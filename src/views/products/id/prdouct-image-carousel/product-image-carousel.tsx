import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import DynamicImage from "common-components/dynamic-image/dynamic-image";
import Modal from 'common-components/modal/modal';
import useIsMobileView from 'core/hooks/use-is-mobile-view';



type ProductImageCarouselProps = {
  productData?: any
}

const ProductImageCarousel = ({ productData }: ProductImageCarouselProps) => {

  let sliderRef = useRef<Slider | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const handleActiveSlideIndex = (slideIndex: number) => { setActiveSlideIndex(slideIndex) }
  const [showImagesModal, setShowImagesModal] = useState(false)
  const { isMobileView } = useIsMobileView()

  const handleToggleImageModal = () => {
    if (isMobileView) setShowImagesModal(!showImagesModal)
  }


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
    <>

      {/* -------------------------------------- Desktop View --------------------------------------------------- */}

      <div className="flex w-full gap-4">
        <div className="w-20 hidden md:flex flex-col shrink-0 gap-4">
          {
            productData?.images?.map((url: string, index: number) => {
              return (
                <div className={`${activeSlideIndex === index ? "border-2 primaryBorderColor rounded-sm" : ''} cursor-pointer`}
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
                    <DynamicImage src={url} alt="product.png" height={300} width={450} loading='eager' className="rounded-sm w-full" quality={100} zoomOnHover={isMobileView ? false : true} onClick={handleToggleImageModal} />
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>

      {/* -------------------------------------- Mobile View --------------------------------------------------- */}

      <Modal.Dialog open={showImagesModal} handleOpenToggle={handleToggleImageModal} closeOnOutsideClick showCloseIcon className={`bg-[#fff] h-[85vh] overflow-scroll scrollbar-hide w-full rounded-md ${isMobileView ? "" : "hidden"} pb-2`}>
        <>
          <div className=" max-w-full">
            <Slider
              ref={sliderRef}
              {...settings}
            >
              {
                productData?.images?.map((url: string, index: number) => {
                  return (
                    <div className={`cursor-pointer`} key={index + "1"}>
                      <DynamicImage src={url} alt="product.png" height={300} width={450} loading='eager' className="rounded-sm w-full " quality={100} zoomOnHover={true} zoomerSize={{ height: 150, width: 140 }} />
                    </div>
                  )
                })
              }
            </Slider>
          </div>
          <div className="px-4 py-2 fixed bottom-0 left-0 bg-[#fff] max-w-full flex shrink-0 gap-4 overflow-scroll scrollbar-hide">
            {
              productData?.images?.map((url: string, index: number) => {
                return (
                  <div className={`${activeSlideIndex === index ? "border-2 primaryBorderColor rounded-sm" : ''} cursor-pointer`}
                    key={index}
                    onClick={() => {
                      handleActiveSlideIndex(index)
                      goToSlide(index)
                    }}
                  >
                    <DynamicImage src={url} alt="product.png" height={250} width={380} className="rounded-sm " />
                  </div>
                )
              })
            }
          </div>
        </>
      </Modal.Dialog>
    </>
  )
}

export default ProductImageCarousel