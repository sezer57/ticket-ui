import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../compenents/Header';
import Footer from '../compenents/Footer';
import Banner from '../compenents/Banner';
import TravelSection from '../compenents/TravelSection';


const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Banner />
        <TravelSection />
      </main>

      <Footer />
    </div>
  )
}

export default Home
