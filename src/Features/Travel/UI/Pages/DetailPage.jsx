import React from "react";

const DetailPage = () => {
  return (
    <div className="min-h-screen bg-[#080910] px-5 py-10 text-white md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Space Explorer • Knowledge Hub
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Cosmic <span className="text-[#D4AF37]">Details</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Discover fascinating facts about our universe, explore celestial
            objects, and learn more about the mysteries of space.
          </p>
        </div>

        <div className="mb-10 h-px bg-gradient-to-r from-[#D4AF37]/60 via-white/10 to-transparent" />

        {/* Overview Cards */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#11131D] p-6 transition hover:border-[#D4AF37]/40">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-2xl">
              🌌
            </div>

            <h2 className="text-xl font-semibold">Galaxies</h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Explore enormous collections of stars, gas, dust, and dark matter
              held together by gravity.
            </p>

            <span className="mt-5 inline-block text-xs font-medium text-[#D4AF37]">
              Deep Space
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#11131D] p-6 transition hover:border-[#D4AF37]/40">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-2xl">
              🪐
            </div>

            <h2 className="text-xl font-semibold">Planets</h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Learn about planets, their atmospheres, unique environments, and
              their place in our solar system.
            </p>

            <span className="mt-5 inline-block text-xs font-medium text-[#D4AF37]">
              Solar System
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#11131D] p-6 transition hover:border-[#D4AF37]/40">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-2xl">
              ⭐
            </div>

            <h2 className="text-xl font-semibold">Stars</h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Discover how stars form, produce energy, change over time, and
              influence the universe.
            </p>

            <span className="mt-5 inline-block text-xs font-medium text-[#D4AF37]">
              Stellar Science
            </span>
          </div>
        </div>

        {/* Featured Information */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#11131D]">
          <div className="grid md:grid-cols-2">
            <div className="flex min-h-72 items-center justify-center bg-gradient-to-br from-[#17182B] via-[#10121D] to-[#080910] p-8">
              <div className="text-center">
                <div className="text-7xl">🌠</div>
                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                  Beyond Our World
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Featured Topic
              </span>

              <h2 className="text-2xl font-bold md:text-3xl">
                The Observable Universe
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                The observable universe is the part of the universe from which
                light has had enough time to reach us since the universe began.
                It contains an incredible variety of galaxies, stars, and other
                cosmic objects.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400">
                  Astronomy
                </span>

                <span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-xs text-[#D4AF37]">
                  Cosmic Science
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row">
          <p>Every discovery brings us closer to understanding the cosmos.</p>
          <p>Space Explorer · Knowledge Hub</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
