import React from 'react'
import DashboardTopBanner from '../dashboard-top-banner/dashboard-top-banner'
import Navbar from '../../common-components/navbar/navbar'
import Footer from '../../common-components/footer/footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className='min-h-[100vh] pb-40 md:pb-10'>
      <header className="sticky top-0 bg-[#fff] z-30">
        <DashboardTopBanner />
        <Navbar />
      </header>
      {children}
      <Footer />
    </main>
  )
}

export default Layout