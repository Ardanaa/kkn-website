import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Button from './Button'

const Footer = () => {
    return (

        <footer class="p-4 bg-gray-900 sm:p-6">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="" class="flex items-center">
                        <img src={logo} class="mr-3 h-14" alt="KKN Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">KKN Unsika 2022</span>
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
                                <a href="https://www.instagram.com/kknunsika22_cemarajaya/" target='_blank' class="hover:underline ">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase">Download Aplikasi Desa</h2>
                        <a href='https://doc-08-60-docs.googleusercontent.com/docs/securesc/i87k325t80kqh0mfbmu3us8skrcln79o/6ieo6etuidf3pp227cnteqe6mq7iie9b/1661516325000/17120867478208595539/17120867478208595539/18ZB_WXe9iNxkXa1dGKIgIn8FcxenFJjz?e=download&ax=AI9vYm44soHmANQisdPcoe4CnJcysnb_WQbiC8JFjYq9SkyoQXLk5tnqL_ROtFWYMQgiZKY9VDnoDSFOhcKu7eKlMD8rrIcFfpysVMXUhbLiaUcnWFfqndyArwor7vjgfP4BmSNWtlHL4_PC8isDl5dFMufFsxbz2Bc-5rjJYW6CFRHSQQH0FNZmZRWqMdPgHbeWpSIkfaFtYGvrF4Hp2iWlq0qV2bsXNa6Znp4ZfJ0SUB308W1QmqNELEB6823CzqtXSx1l7Dq-T_kSonj0xvcKjcQoBpRg3DuB0uvxZp2mx_RNr815B9i93mkWAoNKbmGmndRnsWx3KBz9Yr1-eglM4ze8LfVmMHHNTzlNyza1OcAyyL0hABwl6RJdoe72D3CNB7TMokoTZeDHWZxcJwl136IWhoUrU6Jfj9FWEN9DE7ib7wbpXP-Wz10YhmwEnj6aCNctVyAZTwGr-tF72epgmeKx2dWCjn_AiP_GaGfBbgrWd9RA6z5u4AhO0vZBdiq9Hc5whCZmb1cSusElQtWEGYTMU6mRKEL3sOOjR12EYVfy17LzdDYf-ZGNdO3fNR5SWD4lidMb4F1xVolzPnOLRA90S2seahbhZU7PryhgOpaVrbKxm2CbBkzNIEjXr_5kOTqMpBSHUPtCt2RIedkmIo4o_x4MVRqw0p9BNDt-dt_la0sKzThNn9FE6jJvGX-mHzVsM970-Qd_luEOhNRRWOJBiO3ysqYtW493U-UtZ7sir_1OCGOi2pw&uuid=eb6b2b3c-063b-4460-8392-e8f7a4d8c268&authuser=0&nonce=4vm2hj8rf1akk&user=17120867478208595539&hash=d385phvnt4ruq9qson3sa03r712s545s'>
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