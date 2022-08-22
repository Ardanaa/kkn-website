import React from 'react';
import imgContent from '../assets/efishery-1.png';
import Button from '../components/Button';
import wave from '../assets/wave.png';

const content = () => {
  return (
    <div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 pt-10 px-20'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl my-10'>Meningkatkan daya saing <br /> UMKM <br /> <b>Di era digital</b></h1>
          <div className='flex items-center'>
            <Button name='Baca Lebih Lanjut' />
          </div>
        </div>
        <div>
          <img className='' src={imgContent} alt="" />
        </div>
      </div>
      <img className='mb-50' src={wave} alt="" />
    </div>
  )
}

export default content;