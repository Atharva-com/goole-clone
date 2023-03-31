"use client"

import React, { useEffect } from 'react'

const Error = ({error, reset}) => {

    useEffect(() => {
      
    }, [error])
    
  return (
    <div className='flex flex-col items-center justify-center pt-10'>
        <h1 className='text-3xl mb-4'>Something Went Wrong</h1>
        <button className='text-blue-500' onClick={()=> reset()}>Try Again</button>
    </div>
  )
}

export default Error