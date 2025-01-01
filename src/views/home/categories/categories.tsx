import { ProductsCategoriesData } from 'constants/index.const';
import Image from 'next/image';


type CategoriesProps = {}

const Categories = ({ }: CategoriesProps) => {

  return (
    <section className='pt-6 space-y-4 md:space-y-6'>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <h1 className="text-gray-800 text-xl md:text-3xl font-bold">CATEGORIES</h1>
        <p className="text-gray-600 text-xs md:text-sm text-center md:max-w-[70vw]">It is a collection of related products grouped together based on shared characteristics. It simplifies browsing by organizing items into logical sections, helping customers find what they need quickly and easily.</p>
      </div>

      <div className='flex gap-5 xs:justify-between overflow-scroll scrollbar-hide cursor-pointer'>
        {ProductsCategoriesData?.map((category) => {
          return (
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <Image src={category?.image} alt="product.name.webp" height={112} width={112} className="shrink-0 h-14 w-14 md:h-28 md:w-28 rounded-full" />
              <p className="text-xs md:text-sm text-gray-800">{category?.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Categories