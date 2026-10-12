import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import axios from "axios"
import { MyStore } from '../../State/useContext'
const ExplorePage = () => {
  const [searchParams]=useSearchParams()
   const {images,setImages}=useContext(MyStore)
  const category=searchParams.get("category")
  const showcategory=async()=>{
    const response=await axios.get(`https://images-api.nasa.gov/search?q=${category}&media_type=image`)
        setImages(response.data.collection.items)
        return response.data.collection.items
  }
  useEffect(()=>{
    showcategory()
  },[])
  
return (
  <div className="min-h-screen bg-[#080910] px-5 py-12 text-white sm:px-8 lg:px-16">

    {/* Header */}
    <div className="mx-auto mb-12 max-w-7xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
        Space Explorer / Discover
      </p>

      <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Explore <span className="text-[#D4AF37]">{category}</span>
      </h1>

      <p className="max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
        Discover the wonders of the universe through NASA's collection of
        space images, celestial objects, and cosmic discoveries.
      </p>

      <div className="mt-7 h-px w-full bg-gradient-to-r from-[#D4AF37]/60 via-gray-700 to-transparent" />
    </div>

    {/* Image Grid */}
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {images.map((item) => (
        <div
          key={item.data[0].nasa_id}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11131D] transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_12px_40px_rgba(212,175,55,0.08)]"
        >
          {/* Image */}
          <div className="relative h-60 overflow-hidden bg-[#090B12]">
            <img
              src={item.links?.[0]?.href}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#11131D] via-transparent to-transparent opacity-80" />

            <span className="absolute left-4 top-4 rounded-full border border-[#D4AF37]/30 bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#D4AF37] backdrop-blur-md">
              {item.data[0].center || "NASA"}
            </span>
          </div>

          {/* Card Content */}
          <div className="p-5">
            <h2 className="mb-3 line-clamp-2 text-lg font-semibold leading-7 text-white transition group-hover:text-[#D4AF37]">
              {item.data[0].title}
            </h2>

            <p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-400">
              {item.data[0].description || "Explore this fascinating discovery from NASA's space image collection."}
            </p>

            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs tracking-wide text-gray-500">
                NASA IMAGE
              </span>

              <span className="text-xs font-medium text-[#D4AF37]">
                {item.data[0].nasa_id}
              </span>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
)

}

export default ExplorePage