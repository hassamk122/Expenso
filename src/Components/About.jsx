import React from 'react'

function About() {
    return (
        <div className='flex p-2'>
            <div className='flex items-center justify-center flex-col font-Montserrat  '>
                <h2 className='font-semibold text-primary-black dark:text-primary-white  pt-5'>About</h2>
                <p className='text-justify sm:w-128 font-light text-secondary-black dark:text-alternate-black m-4 pb-8 text-xs sm:text-lg px-8 '>
                    Expenso is a powerful yet intuitive web utility app designed to simplify financial management. Whether you're tracking expenses,
                    generating invoices, or converting currencies, Expenso provides a seamless experience with essential financial tools.
                    Built by Hassam Kiani, Expenso is developed using React for a dynamic user interface, Tailwind CSS for a sleek and
                    responsive design, and Lucide React for modern icons. It leverages real-time data fetching for currency exchange rates
                    , ensuring accuracy and reliability.
                </p>
            </div>
        </div>
    )
}

export default About