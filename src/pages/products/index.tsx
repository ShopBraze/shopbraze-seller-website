import React from 'react'
import ProductsIndexContainer from 'views/products/index/products-index-container'

type Props = {}

const Index = (props: Props) => {
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
      <ProductsIndexContainer />
    </>
  )
}

export default Index