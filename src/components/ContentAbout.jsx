import React from 'react'
import wave from '../assets/wave.png'
import peta from "../assets/peta-desa.png"
import strukturDesa from "../assets/strukturDesa.png"
import { IGEmbed } from 'react-ig-embed';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const ContentAbout = () => {
  return (
    <div>
      {/* tentang desa start */}
      <div className='container mx-auto md:w-[50%] w-[80%] pt-10 text-justify '>
        <h1 className='text-center font-bold'>Tentang Desa</h1>
        <br />
        <p className='leading-relaxed indent-8 text-gray-900'>Cemarajaya merupakan desa dengan luas 1141 Ha yang terdapat penduduk berjumlah sekitar 5000 jiwa. Masyarakat ini tersebar di 6 dusun, yaitu Cemara 1 selatan, cemara 1 utara, cemara 2 (Sekong), Pisangan, dan cemarajaya.
        </p>
        <p className='leading-relaxed indent-8 text-gray-900'>
          Masyarakat desa cemarajaya umumnya memiliki mata pencaharian sebagai buruh (tambang, nelayan, petani). Pada umumnya UMKM yang ada di desa ini masih berskala mikro dan menengah, usaha yang ada masih belum memanfaatkan digital sebagai bentuk peningkatan daya saing dan usaha pemasaran produknya. Sehingga UMKM yang ada masih melakukan perdagangan langsung antara penjual dan pembeli.
        </p>
        <p className='leading-relaxed indent-8 text-gray-900'>
          Sebagai usaha membantu UMKM, desa menyediakan BUMDES (Badan Usaha Milik Desa) yang menyewakan perahu-perahu kepada nelayan dengan harga sewa 10.000/per hari. Namun kurangnya SDM yang ada BUMDES saat ini masih belum berkembang.
        </p>
        <p className='leading-relaxed indent-8 text-gray-900'>
          Desa cemarajaya yang berbatasan dengan laut jawa, awalnya memiliki pantai-pantai yang menjadi barometer wisata, namun sejak 2007 terjadi abrasi dan banjir rob yang menghancurkan rumah-rumah warga dan mengkikis bagian pantai dan membanjir daerah di sekitar pantai.
          Ada banyak upaya yang dilakukan pemerintah desa untuk menjadikan pantai di desa ini sebagai tempat wisata. Seperti pemasangan batu-batu dipinggir pantai, dan penanaman tanaman-tanaman laut. Diharapkan 3 sampai 4 tahun mendatang dasa cemarajaya dapat bangkit kembali dalam aspek wisata pantai.
        </p>
      </div>
      {/* tentang desa end */}
      <img className='w-full' src={wave} alt="" />

      {/* visi misi start */}
      <section class="text-black-600 body-font bg-[#A57D10]">
        <div class="container flex flex-wrap px-4 pb-20 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Visi</h1>
            <p class="leading-relaxed text-base">
              Terwujudnya masyarakat desa yang mandiri Makmur, agamis,sehat dan keadilan, melalui sektor pertanian, tambak, nelayan dan Pendidikan serta mewujudkandesa wisata madani yang didukung oleh sarana prasarana yang memadai serta aparatur pemerintah yang memadai serta aparatur pemerintah yang handal berlandaskan iman dan taqwa.
            </p>
          </div>
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Misi</h1>
            <ul class="mb-1">
              <li class="mb-1">
                1. Meningkatkan sarana prasarana disegala bidang.
              </li>
              <li class="mb-1">
                2. Noromalisasi sarana dan prasarana disegala bidang.
              </li>
              <li class="mb-1">
                3. Membangun sarana prasarana yang belum ada disegala bidang.
              </li>
              <li class="mb-1">
                4. Membangun desa wisata yang humanis.
              </li>
              <li class="mb-1">
                5. Meningkatkan hasil perekonomian masyarakat.
              </li>
              <li class="mb-1">
                6. Meningkatkan sumber daya manusia disegala bidang.
              </li>
              <li class="mb-1">
                7. Meningkatkan tarap Kesehatan masyarakat.
              </li>
              <li class="mb-1">
                8. Meningkatkan pendapatan masyarakat.
              </li>
              <li class="mb-1">
                9. Menyelenggarakan urusan pemerintah secara professional, tertib administrasi dan keuangan.
              </li>
              <li class="mb-1">
                10. Meningkatkan tingkat keimanan dan ketaqwaan masyarakat.
              </li>
              <li class="mb-1">
                11. Meningkatkan kesadaran hukum dan berbudi pekerti mulia.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* visi misi end */}

      {/* struktur desa start */}
      <div className='md:p-20 p-10'>
        <img className='mx-auto' src={strukturDesa} alt="" />
      </div>
      {/* struktur desa end */}

      {/* data desa start */}
      <section class="text-gray-600 body-font overflow-x-auto min-w-[400px]">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Data Kependudukan Desa</h1>
              <Tabs id="custom-animation" value="sejarah">
                <TabsHeader className='z-0'>
                  <Tab value="sejarah">
                    Desa
                  </Tab>
                  <Tab value="kependudukan">
                    Penduduk
                  </Tab>
                  <Tab value="pendidikan">
                    Pendidikan
                  </Tab>
                  <Tab value="keagamaan">
                    Keagamaan
                  </Tab>
                </TabsHeader>
                <TabsBody
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  <TabPanel value="sejarah">
                    <p className='leading-relaxed indent-8'>
                      Desa Cemarajaya Kecamatan Cibuaya Kabupaten Karawang Propinsi Jawa Barat, Berdiri Pada Tahun 1979 adalah Desa Pemekaran dari 2 (dua) Desa Pokok yaitu Desa Cibuaya dan Desa Sungai Buntu yang terdiri beberapa dusun diantaranya :
                    </p>
                    <ol>
                      <li>1. Dusun Cemara I Selatan</li>
                      <li>2. Dusun Cemara I Utara</li>
                      <li>3. Dusun Cemara II</li>
                      <li>4. Dusun Pisangan</li>
                      <li>5. Dusun Patikus</li>
                      <li>6. Dusun Jayamulya</li>
                    </ol>
                    <p className='leading-relaxed indent-8'>
                      Kemudian pada tahun 1983 Desa Cemarajaya dimekarkan lagi menjadi 2 (dua) Desa Yaitu Desa Jaya Mulya dan Desa Pokok Desa Cemarajaya Kemudian berdasarkan dari Pemekaran pada tahun tersebut diatas secara otomatis dari dusun yang terdaftar didesa Cemarajaya sebanyak 6 (enam) Dusun dipecah mengkuti Desa Pemekaran diantaranya:
                    </p>
                    <ol>
                      <li>1. Dusun Cemara I Selatan</li>
                      <li>2. Dusun Cemara I Utara</li>
                      <li>3. Dusun Cemara II</li>
                      <li>4. Dusun Pisangan</li>
                      <li>5. Dusun Patikus</li>
                      <li>6. Dusun Sekong</li>
                      <li>7. Dusun Mekarjaya</li>
                    </ol>

                    <p className='text-center font-bold mb-5'>Sejarah Kepemimpinan Desa</p>
                    <div className="overflow-x-auto">
                      <table className="table-fixed min-w-[720px] w-full border-spacing-5">
                        <thead>
                          <tr className='border border-slate-600'>
                            <th></th>
                            <th className='border border-slate-600'>Nama</th>
                            <th className='border border-slate-600'>Periode Jabatan</th>
                            <th className='border border-slate-600'>Ket</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className='border border-slate-700'>1</th>
                            <td className='border border-slate-700'>M. SARKAT</td>
                            <td className='border border-slate-700 text-center'>1979 s/d 1983</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>2</th>
                            <td className='border border-slate-700'>IYANG BACHTIAR</td>
                            <td className='border border-slate-700 text-center'>1983 s/d 1984</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>3</th>
                            <td className='border border-slate-700'>ACHMAD .B</td>
                            <td className='border border-slate-700 text-center'>1984 s/d 1989</td>
                            <td className='border border-slate-700 text-center'>KADES</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>4</th>
                            <td className='border border-slate-700'>M.KAYUL</td>
                            <td className='border border-slate-700 text-center'>1989 s/d 1992</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>5</th>
                            <td className='border border-slate-700'>E. IDING</td>
                            <td className='border border-slate-700 text-center'>1992 s/d 1993</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>6</th>
                            <td className='border border-slate-700'>ENDANG JUHANA</td>
                            <td className='border border-slate-700 text-center'>1993 -+ Enam Bulan</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>6</th>
                            <td className='border border-slate-700'>ENDANG JUHANA</td>
                            <td className='border border-slate-700 text-center'>1993 -+ Enam Bulan</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>7</th>
                            <td className='border border-slate-700'>MUBAYAN . AK</td>
                            <td className='border border-slate-700 text-center'>1993 s/d 1994</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>8</th>
                            <td className='border border-slate-700'>WENDA CARYA</td>
                            <td className='border border-slate-700 text-center'>1994 s/d 2002</td>
                            <td className='border border-slate-700 text-center'>KADES</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>9</th>
                            <td className='border border-slate-700'>ACON K. SOMANTRI</td>
                            <td className='border border-slate-700 text-center'>Lebih Kurang 2 bulan</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>10</th>
                            <td className='border border-slate-700'>DADI MARYADI</td>
                            <td className='border border-slate-700 text-center'>2002 s/d 2008</td>
                            <td className='border border-slate-700 text-center'>KADES</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>11</th>
                            <td className='border border-slate-700'>ENDI SUHENDI</td>
                            <td className='border border-slate-700 text-center'>Lebih Kurang 2 bulan</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>12</th>
                            <td className='border border-slate-700'>YONGLIM SUPARDI</td>
                            <td className='border border-slate-700 text-center'>2008 s/d 2014</td>
                            <td className='border border-slate-700 text-center'>KADES</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>13</th>
                            <td className='border border-slate-700'>ENDI SUHENDI</td>
                            <td className='border border-slate-700 text-center'>Lebih Kurang 2 bulan</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>14</th>
                            <td className='border border-slate-700'>YONGLIM SUPARDI</td>
                            <td className='border border-slate-700 text-center'>2014 s/d 2021</td>
                            <td className='border border-slate-700 text-center'>KADES</td>
                          </tr>
                          
                          <tr>
                            <th className='border border-slate-700'>15</th>
                            <td className='border border-slate-700'>ENDI SUHENDI</td>
                            <td className='border border-slate-700 text-center'>2021 Lebih Kurang 2 bulan</td>
                            <td className='border border-slate-700 text-center'>PJS</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>16</th>
                            <td className='border border-slate-700'>RUDI CANDIA</td>
                            <td className='border border-slate-700 text-center'>2021 s/d 2027</td>
                            <td className='border border-slate-700 text-center'>KADES</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                </TabsBody>

                <TabsBody
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  <TabPanel value="kependudukan">
                    <p className='leading-relaxed indent-8'>
                      Jumlah penduduk Desa Cemarajaya berdasarkan data terakhir hasil sensus/coklit 2021 tercatat sebanyak 5175 Jiwa.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="table-fixed min-w-[720px] w-full border-spacing-5">
                        <thead>
                          <tr className='border border-slate-600'>
                            <th></th>
                            <th className='border border-slate-600'>Dusun</th>
                            <th className='border border-slate-600'>KK</th>
                            <th className='border border-slate-600'>Laki-laki</th>
                            <th className='border border-slate-600'>Perempuan</th>
                            <th className='border border-slate-600'>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className='border border-slate-700'>1</th>
                            <td className='border border-slate-700'>Cemara I Utara</td>
                            <td className='border border-slate-700 text-center'>181</td>
                            <td className='border border-slate-700 text-center'>329</td>
                            <td className='border border-slate-700 text-center'>317</td>
                            <td className='border border-slate-700 text-center'>646</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>2</th>
                            <td className='border border-slate-700'>Cemara I Selatan</td>
                            <td className='border border-slate-700 text-center'>243</td>
                            <td className='border border-slate-700 text-center'>491</td>
                            <td className='border border-slate-700 text-center'>492</td>
                            <td className='border border-slate-700 text-center'>983</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>3</th>
                            <td className='border border-slate-700'>Cemara II Utara</td>
                            <td className='border border-slate-700 text-center'>227</td>
                            <td className='border border-slate-700 text-center'>400</td>
                            <td className='border border-slate-700 text-center'>366</td>
                            <td className='border border-slate-700 text-center'>766</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>4</th>
                            <td className='border border-slate-700'>Cemara II Selatan</td>
                            <td className='border border-slate-700 text-center'>301</td>
                            <td className='border border-slate-700 text-center'>539</td>
                            <td className='border border-slate-700 text-center'>540</td>
                            <td className='border border-slate-700 text-center'>1079</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>5</th>
                            <td className='border border-slate-700'>Pisangan</td>
                            <td className='border border-slate-700 text-center'>258</td>
                            <td className='border border-slate-700 text-center'>453</td>
                            <td className='border border-slate-700 text-center'>430</td>
                            <td className='border border-slate-700 text-center'>883</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>6</th>
                            <td className='border border-slate-700'>Sekong</td>
                            <td className='border border-slate-700 text-center'>342</td>
                            <td className='border border-slate-700 text-center'>382</td>
                            <td className='border border-slate-700 text-center'>354</td>
                            <td className='border border-slate-700 text-center'>736</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'></th>
                            <th className='border border-slate-700'>Jumlah</th>
                            <th className='border border-slate-700'>1552</th>
                            <th className='border border-slate-700'>2594</th>
                            <th className='border border-slate-700'>2499</th>
                            <th className='border border-slate-700'>5093</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                </TabsBody>

                <TabsBody
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  <TabPanel value="pendidikan">
                    <p className='indent-8'>
                      Pendidikan merupakan salah satu modal dasar pembangunan, sehingga pendidikan adalah sebuah inventasi (modal) dimasa yang akan datang.
                    </p>
                    <p className='indent-8'>
                      Untuk memenuhi tuntutan masyarakat akan kebutuhan pendidikan kami telah berupaya mempasilitasikan sarana dan prasarana pendidikan baik formal maupun non formal.
                    </p>
                    <p className='indent-8'>
                      Selain pendidikan formal kami juga memprogramkan pendidikan non formal yang bertujuan untuk memberikan keterampilan kepada warga masyarakat melalui pelatihan-pelatihan sehingga dapat menciptakan lapangan kerja dan dapat menambah pendpatan keluarga.
                      Di Desa Cemarajaya jumlah guru dan murid setiap tahunnya mengalami peningkatan
                    </p>
                    <p className='text-center font-bold mt-5'>
                    Data guru dan murid Tahun Ajaran 2021/2022
                    </p>
                    <div className="overflow-x-auto">
                      <table className="table-fixed min-w-[720px] w-full border-spacing-5">
                        <thead>
                          <tr className='border border-slate-600'>
                            <th></th>
                            <th className='border border-slate-600'>Uraian</th>
                            <th className='border border-slate-600'>PAUD</th>
                            <th className='border border-slate-600'>TK/RA</th>
                            <th className='border border-slate-600'>SD/MI</th>
                            <th className='border border-slate-600'>PKBM</th>
                            <th className='border border-slate-600'>PONPES</th>
                            <th className='border border-slate-600'>SLTA</th>
                            <th className='border border-slate-600'>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className='border border-slate-700'>1</th>
                            <td className='border border-slate-700'>Guru</td>
                            <td className='border border-slate-700 text-center'>7</td>
                            <td className='border border-slate-700 text-center'>6</td>
                            <td className='border border-slate-700 text-center'>24</td>
                            <td className='border border-slate-700 text-center'>0</td>
                            <td className='border border-slate-700 text-center'>2</td>
                            <td className='border border-slate-700 text-center'>0</td>
                            <td className='border border-slate-700 text-center'>39</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>2</th>
                            <td className='border border-slate-700'>Murid</td>
                            <td className='border border-slate-700 text-center'>127</td>
                            <td className='border border-slate-700 text-center'>234</td>
                            <td className='border border-slate-700 text-center'>8025</td>
                            <td className='border border-slate-700 text-center'>0</td>
                            <td className='border border-slate-700 text-center'>125</td>
                            <td className='border border-slate-700 text-center'>0</td>
                            <td className='border border-slate-700 text-center'>1311</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className='text-center font-bold mt-5'>
                    Jumlah Penduduk Tingkat Pendidikan
                    </p>
                    <div className="overflow-x-auto">
                      <table className="table-fixed min-w-[720px] w-full border-spacing-5">
                        <thead>
                          <tr className='border border-slate-600'>
                            <th></th>
                            <th className='border border-slate-600'>Pendidikan</th>
                            <th className='border border-slate-600'>Tahun 2020</th>
                            <th className='border border-slate-600'>Tahun 2021</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className='border border-slate-700'>1</th>
                            <td className='border border-slate-700'>Strata 2</td>
                            <td className='border border-slate-700 text-center'>1</td>
                            <td className='border border-slate-700 text-center'>0</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>2</th>
                            <td className='border border-slate-700'>D.4 / Strata 1</td>
                            <td className='border border-slate-700 text-center'>0</td>
                            <td className='border border-slate-700 text-center'>0</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>3</th>
                            <td className='border border-slate-700'>D.3 / S. Muda</td>
                            <td className='border border-slate-700 text-center'>0</td>
                            <td className='border border-slate-700 text-center'>0</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>4</th>
                            <td className='border border-slate-700'>Strata 2</td>
                            <td className='border border-slate-700 text-center'>1</td>
                            <td className='border border-slate-700 text-center'>0</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>5</th>
                            <td className='border border-slate-700'>SLTA/Sedrajat</td>
                            <td className='border border-slate-700 text-center'>123</td>
                            <td className='border border-slate-700 text-center'>147</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>6</th>
                            <td className='border border-slate-700'>SLTP/Sedrajat</td>
                            <td className='border border-slate-700 text-center'>201</td>
                            <td className='border border-slate-700 text-center'>232</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>7</th>
                            <td className='border border-slate-700'>Tamat SD/Sederajat</td>
                            <td className='border border-slate-700 text-center'>309</td>
                            <td className='border border-slate-700 text-center'>323</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>1</th>
                            <td className='border border-slate-700'>Belum Tamat SD</td>
                            <td className='border border-slate-700 text-center'>825</td>
                            <td className='border border-slate-700 text-center'>825</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>1</th>
                            <td className='border border-slate-700'>Belum Sekolah</td>
                            <td className='border border-slate-700 text-center'>157</td>
                            <td className='border border-slate-700 text-center'>201</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'></th>
                            <th className='border border-slate-700'>Jumlah</th>
                            <th className='border border-slate-700 text-center'>1616</th>
                            <th className='border border-slate-700 text-center'>1728</th>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                </TabsBody>

                <TabsBody
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  <TabPanel value="keagamaan">
                    <p className='indent-8'>
                      Desa cemarajaya menggambarkan eratnya toleransi dan kerukunan antar umat beragama. Masyarakat desa dengan latar belakang agama dan budaya berbeda dapat hidup nyaman berdampingan. Terdapat tiga agama yang menyebar di desa ini yaitu Islam, Budha, Kristen, dan Konghucu dengan persentase 87% beragama muslim dan 13% non muslim. Desa yang berada di pinggiran wilayah utara karawang ini turut menyediakan tempat beribadah bagi warganya, yang diantaranya terdapat 4 Masjid, 1 Vihara, 4 gereja dan lebih dari 20 mushola. Perbedaan agama, ras dan budaya di desa cemarajaya tidak pernah menimbulkan benturan dan perselisihan sehingga sering sekali desa ini dipergunakan untuk penelitian dan study banding.
                    </p>
                    <p className='indent-8'>
                      Dalam pembinaan kehidupan beragama telah menunjukan keberhasilan terutama dalam menumbuhkembangkan sarana tempat peribadatan, terutama untuk kaum muslimin yang merupakan mayoritas. Sampai dengan saat ini tercatat sarana peribadatan yang ada di wilayah Desa Cemarajaya sebagai berikut :
                    </p>
                    <p className='text-center font-bold'>Sarana peribadatan Desa Cemarajaya tahun 2021 </p>
                    <div className="overflow-x-auto">
                      <table className="table-fixed min-w-[720px] w-full border-spacing-5">
                        <thead>
                          <tr className='border border-slate-600'>
                            <th></th>
                            <th className='border border-slate-600'>Dusun</th>
                            <th className='border border-slate-600'>Masjid</th>
                            <th className='border border-slate-600'>Mushola</th>
                            <th className='border border-slate-600'>Madrasah</th>
                            <th className='border border-slate-600'>Vihara</th>
                            <th className='border border-slate-600'>Gereja</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className='border border-slate-700'>1</th>
                            <td className='border border-slate-700'>Cemara I Utara</td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'>2</td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'>1</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>2</th>
                            <td className='border border-slate-700'>Cemara I Selatan</td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'>2</td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'>1</td>
                            <td className='border border-slate-700 text-center'>3</td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>3</th>
                            <td className='border border-slate-700'>Cemara II Utara</td>
                            <td className='border border-slate-700 text-center'>1</td>
                            <td className='border border-slate-700 text-center'>3</td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'>1</td>
                            <td className='border border-slate-700 text-center'></td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>4</th>
                            <td className='border border-slate-700'>Cemara II Selatan</td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'>2</td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'></td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>5</th>
                            <td className='border border-slate-700'>Pisangan</td>
                            <td className='border border-slate-700 text-center'>1</td>
                            <td className='border border-slate-700 text-center'>2</td>
                            <td className='border border-slate-700 text-center'>1</td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'></td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'>6</th>
                            <td className='border border-slate-700'>Sekong</td>
                            <td className='border border-slate-700 text-center'>2</td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'></td>
                            <td className='border border-slate-700 text-center'></td>
                          </tr>

                          <tr>
                            <th className='border border-slate-700'></th>
                            <th className='border border-slate-700'>Jumlah</th>
                            <th className='border border-slate-700'>4</th>
                            <th className='border border-slate-700'>11</th>
                            <th className='border border-slate-700'>1</th>
                            <th className='border border-slate-700'>2</th>
                            <th className='border border-slate-700'>4</th>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      {/* data desa end */}

      {/* <div className='flex justify-center py-10'>
        <IGEmbed url="https://www.instagram.com/reel/ChmnOrRp0hI/?utm_source=ig_web_copy_link" />
      </div> */}

    </div>
  )
}

export default ContentAbout