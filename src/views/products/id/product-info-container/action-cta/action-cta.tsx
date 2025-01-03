import Button from "common-components/button/button"

type ActionCtaProps = {}

const ActionCta = ({ }: ActionCtaProps) => {
  return (
    <div className="mt-5 flex w-full gap-3 sm:gap-5">
      <Button className="w-full py-2.5 rounded-md border border-primary-600 text-gray-700 text-sm font-semibold">ADD TO CART</Button>
      <Button className="w-full py-2.5 rounded-md bg-primary-700 text-[#fff] text-sm font-semibold">BUY NOW</Button>
    </div>
  )
}

export default ActionCta