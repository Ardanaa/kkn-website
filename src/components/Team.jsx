import React from 'react'

const Team = () => {
  const data = [
    // { 'name': '', 'major': '', 'image': '' },
    { 'name': 'Fajar Firdaus', 'major': 'Pendidikan Agama Islam | Ketua', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775348/Profile%20Team%20KKN/Fajar_Firdaus__Ketua_fy3cx7.jpg' },
    { 'name': 'Siska Lestari', 'major': 'Pendidikan Matematika | Sekretaris', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775355/Profile%20Team%20KKN/Siska_Lestari_FKIP_Sekretaris_1_fcdssw.jpg' },
    { 'name': 'Mutiara Sakinah', 'major': 'Pendidikan Matematika | Sekretaris', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775354/Profile%20Team%20KKN/Mutiara_Sakinah_PMTK_Sekretaris_2_iz5gdw.jpg' },
    { 'name': 'Hana Noviani Agustini', 'major': 'Pendidikan Agama Islam | Bendahara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775351/Profile%20Team%20KKN/Hana_Noviani_Agustini_PAI_Bendahara_pyjuru.jpg' },
    { 'name': 'Farah Fauziah N.F', 'major': 'Pendidikan Agama Islam | Bendahara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775348/Profile%20Team%20KKN/Farah_Fauziah_N.F__Bendahara_jmfxw3.jpg' },
    { 'name': 'Tubagus Abdul Holik', 'major': 'Ilmu Hukum | Kordiv Acara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775369/Profile%20Team%20KKN/Tubagus_Abdul_Holik_Ilmu_Hukum_Acara_lpjbvs.jpg' },
    { 'name': 'Firly Nuryogawati', 'major': 'Pendidikan Bahasa Inggris | Acara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775360/Profile%20Team%20KKN/Firly_Nuryogawati_rmr2xt.jpg' },
    { 'name': 'Sri Septiani', 'major': 'Pendidikan Matematika | Acara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775355/Profile%20Team%20KKN/Sri_Septiani_w0y4fc.jpg' },
    { 'name': 'Muhammad Ardana', 'major': 'Ilmu Komputer | Acara', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775354/Profile%20Team%20KKN/Muhammad_Ardana_tw4vbg.jpg' },
    { 'name': 'Anggi Wahyyudin', 'major': 'Teknik Mesin | Kordiv PDD', 'image': '' },
    { 'name': 'Risma Handayani', 'major': 'Manajemen | PDD', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775363/Profile%20Team%20KKN/Risma_Handayani_Manajemen_Pdd_t5bfe2.jpg' },
    { 'name': 'Aisya Kamila', 'major': 'Gizi | PDD', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775368/Profile%20Team%20KKN/Aisya_Kamila_Gizi_PDD_ea7pxk.jpg' },
    { 'name': 'Fahri Rizki', 'major': 'Teknik Mesin | PDD', 'image': '' },
    { 'name': 'Arasy Zahra', 'major': 'Agribisnis | PDD', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775366/Profile%20Team%20KKN/Arasy_Zahra_Qurrota_ain_id1b6r.jpg' },
    { 'name': 'Aldi Sulaeman', 'major': 'Teknik Mesin | Kordiv Humas', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775362/Profile%20Team%20KKN/Aldi_Sulaeman_tsygoh.jpg' },
    { 'name': 'Vallerina Lawrencia Tertaroza', 'major': 'Teknik Mesin | Humas', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775360/Profile%20Team%20KKN/Vallerina_Lawrencia_Tertaroza_Teknik_Mesin_dn9dcx.jpg' },
    { 'name': 'Annisa Az Zahra', 'major': 'Agribisnis | Humas', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775365/Profile%20Team%20KKN/Annisa_Az_Zahra_Humas_fjpdor.jpg' },
    { 'name': 'Dhea Sephira', 'major': 'Pendidikan Matematika | Humas', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775354/Profile%20Team%20KKN/Dhea_Sephira_Pendidikan_Matematika_Humas_v2n1v3.jpg' },
    { 'name': 'Deanisa Septianingrum', 'major': 'Gizi | Humas', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775367/Profile%20Team%20KKN/Deanisa_S_Gizi_HUMAS_jp3lxw.jpg' },
    { 'name': 'Mohamad Bijantium Sinatria', 'major': 'Ilmu Komputer | Kordiv Logistik', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775361/Profile%20Team%20KKN/Mohammad_Bijantium_Sinatria_ep1xxi.jpg' },
    { 'name': 'Pebriansyah Saputra', 'major': 'Ilmu Pemerintahan | Logistik', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775352/Profile%20Team%20KKN/Pebriyansah_Saputra__vafd50.jpg' },
    { 'name': 'Moch. Teguh Raharjo', 'major': 'Ilmu Hukum | Logistik', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775351/Profile%20Team%20KKN/Moch_Teguh_Ilmu_Hukum_Logistik_oi0rg0.jpg' },
    { 'name': 'Uju Pitriyani', 'major': 'Manajemen | Logistik', 'image': 'https://res.cloudinary.com/ardanacloud/image/upload/v1661775356/Profile%20Team%20KKN/Uju_Pitriyani_Manajemen_Logistik_rpvjso.jpg' },
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