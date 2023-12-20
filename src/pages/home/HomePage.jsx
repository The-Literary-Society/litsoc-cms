import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero'
import Articles from './container/Articles'
import Gallery from './container/Gallery'

const HomePage = () => {
  return <MainLayout>
    <Hero />
    <Articles />
    <Gallery />
  </MainLayout>
}

export default HomePage