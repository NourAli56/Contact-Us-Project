import React from 'react'
import HeroSection from '../../components/hero-section'
import Ads from '../../components/ads'
import Products from '../../components/products'
import Footer from '../../components/layout/Footer'

export default function Home() {
  return (
    <div className='relative'>
        <HeroSection />
        <Ads />
        <Products />
        <Footer />
    </div>
  )
}
