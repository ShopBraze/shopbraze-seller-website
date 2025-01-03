import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import PlusIcon from "assets/icons/product-details/plus-icon.svg"
import MinusIcon from "assets/icons/product-details/minus-icon.svg"
import LowestPriceSealIcon from "assets/icons/product-details/low-price-seal.svg"
import SuperiorQualitySealIcon from "assets/icons/product-details/high-quality.svg"
import NextDayDispatchSealIcon from "assets/icons/product-details/next-day-delivery-seal.svg"
import Image from 'next/image'


type ProductFeaturesAccordianProps = {}

const ProductFeaturesAccordian = ({ }: ProductFeaturesAccordianProps) => {
  return (
    <div className="mt-6">
      <div className="space-y-6 md:space-y-10">
        <div >
          {["Description", "Size Guide", "Other Information"].map((name, index) => {
            return (
              <Disclosure as="div" className="w-full border-t border-gray-300 py-3" key={index}>
                <DisclosureButton className="w-full text-left text-gray-700 font-bold flex justify-between">
                  <p>{name}</p>
                  <Image src={PlusIcon} alt="plus.svg" />
                </DisclosureButton>
                <div className="overflow-hidden">
                  <DisclosurePanel
                    transition
                    className="pt-2 origin-top transition duration-200 ease-out data-[closed]:-translate-y-2 data-[closed]:opacity-0 text-xs text-gray-800"
                  >
                    Yes! You can purchase a license that you can share with your entire team.
                  </DisclosurePanel>
                </div>
              </Disclosure>
            )
          })}
        </div>
        <div className='flex justify-center gap-4 sm:gap-8'>
          {
            [LowestPriceSealIcon, SuperiorQualitySealIcon, NextDayDispatchSealIcon].map((sealIcon, index) => {
              return (
                <Image src={sealIcon} alt="seal.svg" height={80} className='h-14 md:h-20' />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default ProductFeaturesAccordian