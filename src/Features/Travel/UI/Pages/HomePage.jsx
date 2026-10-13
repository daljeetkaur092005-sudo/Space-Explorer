import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Search,
  Sparkles,
  CalendarDays,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Orbit,
  Globe,
  Star,
  Moon,
  Grid2X2,
} from "lucide-react";
import { useHook } from "../../Hooks/useHook";

const categories = [
  {
    name: "Galaxies",
    count: "Explore galaxies",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
    icon: Orbit,
  },
  {
    name: "Planets",
    count: "Discover planets",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600",
    icon: Orbit,
  },
  {
    name: "Moon",
    count: "Explore the Moon",
    image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=600",
    icon: Moon,
  },
  {
    name: "Nebulae",
    count: "Colorful nebulae",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600",
    icon: Sparkles,
  },
  {
    name: "Earth",
    count: "Our home planet",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600",
    icon: Globe,
  },
  {
    name: "Stars",
    count: "Distant stars",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
    icon: Star,
  },
];

const HomePage = () => {
  const { navigate, featuredata } = useHook();

  const [showSearch, setShowSearch] = useState("");
  const searching = categories?.filter((val) => {
    return val.name.toLowerCase().includes(showSearch.toLowerCase());
  });
  const featured = featuredata?.[0];
  return (
    <main className="min-h-screen bg-[#050a12] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[430px] items-center overflow-hidden md:min-h-[490px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1800')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050a12] via-[#050a12]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a12] via-transparent to-[#050a12]/20" />

        <div className="relative z-10 w-full px-6 py-16 md:px-16">
          <p className="mb-5 flex items-center gap-3 text-sm tracking-[0.2em] text-amber-400">
            <span className="h-px w-8 bg-amber-400" />
            DISCOVER THE UNIVERSE
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            Explore Stunning Images
            <br />
            <span className="text-amber-400">of Our Universe</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 md:text-base">
            From distant galaxies to our own planet, discover breathtaking space
            images and explore the cosmos like never before.
          </p>

          <div className="mt-8 flex max-w-2xl items-center gap-3 rounded-full border border-amber-400/50 bg-black/40 p-1.5 pl-5 backdrop-blur-md">
            <Search size={20} className="shrink-0 text-amber-400" />

            <input
              value={showSearch}
              onChange={(e) => setShowSearch(e.target.value)}
              type="text"
              placeholder="Search planets, galaxies, stars..."
              className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-gray-400"
            />

            <button className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300">
              Search
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-300">
            <p>
              <span className="text-amber-400">✦</span> Explore Galaxies
            </p>
            <p>
              <span className="text-amber-400">✦</span> Discover Planets
            </p>
            <p>
              <span className="text-amber-400">✦</span> Journey Through Space
            </p>
          </div>
        </div>
      </section>

      {/* Featured Today */}
      <section className="px-5 py-9 md:px-16 md:py-12">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-3">
              <Sparkles size={23} className="text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold md:text-2xl">Featured Today</h2>
              <p className="mt-1 text-sm text-gray-400">
                A glimpse into our amazing universe
              </p>
            </div>
          </div>

          <a
             onClick={()=>navigate("/main/events")}
            className="flex items-center gap-2 text-sm text-amber-400"
          >
            View All <ArrowRight size={17} />
          </a>
        </div>

        {featuredata && (
          <div className="overflow-hidden rounded-2xl border border-amber-400/20 bg-[#080e18] md:flex">
            <img
              src={featured?.hdurl || featured.url}
              alt="Nebula in deep space"
              className="h-60 w-full object-cover md:h-auto md:w-[42%]"
            />

            <div className="flex flex-1 flex-col justify-center p-6 md:p-9">
              <span className="w-fit rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs text-amber-300">
                {featured?.title}
              </span>

              <h3 className="mt-5 text-2xl font-bold md:text-3xl">
                The Wonders of Deep Space
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-7 text-gray-400">
                {featured?.alt}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="flex items-center gap-2 text-sm text-gray-400">
                  <CalendarDays size={17} className="text-amber-400" />
                  {featured?.date}
                </p>

                <button onClick={()=>navigate("/main/explore")}
                 className="flex items-center gap-2 rounded-full border border-amber-400/40 px-5 py-2.5 text-sm text-amber-400 transition hover:bg-amber-400 hover:text-black">
                  Explore Image <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            aria-label="Previous image"
            className="rounded-full border border-white/10 bg-[#101722] p-2.5 text-gray-300"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="h-1.5 w-7 rounded-full bg-amber-400" />
          <span className="h-1.5 w-2 rounded-full bg-gray-700" />
          <span className="h-1.5 w-2 rounded-full bg-gray-700" />
          <button
            aria-label="Next image"
            className="rounded-full border border-white/10 bg-[#101722] p-2.5 text-gray-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="px-5 pb-14 pt-2 md:px-16">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-3">
            <Grid2X2 size={23} className="text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold md:text-2xl">
              Popular Categories
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Explore by what fascinates you
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {searching.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="group overflow-hidden rounded-xl border border-slate-700/70 bg-[#080e18] transition duration-300 hover:-translate-y-1 hover:border-amber-400/60"
              >
                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-32 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2">
                    <Icon size={18} className="shrink-0 text-amber-400" />
                    <h3 className="text-sm font-semibold">{category.name}</h3>
                    <ArrowRight
                      onClick={() =>
                        navigate(
                          `/main/explore?category=${category.name.toLowerCase()}`,
                        )
                      }
                      size={15}
                      className="ml-auto text-gray-500 group-hover:text-amber-400"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">{category.count}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-gray-500 md:px-16">
        <p>
          <span className="text-amber-400">✦ Space Explorer</span> — Discover
          the beauty of our universe.
        </p>
      </footer>
    </main>
  );
};

export default HomePage;
