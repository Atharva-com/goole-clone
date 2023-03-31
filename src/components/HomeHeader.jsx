import Link from 'next/link'
import React from 'react'
import { BsGrid3X3GapFill } from 'react-icons/bs'
    
    const HomeHeader = () => {
      return (
        <header className='flex justify-end p-5 text-sm'>
            <div className='flex space-x-4 items-center'>
                <Link href={''} className='hover:underline'>
                    Gmail
                </Link>

                <Link href={'/image'} className='hover:underline'>
                    Images
                </Link>

                <BsGrid3X3GapFill className='text-4xl p-2 cursor-pointer' />

                <button className='bg-blue-500 px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-sm hover:shadow-yellow-100 transition-shadow'>Sign in</button>
            </div>
        </header>
      )
    }
    
    export default HomeHeader