'use client'

import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import Stats from '@/components/home/Stats'
import Portfolio from '@/components/home/Portfolio'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  )
}
