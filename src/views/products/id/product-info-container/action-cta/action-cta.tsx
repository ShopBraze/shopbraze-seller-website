import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ArrowDownIcon from 'assets/icons/chevron-down-gray.svg'
import Button from "common-components/button/button"
import useIsInView from "core/hooks/use-is-in-view"
import Image from 'next/image'
import MenuSelect from 'common-components/form-components/menu-select/menu-select'
import { ProductSizesOptions } from 'constants/index.const'

type ActionCtaProps = {}

const ActionCta = ({ }: ActionCtaProps) => {
  const { isInView } = useIsInView({ elementId: "product-page-action-cta" })
  const [selectedSize, setSelectedSize] = useState<string>('')

  return (
    <>
      <div className="mt-5 flex w-full gap-3 sm:gap-5" id="product-page-action-cta">
        <Button className="w-full py-2.5 rounded-md border border-primary-600 text-gray-700 text-sm font-semibold">ADD TO CART</Button>
        <Button className="w-full py-2.5 rounded-md bg-primary-700 text-[#fff] text-sm font-semibold">BUY NOW</Button>
      </div>

      <div className="fixed z-30 bottom-0 left-0 right-0 bg-[#fff] py-2 px-3 border-t border-gray-200">
        <div className="flex flex-col w-full gap-3 sm:gap-5" id="product-page-action-cta">
          <MenuSelect options={ProductSizesOptions}
            onChange={(option) => { setSelectedSize(option?.value) }}
            placeHolder='Select Size'
            selected={selectedSize}
            optionsContainerClassName='-top-[190px]'
            optionLabelClassName='text-sm'
          />
          <Button className="w-full py-2.5 rounded-md bg-primary-700 text-[#fff] text-sm font-semibold">
            BUY NOW
          </Button>
        </div>
      </div>





    </>
  )
}

export default ActionCta