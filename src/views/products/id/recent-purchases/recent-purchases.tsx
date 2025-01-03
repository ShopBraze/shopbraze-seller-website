import Image from 'next/image';
import { DefaultProductImageUrl } from 'constants/index.const';
import HorizontalScroll from 'common-components/horizontal-scroll/horizontal-scroll';

type RecentPurchasesProps = {}

const RecentPurchases = ({ }: RecentPurchasesProps) => {

  return (
    <div className='space-y-6 md:space-y-8'>
      <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">Recent Purchases</h1>
      <HorizontalScroll showArrow={false} autoScroll containerClassName='flex gap-4'>
        {
          [...new Array(20)].map((_, index) => {
            return (
              <div className="px-2 py-1.5 rounded-md flex gap-3 border border-gray-200 min-w-[310px] sm:min-w-[325px] md:min-w-[375px]" key={index}>
                <Image src={DefaultProductImageUrl} alt="product-name.png" height={80} width={75} className='rounded-lg h-20' />
                <div className="space-y-3">
                  <p className="text-xs font-medium text-gray-800">Morpankhi Pool Set for Winter</p>
                  <p className="text-[13px] font-semibold text-gray-600">Special Straight Winter Friendly </p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-primary-700 font-semibold">10 Minutes ago</p>
                    <p className='text-sm text-primary-700 font-bold'>View</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </HorizontalScroll >
    </div>
  )
}

export default RecentPurchases