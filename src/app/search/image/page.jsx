import React from 'react'
import Link from 'next/link'
import ImageSearchResult from '@/components/ImageSearchResult'

const ImageSearch = async ({searchParams}) => {
  const startIndex = searchParams.start || "1"
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBoLWoy6PykfxdbnwlcWX0O3YbHTkpXcG0&cx=51cb156eebb564c2d&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`)

  if(!response.ok){
    throw new Error("Something went wrong")
  }

  const data = await response.json()
  const result = data.items

  if(!result){
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No results found</h1>
        <p className='text-lg'>Try searching for Something else or go back to the homepage</p>
        <Link className='text-blue-500' href={'/'}>Home</Link>
      </div>
    )
  }
  return (
    <>
      {result && <ImageSearchResult results={data} />} 
    </>
  )
}

export default ImageSearch