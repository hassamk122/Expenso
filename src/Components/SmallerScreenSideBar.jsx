import React from 'react'
import { House } from 'lucide-react'
import { ReceiptText } from 'lucide-react'
import { CircleDollarSign } from 'lucide-react'
import { ReceiptPoundSterling } from 'lucide-react'

import { NavLink } from 'react-router-dom'

function SmallerScreenSideBar() {
    return (
        <div className='sm:flex items-center justify-center bg-primary-white dark:bg-secondary-black hidden'>
            <ul className='flex flex-row text-left font-semibold text-alternate-black dark:text-secondary-white '>
                <NavLink to='/' className={({ isActive }) => `${isActive ? "text-primary-blue" : "text-alternate-black"}
                  ${isActive ? "dark:text-lime-500" : "text-alternate-black "}  dark:hover:text-lime-500 hover:text-secondary-black transition-all delay-75 duration-100 ease-in-out`}
                > <li className='py-3 sm:p-4 flex items-center justify-start gap-2 '>
                        <House size={20} absoluteStrokeWidth={true} /><span className=''>Home</span>
                    </li></NavLink>
                <NavLink to='/ReceiptMaker'  className={({ isActive }) => `${isActive ? "text-primary-blue" : "text-alternate-black"}
                  ${isActive ? "dark:text-lime-500" : "text-alternate-black "}  dark:hover:text-lime-500 hover:text-secondary-black transition-all delay-75 duration-100 ease-in-out`}
                >   <li className='py-3 sm:p-4 flex items-center justify-start gap-2 '>
                        <ReceiptText size={20} absoluteStrokeWidth={true} /> <span className=''>Receipt Maker</span>
                    </li></NavLink>
                <NavLink to='/CurrencyConverter' className={({ isActive }) => `${isActive ? "text-primary-blue" : "text-alternate-black"}
                  ${isActive ? "dark:text-lime-500" : "text-alternate-black "}   dark:hover:text-lime-500 hover:text-secondary-black transition-all delay-75 duration-100 ease-in-out`}
                >   <li className='py-3 sm:p-4 flex items-center justify-start gap-2'>
                        <CircleDollarSign size={20} absoluteStrokeWidth={true} /><span className=''>Currency Converter</span>
                    </li></NavLink>
                <NavLink to='/LiveCurrencyRates' className={({ isActive }) => `${isActive ? "text-primary-blue" : "text-alternate-black"}
                  ${isActive ? "dark:text-lime-500" : "text-alternate-black "}   dark:hover:text-lime-500 hover:text-secondary-black transition-all delay-75 duration-100 ease-in-out`}
                >   <li className='py-3 sm:p-4 flex items-center justify-start gap-2 '>
                        <ReceiptPoundSterling size={20} absoluteStrokeWidth={true} /> <span className=''>Currency Rates</span>
                    </li></NavLink>
            </ul>
        </div>
    )
}

export default SmallerScreenSideBar