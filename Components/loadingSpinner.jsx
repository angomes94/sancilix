"use client";
import React from 'react'
import PuffLoader from "react-spinners/PuffLoader"

export default function LoadingSpinner() {
  return (
    <div >
    <PuffLoader
    color={"#000000"}
    loading={true}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  /></div>
  )
}
