import React from 'react'
import logo from '../assets/logo.png'
import Button from './Button'

const Footer = () => {
  return (
    
<footer class="p-4 bg-gray-900 sm:p-6">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="" class="flex items-center">
                <img src={logo} class="mr-3 h-14" alt="KKN Logo"/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">KKN Unsika 2022</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase">Pages</h2>
                <ul class="text-gray-600">
                    <li class="mb-4">
                        <a href="" class="hover:underline">Tentang Desa</a>
                    </li>
                    <li>
                        <a href="" class="hover:underline">Kontributor</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                <ul class="text-gray-600">
                    <li class="mb-4">
                        <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Instagram</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase">Download Aplikasi Desa</h2>
                <Button name='Download disini'/>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    
</footer>

  )
}

export default Footer