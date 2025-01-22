import RadioInput from 'common-components/form-components/radio-input/radio-input'
import { useForm } from 'react-hook-form'

import HundredPercentSafePaymentsIcon from "assets/icons/payment-page/hundred-percent-safe.svg"
import PercentAgeVerifiedIcon from "assets/icons/payment-page/percentage-verified-icon.svg"
import Image from 'next/image'
import OffersDetails from 'global-components/offers-details/offers-details'
import { OnlinePaymentMethodsIcon } from 'constants/index.const'
import Button from 'common-components/button/button'


type Props = {}

const PaymentMethodAndBillDetails = (props: Props) => {
  const { register, watch } = useForm({
    defaultValues: {
      paymentMethod: ""
    }
  })

  return (
    <div className='space-y-6'>
      {/* Payment Methods */}
      <div className='space-y-6'>
        <div className="flex items-center justify-between">
          <p className="text-base font-bold">Payment Method</p>
          <Image src={HundredPercentSafePaymentsIcon} alt="safe-payment.svg" />
        </div>
        <div className="divide-y divide-gray-200">
          <RadioInput
            name="paymentMethod"
            checkBoxName="Online"
            register={register}
            label={
              <div className='space-y-1'>
                <div className="flex items-center justify-between">
                  <p className='text-sm font-semibold text-gray-600'>Pay Online</p>
                  <div className="py-1 px-4 bg-success-500 flex justify-center items-center text-xs font-semibold text-[#fff] rounded">10% off upto ₹100</div>
                </div>

                <div className="flex items-center gap-x-3 flex-wrap gap-y-0">
                  {OnlinePaymentMethodsIcon?.map((item, index) => <Image src={item.icon} alt={`${item.name}.svg`} />)}
                </div>
              </div>
            }
            labelRight
            labelClassName='w-full cursor-pointer'
            containerClassName='pb-3 flex gap-2.5 items-center'
            inputClassName='h-[18px] w-[18px] shrink-0 rounded-full border border-gray-300 shadow-xs focus:ring-0 focus:outline-none'
          />
          <RadioInput
            name="paymentMethod"
            checkBoxName="COD"
            register={register}
            label={
              <p className='text-sm font-semibold text-gray-600'>Pay COD (Cash on Delivery)</p>
            }
            labelRight
            labelClassName='cursor-pointer'
            containerClassName='pt-3 flex gap-2.5 items-center'
            inputClassName='h-[18px] w-[18px] rounded-full border border-gray-300 shadow-xs focus:ring-0 focus:outline-none'
          />
        </div>
      </div>

      <OffersDetails />

      {/* Bill Details */}
      <div className="space-y-2.5">
        <div className="space-y-3">
          <p className="text-sm font-bold">Bill Details</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-xs font-semibold text-gray-600">Items</p>
              <p className="text-xs font-semibold text-gray-600">1</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs font-semibold text-gray-600">Item total</p>
              <p className="text-xs font-semibold text-gray-600">₹4,796</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs font-semibold text-success-600">Sale Discount</p>
              <p className="text-xs font-semibold text-success-600">-₹2,398</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs font-semibold text-gray-600">Delivery fee</p>
              <p className="text-xs font-semibold text-gray-600">₹0</p>
            </div>
            <div className='h-[1px] w-full bg-gray-200' />
            <div className="flex justify-between items-center">
              <p className="text-xs font-bold text-gray-600">Total amount</p>
              <p className="text-xs font-bold text-gray-600">₹2,398</p>
            </div>
          </div>
        </div>
        <div className="py-2.5 flex justify-center items-center gap-3 bg-[rgba(39,174,96,0.1)]">
          <Image src={PercentAgeVerifiedIcon} alt="verified.svg" />
          <p className="text-sm font-semibold text-success-600 ">Yay! your total discount is <span className="font-bold">₹4,800</span></p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex">
        <div className="hidden lg:block flex-1"></div>
        <div className="flex-1 lg:flex-[0.75] py-2 px-4 border-t border-gray-300 flex justify-between items-center bg-[#fff]">
          <div className="space-y-1">
            <p className="text-xs font-semibold">Total Amount</p>
            <p className="text-base font-bold">₹2,398</p>
          </div>
          <Button variant='primary'>Place Order</Button>
        </div>
      </div>
    </div>

  )
}

export default PaymentMethodAndBillDetails