import Head from 'next/head'
import Image from 'next/image'
import MainNav from '../components/MainNav'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>USPL World | Powerhouse of Fashion Brands – Wrogn, IMARA, Ms. Taken, Single</title>
        <meta name="description" content="Shop for uniquely designed styles from your favorite celebrities! Get breakaway youth fashion by Wrogn, contemporary classics by IMARA, bold Western wear by Ms. Taken and Single." />
        <link rel="icon" href="favicon.85cea62afa63.ico" />
      </Head>
      <MainNav />
      <Main />
      <Footer />
    </div>
  )
}
