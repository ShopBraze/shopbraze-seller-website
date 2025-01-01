import Layout from 'global-components/layout/layout'
import React from 'react'
import CrossBanner from './cross-banner/cross-banner'
import Categories from './categories/categories'
import CloseOutSale from './closeout-sale/closeout-sale'
import DiscountSale from './discount-sale/discount-sale'
import FastestSale from './fastest-sale/fastest-sale'

type Props = {}

const HomeIndexContainer = (props: Props) => {
  return (
    <Layout>
      <div className="px-3 md:px-6 pt-2 md:pt-4 space-y-10 ">
        <CrossBanner />
        <Categories />
        <CloseOutSale />
        <DiscountSale />
        <FastestSale />
      </div>
    </Layout>
  )
}

export default HomeIndexContainer