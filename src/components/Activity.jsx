import React from 'react'
import ActivityData from '../data/Activity.json'

const Activity = () => {
  const data = ActivityData;
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Kegiatan Kami di Desa Cemara Jaya</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Kumpulan dokumentasi kegiatan KKN Uniska di Desa Cemarajaya Tahun 2022.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          {data.map(data =>
            <div class="xl:w-1/4 md:w-1/2 p-4 mx-auto">
              <div class="bg-gray-100 p-6 rounded-lg h-full">
                <img class="h-40 rounded min-w-[300px] md:min-w-full mx-auto object-cover object-center mb-6" src={data.image} alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{data.date}</h3>
                <p class="">{data.title}</p>
              </div>
            </div>
          ).reverse()}
        </div>
      </div>
    </section>
  )
}

export default Activity