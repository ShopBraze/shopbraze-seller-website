import WhatsAppIcon from "assets/icons/whatsapp-icon.svg"
import Button from "common-components/button/button"
import NumberInput from "common-components/form-components/number-input/number-input"
import TextInput from "common-components/form-components/text-input/text-input"
import Image from "next/image"
import { useForm } from "react-hook-form"

type LoginProps = {
  handleCheckoutSteps: (stepNumber: number) => void
}

const Login = ({ handleCheckoutSteps }: LoginProps) => {
  const { control, watch, formState: { isValid }, handleSubmit } = useForm({
    defaultValues: {
      whatsappNo: ''
    },
    mode: "onChange"
  })

  const handleGetOtp = () => {
    handleCheckoutSteps(2)
  }

  return (
    <>
      <div className="space-y-8">
        <div className="flex">
          <NumberInput>
            <NumberInput.Controller
              control={control}
              name="whatsappNo"
              label={'Enter Whatsapp no*'}
              placeholder="Enter whatsapp no."
              maxLength={10}
              className={{
                input: "text-gray-600 font-semibold py-2 px-3 w-full border border-[#E1E4EA] rounded-sm placeholder:text-[#99A0AE] text-base leading-6 -tracking-[0.176px]",
                container: 'space-y-1 w-full',
                label: "text-xs font-semibold"
              }}
              rules={{
                required: 'Contact Number is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Contact Number must be exactly 10 digits long and contain only numbers',
                },
              }}
              inputLeftIcon={WhatsAppIcon}
            />
          </NumberInput>
        </div>
        <div className="fixed lg:relative z-30 bottom-0 left-0 right-0 w-full bg-[#fff] py-2 pt-5 px-[18px] lg:px-0 border-t lg:border-none border-gray-300">
          <Button variant="primary" className="w-full font-semibold" disabled={isValid ? false : true} onClick={handleGetOtp}>
            GET OTP
          </Button>
        </div>
      </div>
    </>
  )
}
export default Login