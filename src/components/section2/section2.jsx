// import React from 'react'

// const Section2 = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-black">
//       {/* subtle animated grain */}
//       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] animate-pulse" />

//       {/* centered luxury headline */}
//       <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
//         <h2 className="font-playfair text-7xl md:text-8xl font-extrabold text-white tracking-widest uppercase">
//           Section II
//         </h2>
//         <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-6" />
//         <p className="mt-6 text-white/70 text-lg font-light tracking-wide max-w-xl">
//           Experience the next dimension of refinement.
//         </p>
//       </div>

//       {/* bottom subtle shimmer */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
//     </section>
//   )
// }

// export default Section2
import React from 'react'

const Section2 = () => {
  return (
    <section className="min-h-screen w-full bg-white text-charcoal">
      {/* ---------- HERO STRIP ---------- */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="text-center px-8">
          <h2 className="font-playfair text-6xl md:text-8xl font-bold tracking-tight">
            The Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A curated journey through craftsmanship, legacy and future-forward design.
          </p>
        </div>
      </div>

      {/* ---------- BLOCK 1 – LEFT IMAGE / RIGHT TEXT ---------- */}
      <div className="py-24 px-8 md:px-16 lg:px-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=800&q=80"
              alt="Craftsman at work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-playfair text-4xl font-semibold">
              Heritage Crafted<br />
              <span className="text-emerald-800">By Hand</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Every piece originates in the atelier—where seasoned artisans shape raw
              materials into objects of desire. Time-honoured techniques meet
              contemporary minimalism, ensuring each creation carries a soul that mass
              production can never replicate.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Individually numbered editions</li>
              <li>Responsibly sourced hardwoods & metals</li>
              <li>Zero-waste leather cutting process</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- BLOCK 2 – RIGHT IMAGE / LEFT TEXT ---------- */}
      <div className="py-24 px-8 md:px-16 lg:px-32 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="font-playfair text-4xl font-semibold">
              Future-Forward<br />
              <span className="text-emerald-800">Sustainability</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our commitment extends beyond aesthetics. Solar-powered facilities,
              carbon-neutral logistics and recycled precious metals converge to
              redefine luxury with a conscience. We invest 5 % of every sale into
              regenerative forestry, ensuring the earth that inspires us continues to
              thrive.
            </p>
            <div className="flex gap-8 text-sm text-gray-600">
              <div>
                <div className="text-2xl font-bold text-emerald-800">100 %</div>
                <div>Renewable Energy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-800">0</div>
                <div>Net Plastic</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-800">2.3 t</div>
                <div>CO₂ Offset / yr</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80"
              alt="Sustainable facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ---------- BLOCK 3 – LEFT IMAGE / RIGHT TEXT ---------- */}
      <div className="py-24 px-8 md:px-16 lg:px-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
              alt="Bespoke consultation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-playfair text-4xl font-semibold">
              Bespoke<br />
              <span className="text-emerald-800">Consultation</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your narrative becomes our blueprint. From monogrammed linings to
              one-off material combinations, our concierge team guides you through
              an immersive design journey. 3-D visualisations, tactile swatches
              and master sketches ensure the final piece is unmistakably yours.
            </p>
            <button className="inline-flex items-center gap-3 px-7 py-3 text-sm font-medium tracking-[0.2em] uppercase rounded-full bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg hover:shadow-gold/40 hover:shadow-xl transition-all duration-300">
              Book Appointment
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* ---------- FULL-WIDTH MASONRY GALLERY ---------- */}
      <div className="py-24 px-8 md:px-16 lg:px-32 bg-gray-50">
        <h3 className="font-playfair text-4xl text-center mb-12">Gallery</h3>
        <div className="columns-2 md:columns-3 gap-6 space-y-6">
          <img
            src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=80"
            className="w-full rounded-2xl shadow-md"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80"
            className="w-full rounded-2xl shadow-md"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1585141951633-6db5a7516a59?auto=format&fit=crop&w=600&q=80"
            className="w-full rounded-2xl shadow-md"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
            className="w-full rounded-2xl shadow-md"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80"
            className="w-full rounded-2xl shadow-md"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80"
            className="w-full rounded-2xl shadow-md"
            alt=""
          />
        </div>
      </div>

      {/* ---------- TESTIMONIALS ---------- */}
      <div className="py-24 px-8 md:px-16 lg:px-32">
        <h3 className="font-playfair text-4xl text-center mb-12">What Collectors Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <blockquote className="bg-gray-50 p-8 rounded-3xl shadow-sm">
            <p className="text-gray-700 italic">
              “The level of personalisation is unmatched. My briefcase carries my
              initials embossed in 24-k gold—an heirloom in the making.”
            </p>
            <cite className="mt-4 block text-sm text-gray-500">— A. R. Chandra, Singapore</cite>
          </blockquote>
          <blockquote className="bg-gray-50 p-8 rounded-3xl shadow-sm">
            <p className="text-gray-700 italic">
              “Sustainability without compromise. Finally, a brand that aligns with
              my values and my aesthetic.”
            </p>
            <cite className="mt-4 block text-sm text-gray-500">— E. Savoie, Paris</cite>
          </blockquote>
          <blockquote className="bg-gray-50 p-8 rounded-3xl shadow-sm">
            <p className="text-gray-700 italic">
              “From sketch to delivery, the concierge experience felt like a
              private atelier in my pocket.”
            </p>
            <cite className="mt-4 block text-sm text-gray-500">— M. De Niro, New York</cite>
          </blockquote>
        </div>
      </div>

      {/* ---------- CLOSING CTA ---------- */}
      <div className="py-24 px-8 md:px-16 lg:px-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-playfair text-5xl font-semibold">
            Begin Your Legacy
          </h3>
          <p className="mt-4 text-gray-600">
            Limited slots open for 2025 bespoke commissions. Register today to
            secure priority access.
          </p>
          <button className="mt-8 inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-[0.2em] uppercase rounded-full bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg hover:shadow-gold/40 hover:shadow-xl transition-all duration-300">
            Reserve Your Slot
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section2