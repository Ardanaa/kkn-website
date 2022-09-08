import React from 'react'
import Contributor from '../data/Contributor.json'
const Team = () => {
  const data = Contributor
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">"Alone we can do so little; together we can do so much." – Helen Keller</p>
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