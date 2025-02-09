import React from 'react'
import { useState, useEffect } from 'react';
import PakistanFlag from '../assets/pk.svg'
function LiveCurrencyRates() {

  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/CurrencyRates.json')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setCurrencies(data);
          setLoading(false);
      },500);
      })
      .catch((error) => console.log("Error Fetching data", error));
  }, [])
  return (
    <>
      <div className='font-Montserrat flex items-center justify-center flex-col mt-8 px-2 sm:p-4 '>
        <h2 className='text-center font-bold text-primary-blue dark:text-secondary-white text-2xl p-4'>Currency Rates in <span className='text-lime-600'>Pakistan</span></h2>

        {isLoading ?
         <div
         className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
         role="status">
         <span
           className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
         >Loading...</span>
       </div>
          :
          <table className='border-collapse'>
            <thead>
              <tr className=' dark:bg-secondary-white text-xs sm:text-lg'>
                <th className='border p-2'>Country</th>
                <th className='border  p-1 sm:p-2'>Currency</th>
                <th className='border p-1 sm:p-2'>Buy Rate</th>
                <th className='border p-1 sm:p-2'>Sell Rate</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((currency, index) => (
                <tr key={index} className='text-center  dark:bg-alternate-black text-xs sm:text-lg'>

                  <td className='border-[1px] p-2 '>
                    <div className='flex items-center justify-start gap-2'>
                      <img
                        src={currency.flag}
                        alt={currency.country}
                        width="30"
                        height="20" />{currency.country}
                    </div></td>
                  <td className='border p-1 sm:p-2'>{currency.currency}
                  </td>
                  <td className='border p-1 sm:p-2'>{currency.buy}</td>
                  <td className='border p-1 sm:p-2'>{currency.sell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }

        <small className='text-primary-black dark:text-secondary-white mt-1'>Last updated on 9/02/2025</small>
        <a href='https://hamariweb.com/finance/forex/open_market_rates.aspx' target='_blank' className='text-primary-black dark:text-secondary-white mt-1 underline'> View Latest</a>
      </div>
    </>
  )
}

export default LiveCurrencyRates