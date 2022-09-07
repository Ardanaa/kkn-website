import React from 'react'
import imgContent from '../assets/appBG.png'
import kantorDesa from '../assets/kantorDesa.jpeg'
import imgContent2 from '../assets/app.png'
import Button from '../components/Button'
import Card from '../components/Card'
import wave from '../assets/wave.png'
import background2 from "../assets/background-2.jpg"
import mengajar from "../assets/mengajar.jpeg"
import rapat from "../assets/rapat.jpeg"
import { Link } from 'react-router-dom'

const content = () => {
  return (
    <div>
      <div className='flex flex-col-reverse md:flex-row gap-4 md:px-20 pt-20 px-10 justify-between 3xl:justify-center'>
        <div className='flex flex-col justify-center w-full 3xl:w-1/3'>
          <h1 className='md:text-xl text-xl mt-10 mb-5'>
            Desa Cemarajaya terbentuk dalam proses yang panjang sejak jaman Kolonial Belanda dahulu, jaman perang kemerdekaan, serta jaman kemerdekaan sekarang, sehingga terbentuk sebuah komunitas dengan karakter sosial, budaya, dan ekonomi yang membumi dalam wilayah yang sekarang secara administratif disebut Desa Cemarajaya.
          </h1>
          <div className='flex items-center justify-center'>
            <Link to='/about'>
              <Button name='Baca Lebih Lanjut' />
            </Link>
          </div>
        </div>
        <div className='w-full 3xl:w-1/3 flex justify-center'>
          <img className='w-[600px]' src={kantorDesa} alt="" />
        </div>
      </div>
      <img className='mb-50 w-full' src={wave} alt="" />

      <div className='flex flex-col-reverse md:flex-row gap-4 pt-10 md:p-20 p-10 justify-between 3xl:justify-center bg-[#A57D10]'>
        <div className='flex flex-col justify-center w-full 3xl:w-1/3'>
          <h1 className='md:text-3xl text-xl mt-10 mb-2 font-bold'>
            Memberi peluang untuk UMKM <br />agar lebih dikenal dalam masyarakat
          </h1>
          <h1 className='md:text-lg text-base '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus sapiente assumenda obcaecati dolores voluptates ullam optio rerum beatae consectetur quos, ex ipsum. Neque omnis ab fugiat aliquid cumque fugit laborum!
            Voluptatem aliquid error recusandae earum quas debitis nam quo ullam ab autem deserunt laborum officia animi voluptas magnam reiciendis, commodi, quisquam inventore? Praesentium debitis ex vero amet rem nemo minus!
          </h1>
        </div>
        <div className='w-full 3xl:w-1/3 flex justify-center'>
          <img className='w-[600px]' src={imgContent2} alt="" />
        </div>
      </div>

      <div className='relative md:h-[600px]'>
        <img src={background2} className='h-full w-full inset-0 object-cover absolute' alt="" />
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        <div className="flex flex-col justify-center h-full relative">
          <h1 className="text-center mt-[100px] text-5xl font-bold ">
            Kontribusi Kami Untuk Desa Cemara Jaya
          </h1>
          <div className='flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto px-[50px] md:px-0 3xl:justify-center gap-12 py-[50px]'>
            <Card img={mengajar} title='Dalam Bidang Pendidikan' text='Membantu tenaga pengajar di Sekolah Dasar (SD) dalam kegiatan belajar mengajar.' />
            <Card img={rapat} title='Untuk Kemajuan Desa' text='Melakukan rapat rutin pada setiap minggunya untuk mengetahui kebutuhan desa.' />
            <Card img={imgContent} title='Untuk UMKM' text='Membuat aplikasi sebagai media promotor UMKM agar lebih dikenal dalam masyarakat.' />
          </div>
        </div>
      </div>


    </div>
  )
}

export default content;