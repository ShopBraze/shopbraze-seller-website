import { useForm } from "react-hook-form"

const useAddress = () => {
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