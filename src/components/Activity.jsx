import React from 'react'

const Activity = () => {
  const data = [
    { 'title': 'Observasi tempat pelaksanaan KKN dan Rapat perencanaan program kerja', 'date': '30 Juli 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661777225/Kegiatan%20KKN/WhatsApp_Image_2022-07-30_at_3.40.35_PM_wrmh2t.jpg' },
    { 'title': 'Pelaksanaan program kerja rapat minggon di desa', 'date': '03 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661777661/Kegiatan%20KKN/WhatsApp_Image_2022-08-03_at_10.56.43_AM_lrasfh.jpg' },
    { 'title': 'Pelaksanaan program kerja mengajar di SD Cemarajaya 1', 'date': '04 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661777961/Kegiatan%20KKN/WhatsApp_Image_2022-08-04_at_12.37.25_PM_wl5zro.jpg' },
    { 'title': 'Kegiatan rapat bersama karang taruna untuk pelaksaan Hut RI', 'date': '05 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661778049/Kegiatan%20KKN/WhatsApp_Image_2022-08-05_at_3.24.44_PM_pmqmrm.jpg' },
    { 'title': 'Kegiatan rapat bersama kepala sekolah di SD Cemarajaya 1', 'date': '05 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779425/Kegiatan%20KKN/WhatsApp_Image_2022-08-05_at_3.25.42_PM_scculh.jpg' },
    { 'title': 'Menjalankan observasi kepada kepala dusun di desa cemarajaya mengenai umkm nya', 'date': '06 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779366/Kegiatan%20KKN/WhatsApp_Image_2022-08-06_at_12.40.35_PM_nmyvfe.jpg' },
    { 'title': 'Menjalankan program kerja bersih- bersih di desa', 'date': '06 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779575/Kegiatan%20KKN/WhatsApp_Image_2022-08-06_at_12.41.19_PM_m3kghb.jpg' },
    { 'title': 'Pelaksanaan program kerja rapat minggon di desa', 'date': '10 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779331/Kegiatan%20KKN/WhatsApp_Image_2022-08-10_at_7.16.50_PM_m3y3zv.jpg' },
    { 'title': 'Pelaksanaan program kerja senam di desa', 'date': '10 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779307/Kegiatan%20KKN/WhatsApp_Image_2022-08-10_at_7.16.26_PM_pfx3u8.jpg' },
    { 'title': 'Pelaksanaan program kerja mengajar di SD Cemarajaya 1', 'date': '11 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779242/Kegiatan%20KKN/WhatsApp_Image_2022-08-11_at_5.56.16_PM_1_ek20un.jpg' },
    { 'title': 'Observasi ke tempat umkm', 'date': '11 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779219/Kegiatan%20KKN/WhatsApp_Image_2022-08-11_at_5.56.21_PM_bhwos5.jpg' },
    { 'title': 'Pelaksanaan program kerja mengajar di SD Cemarajaya 1', 'date': '12 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779194/Kegiatan%20KKN/WhatsApp_Image_2022-08-12_at_5.40.23_PM_do0jyw.jpg' },
    { 'title': 'Membantu kegiatan pelayanan posyandu di dusun pisangan Desa Cemarajaya', 'date': '13 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779114/Kegiatan%20KKN/WhatsApp_Image_2022-08-13_at_6.42.22_PM_a3n4t0.jpg' },
    { 'title': 'Membuat produk umkm', 'date': '13 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779084/Kegiatan%20KKN/WhatsApp_Image_2022-08-13_at_6.58.03_PM_ev15xy.jpg' },
    { 'title': 'Membantu kegiatan pelayanan posyandu flamboyan 3 di dusun Cemarajaya II Desa Cemarajaya', 'date': '15 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779057/Kegiatan%20KKN/WhatsApp_Image_2022-08-15_at_12.54.25_PM_avyr17.jpg' },
    { 'title': 'Pelaksanaan kegiatan lomba HUT RI ke 77 Di Desa Cemarajaya', 'date': '17 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779030/Kegiatan%20KKN/WhatsApp_Image_2022-08-17_at_7.48.50_PM_1_mbtcxv.jpg' },
    { 'title': 'Pelaksanaan program kerja mengajar di SD Cemarajaya 1', 'date': '18 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661779009/Kegiatan%20KKN/WhatsApp_Image_2022-08-18_at_2.59.18_PM_1_lw191c.jpg' },
    { 'title': 'Kegiatan rapat untuk hut jabar', 'date': '18 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661778986/Kegiatan%20KKN/WhatsApp_Image_2022-08-18_at_3.00.40_PM_1_x4op5s.jpg' },
    { 'title': 'Observasi ke tempat usaha ikan asin', 'date': '19 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661778870/Kegiatan%20KKN/WhatsApp_Image_2022-08-19_at_2.30.03_PM_1_ppbrdw.jpg' },
    { 'title': 'Kegiatan hut ri di SDN cemarajaya 1', 'date': '19 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661778899/Kegiatan%20KKN/WhatsApp_Image_2022-08-19_at_2.29.56_PM_1_maeqgy.jpg' },
    { 'title': 'Kegiatan rapat mengenai aplikasi dan website', 'date': '20 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661778842/Kegiatan%20KKN/WhatsApp_Image_2022-08-20_at_7.03.35_PM_1_inaxja.jpg' },
    { 'title': 'Kegiatan masak untuk umkm produk', 'date': '20 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661778820/Kegiatan%20KKN/WhatsApp_Image_2022-08-20_at_7.05.20_PM_1_tnnzvr.jpg' },
    { 'title': 'Pelaksanaan program kerja rapat minggon di desa', 'date': '24 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661778787/Kegiatan%20KKN/WhatsApp_Image_2022-08-24_at_3.30.02_PM_2_l0mw2h.jpg' },
    { 'title': 'Pelaksanaan program kerja mengajar di SD Cemarajaya 1', 'date': '25 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661778739/Kegiatan%20KKN/WhatsApp_Image_2022-08-25_at_5.19.48_PM_2_utd7oz.jpg' },
    { 'title': 'Kegiatan observasi di umkm desa cemarajaya', 'date': '25 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661778692/Kegiatan%20KKN/WhatsApp_Image_2022-08-25_at_5.20.17_PM_1_vnesq1.jpg' },
    { 'title': 'Kegiatan observasi di umkm desa cemarajaya', 'date': '26 Agustus 2022', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661778668/Kegiatan%20KKN/WhatsApp_Image_2022-08-26_at_11.18.13_AM_1_aflpnw.jpg' },
    // { 'title': '', 'date': '', 'image': '' },

  ]
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Kegiatan Kami di Desa Cemara Jaya</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          {data.map(data =>
            <div class="xl:w-1/4 md:w-1/2 p-4 mx-auto">
              <div class="bg-gray-100 p-6 rounded-lg h-full">
                <img class="h-40 rounded min-w-[320px] md:min-w-full mx-auto object-cover object-center mb-6" src={data.image} alt="content" />
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