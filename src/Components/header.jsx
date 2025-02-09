import React from 'react'
import { SquareSigma } from 'lucide-react'
import ToggleTheme from '../Components/ToggleTheme.jsx'

import { Link } from 'react-router-dom'

function header() {
  return (
    <div className='flex items-center justify-around flex-wrap p-3 sm:p-4 bg-primary-white dark:bg-secondary-black'>
        <div className='flex items-center justify-center flex-row'>
            <Link to="/"><SquareSigma size={30} absoluteStrokeWidth={true} className='text-primary-blue dark:text-primary-white'/></Link>
            <Link to="/"><h2 className='font-bold text-xl text-primary-blue dark:text-primary-white font-Montserrat'>Expenso</h2></Link>
            </div>
        <div className='flex items-center justify-center'><ToggleTheme/></div>
    </div>

  )
}

export default header