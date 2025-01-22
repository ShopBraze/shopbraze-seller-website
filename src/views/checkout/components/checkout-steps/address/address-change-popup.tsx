import Modal from 'common-components/modal/modal'
import CloseIcon from "assets/icons/cross-icon.svg"
import Address from './address'
import Image from 'next/image'
import useAddress from './use-address'
import Button from 'common-components/button/button'
import TextInput from 'common-components/form-components/text-input/text-input'

type AddressChangePopUpProps = {
  children?: React.ReactNode
}

const AddressChangePopUp = ({ children }: AddressChangePopUpProps) => {
  const { control, handleSubmit, onSubmit, isValid } = useAddress({})

  return (
    <Modal>
      {({ open, handleOpenToggle }) => {
        return (
          <>
            <Modal.Button onClick={handleOpenToggle} className=''>
              {children || <div className='text-xs font-bold text-success-600'>CHANGE</div>}
            </Modal.Button>

            <Modal.Dialog open={open} handleOpenToggle={handleOpenToggle} closeOnOutsideClick={true} className='bg-[#fff] w-full md:w-[500px] rounded-md'>

              <div className="p-4 pt-6 space-y-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm lg:text-base font-bold text-gray-700">Change Delivery Address</p>
                  <Image src={CloseIcon} alt="close.svg" className="cursor-pointer" onClick={handleOpenToggle} />
                </div>
                <div className='space-y-7'>
                  <TextInput>
                    <TextInput.Controller
                      control={control}
                      name="name"
                      label={'Full Name*'}
                      showFloatingLabel
                      className={{
                        textarea: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px]",
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
                        textarea: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px]",
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
                        textarea: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px]",
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
                        textarea: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px]",
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
                          textarea: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px] ",
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
                          textarea: "text-gray-600 font-medium py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px] ",
                          container: 'w-full'
                        }}
                        disabled={true}
                      />
                    </TextInput>
                  </div>

                  <Button variant='primary' className='w-full' onClick={() => { }} disabled={!isValid}>
                    CONFIRM
                  </Button>
                </div >
              </div>
            </Modal.Dialog>
          </>
        )
      }}
    </Modal>
  )
}

export default AddressChangePopUp