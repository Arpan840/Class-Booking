import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import DefaultScreen from '../Components/DefaultScreen/index'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Class Booking application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
       <DefaultScreen/>
      </main>
    </>
  )
}
