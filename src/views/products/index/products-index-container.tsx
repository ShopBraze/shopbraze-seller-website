import DynamicImage from 'common-components/dynamic-image/dynamic-image'
import { DefaultProductsPageCategories } from 'constants/index.const'
import Layout from 'global-components/layout/layout'
import Link from 'next/link'

type Props = {}

const ProductsIndexContainer = (props: Props) => {
  return (
    <Layout>
      <div className="px-3 md:px-6 pt-2 md:pt-4 ">
        <div className="grid gap-3 grid-cols-2 md:grid-cols-5">
          {
            DefaultProductsPageCategories?.map((item, index) => {
              return (
                <Link href={`/products/rec132ty867`}>
                  <div className='relative'>
                    <DynamicImage src={item?.image} alt="item-name" height={380} width={250} className='rounded-lg' />
                    <div className="absolute bottom-6 w-full flex justify-center">
                      <div className="py-1 px-1.5 bg-[#fff] font-semibold rounded-sm text-xs sm:text-sm lg:text-base">{item?.title}</div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default ProductsIndexContainer