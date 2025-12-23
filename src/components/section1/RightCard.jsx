import React from 'react'

const cards = [
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  },
  {
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  },
  {
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  }
]

const RightCard = () => {
  return (
    <div className="flex gap-8 p-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-72 h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
        >
          {/* Full-card background image with dark overlay */}
          <img
            src={card.img}
            alt="cover"
            className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

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
          </div>
          {/*     <RightCardContent/>  */}
          {/* try ti import usign reusable components but not working  */}
        </div>
      ))}
    </div>
  )
}

export default RightCard