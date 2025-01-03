
import ProductSizes from './product-sizes/product-sizes'
import ProductQuantity from './product-quantity/product-quantity'
import ProductTitleAndPrice from './product-title-and-price/product-title-and-price'
import ActionCta from './action-cta/action-cta'
import ProductDeliveryInfo from './product-delivery-info/product-delivery-info'
import ProductFeaturesAccordian from './product-features-accordian/product-features-accordian'

type ProductInfoContainerProps = {
  productData?: any
}

const ProductInfoContainer = ({ productData }: ProductInfoContainerProps) => {
  return (
    <div className=''>
      <ProductTitleAndPrice productData={productData} />
      <ProductSizes />
      <ProductQuantity />
      <ActionCta />
      <ProductDeliveryInfo />
      <ProductFeaturesAccordian />
    </div>
  )
}

export default ProductInfoContainer