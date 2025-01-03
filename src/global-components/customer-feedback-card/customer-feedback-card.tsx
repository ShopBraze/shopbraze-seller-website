import StartRatingIcon from "assets/icons/rating-star-yellow-icon.svg";
import { DefaultProductImageUrl } from "constants/index.const";
import Image from "next/image";

type CustomerFeedbackCardProps = {
  hasImage?: boolean;
};

const CustomerFeedbackCard = ({ hasImage }: CustomerFeedbackCardProps) => {
  return (
    <div className="inline-block rounded-md border border-gray-200 shadow-[0_0_3px_rgba(0,0,0,0.2)] mb-5">
      {hasImage && (
        <Image
          src={DefaultProductImageUrl}
          alt="feedback-icon.png"
          width={373}
          height={200}
          className="rounded-t-lg w-full"
        />
      )}
      <div className="p-1.5 md:p-3 space-y-1.5 md:space-y-3">
        <p className="text-gray-800 text-sm md:text-base font-semibold">Radheshyam</p>
        <div className="flex flex-col gap-y-1 sm:flex-row md:justify-between md:items-center">
          <div className="flex gap-1">
            {[...new Array(5)].map((_, index) => (
              <Image src={StartRatingIcon} alt="star.svg" key={index} />
            ))}
          </div>
          <p className="text-xs lg:text-sm font-medium text-gray-600">22/12/2024</p>
        </div>
        <p className="text-gray-900 font-medium text-xs md:text-sm">
          Worth buying fabric was good and fitting was also very good
        </p>
      </div>
    </div>
  );
};

export default CustomerFeedbackCard;
