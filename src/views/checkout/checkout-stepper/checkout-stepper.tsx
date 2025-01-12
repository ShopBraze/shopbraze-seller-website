
type CheckoutStepperProps = {
  activeStep: number
}

const CheckoutStepper = ({ activeStep }: CheckoutStepperProps) => {

  const CheckoutStepperData = [
    {
      value: 1,
      name: "Login",
      isActive: activeStep === 1 ? true : false,
      isDone: activeStep > 1 ? true : false
    },
    {
      value: 2,
      name: "Address",
      isActive: activeStep === 2 ? true : false,
      isDone: activeStep > 2 ? true : false
    },
    {
      value: 3,
      name: "Payment",
      isActive: activeStep === 3 ? true : false,
      isDone: activeStep > 3 ? true : false
    }
  ]

  return (
    <div className="w-full md:w-[500px] md:m-auto flex gap-1">

      {
        CheckoutStepperData?.map(({ value, name, isActive, isDone }, index) => {
          return (
            <>
              <div className="flex flex-col items-center gap-y-1.5" key={value}>
                <div className={`h-8 w-8 rounded-full border-2  flex justify-center items-center font-semibold
                   ${isDone ? "bg-success-700 text-[#fff]" : isActive ? "border-success-600 text-success-700" : "border-gray-300 text-gray-500"}`}>
                  {value}
                </div>
                <p className={` font-semibold text-sm ${isActive ? "text-success-700" : isDone ? "text-success-700" : "text-gray-400"}`}>{name}</p>
              </div>
              {index < 2 && <div className={`mt-4 w-full h-[2px] ${activeStep > index + 1 ? "bg-success-600" : "bg-gray-200"} `} />}
            </>
          )
        })
      }
    </div>
  )
}

export default CheckoutStepper