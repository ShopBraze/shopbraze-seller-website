import React from 'react'
import DashboardTopBanner from '../dashboard-top-banner/dashboard-top-banner'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <DashboardTopBanner />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout