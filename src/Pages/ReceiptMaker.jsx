import React from 'react'
import Tracker from '../Components/Tracker.jsx'
function ReceiptMaker() {
  return (
    <>
    <div className='font-Montserrat flex items-center justify-center flex-col mt-8 pb-10 sm:p-4'>
    <h1 className='flex items-center justify-center text-primary-blue  dark:text-primary-white font-bold text-3xl sm:text-5xl mt-4'> Receipt Maker</h1>
        <Tracker/>
    </div>
    </>
  )
}

export default ReceiptMaker