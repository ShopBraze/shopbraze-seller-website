
import OffersTagIcon from "assets/icons/offers-tag-icon.svg"
import Image from "next/image"

type OffersDetailsProps = {
  className?: string
}

const OffersDetails = ({ className }: OffersDetailsProps) => {
  return (
    <div className={`py-2.5 lg:py-3 px-2.5 rounded-lg  bg-[#d4f6df] flex justify-between items-center ${className}`}>
      <div className="flex gap-3 items-center">
        <Image src={OffersTagIcon} alt="offers-tag.svg" />
        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-800">Save Upto ₹250</p>
          <p className="text-xs font-bold text-success-700">8 Offers Available</p>
        </div>
      </div>
      <p className="text-sm font-bold text-success-600">OFFERS</p>
    </div>
  )
}

export default OffersDetails