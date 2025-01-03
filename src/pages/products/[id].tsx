import { DefaultProductDetails } from 'constants/index.const'
import React from 'react'
import ProductIdContainer from 'views/products/id/product-id-container'

type Props = {
  productData?: any
}

const Index = ({ productData }: Props) => {
  return (
    <>
      {/* <Head>
        <MetaTags
          url={`https://www.shopbraze.com/products/${products.publicId}`}
          title={product.title}
          description={product.metaDescription || product.description}
          image={product.thumbnailUrl}
          alt={'product  Thumbnail'}
          keywords={product.metaKeywords}
        />

        <title>{product.title}</title>
        <link rel="canonical" href={`/product/${product.publicId}`} />
      </Head> */}

      <ProductIdContainer productData={productData} />
    </>
  )
}

export default Index

export async function getServerSideProps(context: any) {
  const productId = context?.params?.id;

  const productData = await mockFetchProductData(); // Replace with your fetch logic
  if (!productData) {
    return { notFound: true };
  }

  return {
    props: {
      productData,
    },
  };
}


const mockFetchProductData = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(DefaultProductDetails), 10)
  );
