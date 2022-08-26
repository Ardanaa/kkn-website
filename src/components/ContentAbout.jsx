import React from 'react'
import wave from '../assets/wave.png'
import peta from "../assets/peta-desa.png"

const ContentAbout = () => {
  return (
    <div>
      <div className='container mx-auto md:w-[50%] w-[80%] text-justify pt-10  '>
        <p>Cemarajaya berasal dari 2 (dua) kata  yaitu ; kata “Cemara” dan kata “Jaya” yang dimaksud kata “cemara” adalah mengandung makna seikat rambut panjang yang dipergunakan untuk membuat sanggul. Yang dimaksud Sanggul tersebut Adalah milik seorang putri cina pada zaman Pangeran Samudera (Sekitar abad ke-5 Tahun 674 Masehi) ujar “Bpk Sutarwo” (Sesepuh di Desa Cemarajaya). Di Dusun Pisangan terdapat sebuah “Awisan/Sumber air”  yang konon dibuat/dibangun oleh syekh Kuwu Sangkan/Pangeran Cakra Buana, Dusun Pisangan berada di wilayah Desa Cemarajaya dan juga Buyut Pal/Batas yang konon ditancapkan oleh oleh syekh Kuwu Sangkan/Pangeran Cakra Buana. Sedangkan Kata “Jaya” yang berarti subur, makmur dan Sentosa menurut bp Tan Danlih Sejarahwan Desa Cemarajaya juga Mengatakan Desa Cemarajaya adalah asal mulanya sebuah Kampung atau Desa yang diberi nama Cemarajaya.
        </p>
      </div>
      <img className='mb-50' src={wave} alt="" />

      <div className='flex flex-col-reverse md:flex-row gap-4 md:px-20 px-10 justify-between bg-[#A57D10]'>
        <div className='flex flex-col justify-center w-full'>
          <h1 className='md:text-3xl text-xl mt-10 mb-2 font-bold'>
            Demografi
          </h1>
          <h1 className='md:text-lg text-base '>
            Terletak / berada disebelah Utara   dari kota Kecamatan CIBUAYA  dengan jarak 6,5 km dan dari Kota Kabupaten Karawang 32 km, berbatasan dengan Desa Jayamulya disebelah selatan, berbatasan dengan Desa Sungaibuntu disebelah timur, berbatasan dengan Desa Jayamulya disebelah Barat dan berbatasan dengan Laut Jawa disebelah Utara.
          </h1>
        </div>
        <div className='flex w-full items-center justify-center'>
          <img className='w-500px]' src={peta} alt="" />
        </div>
      </div>

    </div>
  )
}

export default ContentAbout