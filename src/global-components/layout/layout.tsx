import React from 'react'
import DashboardTopBanner from '../dashboard-top-banner/dashboard-top-banner'
import Navbar from '../../common-components/navbar/navbar'
import Footer from '../../common-components/footer/footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className=' pb-6 md:pb-10'>
      <div className="sticky top-0 bg-[#fff] z-30">
        <DashboardTopBanner />
        <Navbar />
      </div>
      {children}
      <Footer />
    </main>
  )
}

export default Layout