"use client";

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BiMicrophone } from 'react-icons/bi'
import { RxMagnifyingGlass } from 'react-icons/rx'

const HomeSearch = ({setProgress}) => {

    const [input, setInput] = useState("")
    const router = useRouter()

    function handleSubmit(e){
        setProgress(50)
        e.preventDefault()
        if(!input.trim()) return;
        setProgress(80)
        router.push(`/search/web?searchTerm=${input}`)
        setProgress(100)
    }

    async function randomSearch(){
        setProgress(30)
        const response = await fetch("https://random-word-api.herokuapp.com/word").then((res)=> res.json()).then((data)=> data[0])
        setProgress(60)
        if(!response) return;
        setProgress(80)
        router.push(`/search/web?searchTerm=${response}`)
        setProgress(100)
    }
  return (
    <>
        <form onSubmit={handleSubmit} className='flex items-center w-full mt-5 mx-auto max-w-[90%] sm:max-w-xl lg:max-w-2xl border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md'>

            <RxMagnifyingGlass  onClick={handleSubmit} className='text-xl text-gray-500 mr-3' />
            
            <input type="text" className='flex-grow focus:outline-none bg-transparent' value={input} onChange={(e)=> setInput(e.target.value)}/>

            <BiMicrophone className='text-xl' />
        </form>

        <div className='flex flex-col sm:flex-row mt-8 space-y-2 sm:space-y-0 sm:space-x-4 justify-center'>
            <button onClick={handleSubmit} className='btn'>Google Search</button>
            <button onClick={randomSearch} className='btn'>I am Feeling Lucky</button>
        </div>
    </>
  )
}

export default HomeSearch