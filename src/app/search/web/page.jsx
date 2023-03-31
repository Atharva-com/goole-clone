import WebSearchResults from '@/components/WebSearchResults'
import Link from 'next/link'
import React from 'react'

const WebSearch = async ({searchParams}) => {
  const startIndex = searchParams.start || "1"
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${CONTEXT_GOOGLE_IP}&q=${searchParams.searchTerm}&start=${startIndex}`)

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
      {result && <WebSearchResults results={data} />} 
    </>
  )
}

export default WebSearch
