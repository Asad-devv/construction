import React from 'react'
import { logo } from '../assets'
const Footer = () => {
  return (
    
<footer class="m-0 p-0 h-[40vh] bg-white  shadow dark:bg-gray-900 m">
    <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="" class="flex items-center mb-4 sm:mb-0">
                <img src={logo} class="h-8 mr-3" alt="logo" />
                <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">AL Sanbola Contracting</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm overflow-hidden text-gray-500 sm:text-center dark:text-gray-400">© 3 <a href="" class=" hover:underline">AL Sanbola Contracting™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer