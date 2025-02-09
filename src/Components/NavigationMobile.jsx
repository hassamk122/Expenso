import React from 'react'
import { House } from 'lucide-react'
import { ReceiptText } from 'lucide-react'
import { CircleDollarSign } from 'lucide-react'
import { ReceiptPoundSterling } from 'lucide-react'

import { NavLink} from 'react-router-dom'

function NavigationMobile() {
    return (
        <div className='fixed bottom-0 left-0 w-full p-2  sm:hidden'>
            <div className=' flex items-center justify-around bg-primary-white dark:bg-secondary-black  rounded-full text-alternate-black dark:text-secondary-white '>
                <div className='flex p-4 items-center justify-center flex-col'>
                  <NavLink to='/'  className={({isActive}) => `${isActive ? "text-primary-blue":"text-alternate-black"}
                  ${isActive ? "dark:text-lime-500":"text-alternate-black "} flex items-center justify-center flex-col 
                  `}
                  ><House size={20} absoluteStrokeWidth={true} /><small className='text-[10px] pt-1'>Home</small></NavLink>
                </div>
                <div className='flex p-4 items-center justify-center flex-col'>
                <NavLink  to='/ReceiptMaker'  className={({isActive}) => `${isActive ? "text-primary-blue":"text-alternate-black"}
                  ${isActive ? "dark:text-lime-500":"text-alternate-black"} flex items-center justify-center flex-col `} 
                ><ReceiptText size={20} absoluteStrokeWidth={true} /><small className='text-[10px] pt-1'>Recipt Maker</small></NavLink>
                </div>
                <div className='flex p-4 items-center justify-center flex-col'>
               <NavLink to='/CurrencyConverter' className={({isActive}) => `${isActive ? "text-primary-blue":"text-alternate-black"}
                  ${isActive ? "dark:text-lime-500":"text-alternate-black"} flex items-center justify-center flex-col  `} 
               ><CircleDollarSign size={20} absoluteStrokeWidth={true} /><small className='text-[10px] pt-1'>Convert</small></NavLink>
                </div>
                <div className='flex p-4 items-center justify-center flex-col'>
                <NavLink to='/LiveCurrencyRates'  className={({isActive}) => `${isActive ? "text-primary-blue":"text-alternate-black"}
                  ${isActive ? "dark:text-lime-500":"text-alternate-black"}  flex items-center justify-center flex-col `} 
                ><ReceiptPoundSterling size={20} absoluteStrokeWidth={true} /><small className='text-[10px] pt-1'> Currency Rates</small></NavLink> 
                </div>
            </div>
        </div>
    )
}

export default NavigationMobile