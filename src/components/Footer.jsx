import React from 'react'
import { Link } from 'react-router-dom'
import logoDesaWhite from '../assets/logoDesaWhite.png'
import Button from './Button'

const Footer = () => {
    return (

        <footer class="p-4 bg-gray-900 sm:p-6">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="" class="flex items-center">
                        <img src={logoDesaWhite} class="mr-3 h-14 lg:h-40" alt="KKN Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
                    </a>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase">Pages</h2>
                        <ul class="text-gray-600">
                            <Link to='/'>
                                <li class="mb-4">
                                    <p class="hover:underline">Home</p>
                                </li>
                            </Link>
                            <Link to='/about'>
                                <li class="mb-4">
                                    <p class="hover:underline">Tentang Desa</p>
                                </li>
                            </Link>
                            <Link to='/contributor'>
                                <li class="mb-4">
                                    <p class="hover:underline">Kontributor</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                        <ul class="text-gray-600">
                            <li class="mb-4">
                                <a href="https://www.instagram.com/kknunsika22_cemarajaya/" rel='noreferrer' target='_blank' class="hover:underline ">Instagram KKN</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://instagram.com/desa_cemarajaya/" rel='noreferrer' target='_blank' class="hover:underline ">Instagram Desa </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase">Download Aplikasi Desa</h2>
                        <a href='https://drive.google.com/file/d/18ZB_WXe9iNxkXa1dGKIgIn8FcxenFJjz/view?usp=sharing'>
                            <Button name='Download disini' />
                        </a>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        </footer>

    )
}

export default Footer