import Layout from 'global-components/layout/layout'
import React from 'react'
import CrossBanner from './cross-banner/cross-banner'

type Props = {}

const HomeIndexContainer = (props: Props) => {
  return (
    <Layout>
      <div className="px-3 md:px-6 space-y-10 ">
        <CrossBanner />
      </div>
    </Layout>
  )
}

export default HomeIndexContainer