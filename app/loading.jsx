import React from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'


export default function loading() {
  return (
    <div className=' flex flex-1 w-full h-screen justify-center items-center'>
    <LoadingSpinner/>
  </div>
  )
}
