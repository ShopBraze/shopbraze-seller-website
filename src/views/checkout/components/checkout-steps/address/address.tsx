import Button from 'common-components/button/button'
import TextInput from 'common-components/form-components/text-input/text-input'
import React from 'react'
import { useForm } from 'react-hook-form'
import useAddress from './use-address'

type Props = {}

const Address = (props: Props) => {

  const { control, handleSubmit, onSubmit, isValid } = useAddress()

  return (
    <div className='space-y-7'>
      <TextInput>
        <TextInput.Controller
          control={control}
          name="name"
          label={'Full Name*'}
          showFloatingLabel
          className={{
            textarea: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px] focus:outline-none focus:ring-0 focus:border-[#E1E4EA]",
            container: ''
          }}
          rules={{
            required: 'Name field is required',
          }}
        />
      </TextInput>
      <TextInput>
        <TextInput.Controller
          control={control}
          name="buildingName"
          label="House No./ Building Name*"
          showFloatingLabel
          className={{
            textarea: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px] focus:outline-none focus:ring-0 focus:border-[#E1E4EA]",
            container: ''
          }}
          rules={{
            required: 'House Number field is required',
          }}
        />
      </TextInput>
      <TextInput>
        <TextInput.Controller
          control={control}
          name="area"
          label="Road Name / Area / Colony*"
          showFloatingLabel
          className={{
            textarea: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px] focus:outline-none focus:ring-0 focus:border-[#E1E4EA]",
            container: ''
          }}
          rules={{
            required: 'Area field is required',
            minLength: {
              value: 20,
              message: 'At least 20 characters required',
            },
          }}
        />
      </TextInput>
      <TextInput>
        <TextInput.Controller
          control={control}
          name="pinCode"
          label="Pincode*"
          showFloatingLabel
          className={{
            textarea: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px] focus:outline-none focus:ring-0 focus:border-[#E1E4EA]",
            container: ''
          }}
          rules={{
            required: 'Pincode is required',
            pattern: {
              value: /^[0-9]{6}$/,
              message: 'Pincode must be exactly 6 digits',
            },
          }}
        />
      </TextInput>

      <div className="w-full flex gap-3">
        <TextInput>
          <TextInput.Controller
            control={control}
            name="city"
            label="City*"
            showFloatingLabel
            className={{
              textarea: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px] focus:outline-none focus:ring-0 focus:border-[#E1E4EA]",
              container: 'w-full'
            }}
            disabled={true}
          />
        </TextInput>
        <TextInput>
          <TextInput.Controller
            control={control}
            name="state"
            label="State*"
            showFloatingLabel
            className={{
              textarea: "text-gray-600 font-medium py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px] focus:outline-none focus:ring-0 focus:border-[#E1E4EA]",
              container: 'w-full'
            }}
            disabled={true}
          />
        </TextInput>
      </div>

      <div className="w-full pt-6 border-t border-gray-300">
        <Button variant='primary' className='w-full' onClick={handleSubmit(onSubmit)} disabled={!isValid}>
          Continue
        </Button>
      </div>

    </div >
  )
}

export default Address