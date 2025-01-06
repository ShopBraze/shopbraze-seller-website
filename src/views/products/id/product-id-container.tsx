import Layout from 'global-components/layout/layout'
import ProductImageCarousel from './prdouct-image-carousel/product-image-carousel'
import ProductInfoContainer from './product-info-container/product-info-container'
import RecentPurchases from './recent-purchases/recent-purchases'
import CustomerFeedback from './customer-feedback/customer-feedback'
import RecentlyViewed from './recently-viewed/recently-viewed'

type ProductIdContainerProps = {
  productData?: any
}

const ProductIdContainer = ({ productData }: ProductIdContainerProps) => {
  console.log(productData)
  return (
    <Layout>
      <div className="px-3 md:px-10 pt-2 md:pt-4 space-y-8 md:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          <ProductImageCarousel productData={productData} />
          <ProductInfoContainer productData={productData} />
        </div>
        <RecentPurchases />
        <CustomerFeedback />
        <RecentlyViewed />
      </div>
    </Layout>
  )
}

export default ProductIdContainer