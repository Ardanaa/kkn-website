import React from 'react'

const Team = () => {
  const data = [
    // { 'name': '', 'major': '', 'image': '' },
    { 'name': 'Fajar Firdaus', 'major': 'Pendidikan Agama Islam | Ketua', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780158/Kegiatan%20KKN/Profiel%20KKN%20v2/22_jwpckp.png' },
    { 'name': 'Siska Lestari', 'major': 'Pendidikan Matematika | Sekretaris', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780151/Kegiatan%20KKN/Profiel%20KKN%20v2/20_df8t17.png' },
    { 'name': 'Mutiara Sakinah', 'major': 'Pendidikan Matematika | Sekretaris', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780156/Kegiatan%20KKN/Profiel%20KKN%20v2/21_vcwilm.png' },
    { 'name': 'Hana Noviani Agustini', 'major': 'Pendidikan Agama Islam | Bendahara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780154/Kegiatan%20KKN/Profiel%20KKN%20v2/18_pbqtbd.png' },
    { 'name': 'Farah Fauziah N.F', 'major': 'Pendidikan Agama Islam | Bendahara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780156/Kegiatan%20KKN/Profiel%20KKN%20v2/19_hnqaga.png' },
    { 'name': 'Tubagus Abdul Holik', 'major': 'Ilmu Hukum | Kordiv Acara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780154/Kegiatan%20KKN/Profiel%20KKN%20v2/14_khc6qw.png' },
    { 'name': 'Firly Nuryogawati', 'major': 'Pendidikan Bahasa Inggris | Acara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780152/Kegiatan%20KKN/Profiel%20KKN%20v2/15_nhwohr.png' },
    { 'name': 'Muhammad Ardana', 'major': 'Ilmu Komputer | Acara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780150/Kegiatan%20KKN/Profiel%20KKN%20v2/17_y4w9vo.png' },
    { 'name': 'Sri Septiani', 'major': 'Pendidikan Matematika | Acara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780143/Kegiatan%20KKN/Profiel%20KKN%20v2/16_pa1pl3.png' },
    { 'name': 'Anggi Wahyyudin', 'major': 'Teknik Mesin | Kordiv PDD', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780151/Kegiatan%20KKN/Profiel%20KKN%20v2/9_tgv4pv.png' },
    { 'name': 'Risma Handayani', 'major': 'Manajemen | PDD', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780144/Kegiatan%20KKN/Profiel%20KKN%20v2/13_iq3x0j.png' },
    { 'name': 'Aisya Kamila', 'major': 'Gizi | PDD', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780147/Kegiatan%20KKN/Profiel%20KKN%20v2/12_wglrzs.png' },
    { 'name': 'Fahri Rizki', 'major': 'Teknik Mesin | PDD', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780146/Kegiatan%20KKN/Profiel%20KKN%20v2/10_c3zv7x.png' },
    { 'name': 'Arasy Zahra', 'major': 'Agribisnis | PDD', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780146/Kegiatan%20KKN/Profiel%20KKN%20v2/11_zqx8lr.png' },
    { 'name': 'Aldi Sulaeman', 'major': 'Teknik Mesin | Kordiv Humas', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780150/Kegiatan%20KKN/Profiel%20KKN%20v2/4_pfltax.png' },
    { 'name': 'Vallerina Lawrencia Tertaroza', 'major': 'Teknik Mesin | Humas', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780147/Kegiatan%20KKN/Profiel%20KKN%20v2/8_y57ykp.png' },
    { 'name': 'Annisa Az Zahra', 'major': 'Agribisnis | Humas', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780146/Kegiatan%20KKN/Profiel%20KKN%20v2/7_tqromw.png' },
    { 'name': 'Dhea Sephira', 'major': 'Pendidikan Matematika | Humas', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780146/Kegiatan%20KKN/Profiel%20KKN%20v2/5_rfmkao.png' },
    { 'name': 'Deanisa Septianingrum', 'major': 'Gizi | Humas', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780154/Kegiatan%20KKN/Profiel%20KKN%20v2/6_sjl7hl.png' },
    { 'name': 'Mohamad Bijantium Sinatria', 'major': 'Ilmu Komputer | Kordiv Logistik', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780146/Kegiatan%20KKN/Profiel%20KKN%20v2/1_vfyeil.png' },
    { 'name': 'Pebriansyah Saputra', 'major': 'Ilmu Pemerintahan | Logistik', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775352/Profile%20Team%20KKN/Pebriyansah_Saputra__vafd50.jpg' },
    { 'name': 'Moch. Teguh Raharjo', 'major': 'Ilmu Hukum | Logistik', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780154/Kegiatan%20KKN/Profiel%20KKN%20v2/2_asq2hl.png' },
    { 'name': 'Uju Pitriyani', 'major': 'Manajemen | Logistik', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661780151/Kegiatan%20KKN/Profiel%20KKN%20v2/3_hwoprn.png' },
  ];
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div class="flex flex-wrap -m-2">
          {data.map((data) =>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={data.image} />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">{data.name}</h2>
                  <p class="text-gray-500">{data.major}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Team