import React from 'react'
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
function Footer() {
    return (
        <footer className='pb-20 px-4 sm:pb-0 sm:px-12 font-Montserrat' >
            <div className='flex items-center justify-around mt-4 border-b-[1px] border-zinc-400 dark:border-zinc-700'>
                <div className='flex items-center justify-center flex-col m-2 mt-4 text-zinc-900 '>
                   
                    <div>
                    <h3 className='text-xs sm:text-xl text-primary-blue dark:text-alternate-black mb-0 sm:mb-2'><strong>Follow Me</strong></h3>
                    </div>
                    <div className='flex gap-x-3 mt-2 pb-5'> 
                        <h3 className=" cursor-pointer text-white rounded-2xl bg-[#0077B5] dark:text-[#0077B5] dark:bg-white dark:hover:bg-zinc-200 hover:rounded-xl p-2 transition-all delay-100 duration-300 ease-in">
                            <a href="https://www.linkedin.com/in/hassam-kiani-648459248/" target='_blank'><Linkedin className='size-3.5 sm:size-6'/></a>
                        </h3>
                        <h3 className="cursor-pointer text-white rounded-2xl bg-black dark:text-black dark:bg-white  dark:hover:bg-zinc-200 hover:rounded-xl p-2 transition-all delay-100 duration-300 ease-in">
                            <a href="https://github.com/hassamk122" target='_blank'><Github className='size-3.5 sm:size-6'/></a></h3>
                            <h3 className="cursor-pointer text-white rounded-2xl bg-violet-500 dark:text-violet-500 dark:bg-white  dark:hover:bg-zinc-200 hover:rounded-xl p-2 transition-all delay-100 duration-300 ease-in">
                            <a href="https://www.instagram.com/hassamkiani_/?igsh=MXhsYzBvenVzamJ1dg%3D%3D#" target='_blank'><Instagram  className='size-3.5 sm:size-6'/></a></h3>
                    </div>
                </div>
            </div>
            <div>
                        <h3 className='font-Poppins text-center mt-2 sm:mt-4 text-xs sm:text-[13px] p-1 text-zinc-600 '> © Made by Muhammad Hassam</h3>
                    </div>
        </footer>
    )
}

export default Footer