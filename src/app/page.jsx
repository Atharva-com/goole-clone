"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [progress, setProgress] = useState(10)
  return (
    <main >

      <div className='z-50'>
      <LoadingBar
        color='#f11946'
        progress={progress}
        loaderSpeed ={800}
        onLoaderFinished={() => setProgress(0)}
      />
        {/* Header */}
        <HomeHeader />

        {/* Body */}
        <div className='flex flex-col items-center mt-24'>
          <Image 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' 
            alt='' 
            width={300}
            height={300}
          />

          <HomeSearch setProgress={setProgress} />
        </div>
      </div>
    </main>
  )
}
