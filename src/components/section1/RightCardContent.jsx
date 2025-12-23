import React from 'react'

const RightCardContent = () => {
  return (
    <div> <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

          {/* Centered content on top of image */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <p className="text-white/90 text-sm leading-relaxed font-light max-w-[80%]">
              {card.desc}
            </p>

            {/* Luxury Button */}
            <button className="mt-8 inline-flex items-center gap-3 px-7 py-3 text-sm font-medium tracking-[0.2em] uppercase rounded-full bg-gradient-to-r from-black/60 via-gray-900/60 to-black/60 backdrop-blur text-white shadow-lg hover:shadow-gold/40 hover:shadow-xl transition-all duration-300">
              Explore
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div></div>
  )
}

export default RightCardContent