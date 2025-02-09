
import { SquareSigma } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
function HomeSection() {
  return (
    <div className='flex '>
      <div className='flex items-center justify-center flex-col font-Montserrat'>
        <div className='border-b-[1px] border-zinc-400 dark:border-zinc-700 p-6'>
          <h1 className='flex items-center justify-center text-primary-blue  dark:text-primary-white font-bold text-4xl sm:text-7xl mt-4'> <SquareSigma className='text-primary-blue dark:text-primary-white w-10 h-10 sm:w-20 sm:h-20' />Expenso</h1>
          <p className='text-secondary-blue dark:text-secondary-white text-xs sm:text-base m-4'>Smart Utility for Expense Management</p>
        </div>
        <p className='text-justify sm:w-128 font-light text-secondary-black dark:text-alternate-black m-2 pb-8 text-sm sm:text-lg px-4'>
          Expenso is a powerful yet simple web utility app designed to streamline financial management.
          It offers a receipt generator for quick invoice creation and a currency converter with real-time exchange rates.
          Expenso enhances user convenience with features like digital receipt storage, txt exports,
          spending insights, and quick expense entry.<br />
          <span className='flex items-center justify-start font-medium pt-4 px-1 text-secondary-black dark:text-alternate-black text-xs sm:text-lg'><ArrowRight size={15} />&nbsp;Smart, fast, and hassle-free!</span>
          <span className='flex items-center justify-start font-medium pt-2 px-1 text-secondary-black dark:text-alternate-black text-xs sm:text-lg'><ArrowRight size={15} />&nbsp;Finances, Organized and Optimized!</span></p>
          <span className='mx-2 mt-4 font-semibold  text-base sm:text-lg text-primary-blue dark:text-secondary-white  [text-shadow:_0px_1px_0px_rgba(0,0,0,0.2)]'>Features of Expenso</span><br/>
        <p className='text-justify sm:w-128 font-light text-secondary-black dark:text-alternate-black  pb-8 text-sm sm:text-lg px-8'>
         
          <span className='font-medium text-symbol-blue  dark:text-secondary-white'>&rarr;&nbsp;Receipt Maker</span> – Generate professional invoices and receipts instantly with ease. Ideal for businesses and individuals managing expenses efficiently.<br/>
          <span className='font-medium  text-symbol-blue dark:text-secondary-white '>&rarr;&nbsp;Currency Converter</span> – Convert currencies effortlessly with accurate exchange rates, ensuring hassle-free international transactions.<br/>
          <span className='font-medium  text-symbol-blue dark:text-secondary-white '>&rarr;&nbsp;Live Currency Rates</span> – Stay updated with real-time currency exchange rates to make informed financial decisions.<br/>
        </p>
      </div>
    </div>
  )
}

export default HomeSection