import Head from 'next/head'
import Script from "next/script";
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar';
import HomepgSilder from './components/HomepgSilder';
import Footer from './components/Footer';
import Bob from './components/Bob';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head />
      <Navbar />
      <HomepgSilder />
      <Bob />
      <Footer />
      <Script
        src="https://code.jquery.com/jquery-3.6.4.min.js"
        integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
        crossOrigin="anonymous" />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      />
      <Script 
      src="https://kit.fontawesome.com/0aee105806.js" 
      crossOrigin="anonymous" />
      <Script
        type="text/javascript"
        src={'slick/slick.min.js'} />
      <Script
        type="text/javascript"
        src={'js/custom.js'} />
    </>
  )
}
