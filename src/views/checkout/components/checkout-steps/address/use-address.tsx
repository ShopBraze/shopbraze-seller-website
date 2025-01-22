import { useForm } from "react-hook-form"

type Props = {
  handleCheckoutSteps?: (stepNumber: number) => void
}

const useAddress = ({ handleCheckoutSteps }: Props) => {
  const { control, formState: { isValid }, watch, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      buildingName: '',
      area: '',
      pinCode: '',
      city: '',
      state: ''
    },
    mode: 'onChange'
  })

  const onSubmit = (data: any) => {
    if (handleCheckoutSteps) handleCheckoutSteps(3)
    console.log(data, "formData")
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    isValid
  }
}

export default useAddress