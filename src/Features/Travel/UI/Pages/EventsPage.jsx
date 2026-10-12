import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { MyStore } from '../../State/useContext'
import { useHook } from '../../Hooks/useHook'

const EventsPage = () => {

   const {search,setSearch}=useContext(MyStore)
  const {newEventData}=useHook()

return (
  <div className="min-h-screen bg-[#080910] px-5 py-10 text-white md:px-10 lg:px-14">

    {/* Header */}
    <div className="mx-auto max-w-7xl">

      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Explore • Discover • Learn
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Cosmic <span className="text-[#D4AF37]">Events</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
            Explore breathtaking NASA imagery and discover the wonders
            of our universe through stunning visuals.
          </p>
        </div>

        {/* Decorative Stats */}
        <div className="flex gap-3">
          <div className="rounded-2xl border border-white/10 bg-[#11131D] px-5 py-4">
            <p className="text-xs text-gray-500">Collection</p>
            <p className="mt-1 text-2xl font-bold text-[#D4AF37]">NASA</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#11131D] px-5 py-4">
            <p className="text-xs text-gray-500">Gallery</p>
            <p className="mt-1 text-2xl font-bold">Explore</p>
          </div>
        </div>
      </div>

      <div className="my-9 h-px bg-gradient-to-r from-[#D4AF37]/60 via-white/10 to-transparent" />

      {/* Search & Filters — UI only */}
      <div className="mb-8 rounded-2xl border border-white/10 bg-[#11131D] p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

          {/* Search Bar */}
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#080910] px-4 py-3.5 transition focus-within:border-[#D4AF37]/60">
            <svg
              className="h-5 w-5 shrink-0 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 4 4" />
            </svg>

            <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
              type="text"
              placeholder="Search cosmic events..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
            />

            <button 
            className="hidden rounded-md border border-white/10 px-2 py-1 text-xs text-gray-500 sm:inline-block">
              Search
            </button>
          </div>

        
          
       </div>

        {/* Quick Tags */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs text-gray-500">Popular:</span>

          {["Wildfire", "Earth", "Space", "Galaxy"].map((tag) => (
            <button
              type="button"
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Heading */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold md:text-2xl">
            Featured <span className="text-[#D4AF37]">Collection</span>
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Discover images from NASA's media library
          </p>
        </div>

        {/* View controls — decorative UI */}
        <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#11131D] p-1">
          <button
            type="button"
            aria-label="Grid view"
            className="rounded-lg bg-[#D4AF37]/15 p-2.5 text-[#D4AF37]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="List view"
            className="rounded-lg p-2.5 text-gray-500 transition hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6h12M9 12h12M9 18h12" />
              <circle cx="4" cy="6" r="1" />
              <circle cx="4" cy="12" r="1" />
              <circle cx="4" cy="18" r="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {newEventData.map((item) => (
          <div
            key={item.data?.[0]?.nasa_id || item.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11131D] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-black/30"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden bg-[#191A27]">
              <img
                src={item.links?.[0]?.href}
                alt={item.data?.[0]?.title || "NASA image"}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080910]/80 via-transparent to-black/10" />

              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                NASA IMAGE
              </span>

              <span className="absolute bottom-4 right-4 rounded-lg border border-white/15 bg-black/50 px-3 py-1.5 text-xs text-gray-200 backdrop-blur-md">
                ↗ Explore
              </span>
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37]">
                  {item.data?.[0]?.center || "NASA"}
                </span>

                <span className="text-xs text-gray-600">
                  {item.data?.[0]?.media_type || "Image"}
                </span>
              </div>

              <h3 className="line-clamp-2 min-h-14 text-lg font-semibold leading-7 transition group-hover:text-[#D4AF37]">
                {item.data?.[0]?.title || "Untitled NASA Image"}
              </h3>

              <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-gray-400">
                {item.data?.[0]?.description || "Discover this fascinating image from NASA's media collection."}
              </p>

            </div>
          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row">
        <p>Exploring the universe, one image at a time.</p>
        <p>Powered by NASA's public media collection</p>
      </div>

    </div>
  </div>
)

}

export default EventsPage
