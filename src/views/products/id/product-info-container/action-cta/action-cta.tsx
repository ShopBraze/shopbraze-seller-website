import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ArrowDownIcon from 'assets/icons/chevron-down-gray.svg'
import Button from "common-components/button/button"
import useIsInView from "core/hooks/use-is-in-view"
import Image from 'next/image'
import MenuSelect from 'common-components/form-components/menu-select/menu-select'
import { ProductSizesOptions } from 'constants/index.const'
import AddToCart from 'global-components/add-to-cart/add-to-cart'

type ActionCtaProps = {}

const ActionCta = ({ }: ActionCtaProps) => {
  const { isInView } = useIsInView({ elementId: "product-page-action-cta" })
  const [selectedSize, setSelectedSize] = useState<string>('')

  return (
    <>
      <div className="mt-5 flex w-full gap-3 sm:gap-5" id="product-page-action-cta">
        <AddToCart />
        <Button className="w-full py-2.5 rounded-md text-[#fff] text-sm font-semibold primaryBgColor">BUY NOW</Button>
      </div>

      {
        !isInView && <div className="fixed z-30 bottom-0 left-0 right-0 bg-[#fff] py-2 md:py-4 px-3 border-t border-gray-200 md:bg-gray-100">
          <div className="flex flex-col md:flex-row w-full gap-3 sm:gap-5" id="product-page-action-cta">
            {/* <MenuSelect options={ProductSizesOptions}
              onChange={(option) => { setSelectedSize(option?.value) }}
              placeHolder='Select Size'
              selected={selectedSize}
              optionsContainerClassName='-top-[190px]'
              optionLabelClassName='text-sm'
            /> */}
            <AddToCart />
            <Button className="w-full py-2.5 rounded-md text-[#fff] text-sm font-semibold primaryBgColor">
              ₹1,999 &nbsp; |  &nbsp; BUY NOW
            </Button>
          </div>
        </div>
      }
    </>
  )
}

export default ActionCta