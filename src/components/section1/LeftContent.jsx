import React from 'react'

const LeftContent = () => {
  return (
    <div className="h-full w-1/4 px-8">
      {/* refined heading */}
      <h3 className="font-playfair text-4xl font-bold text-charcoal leading-tight tracking-wide">
        Prospective<br />
        <span>Customer</span><br />
        Segmentation
      </h3>

      {/* understated divider */}
      <div className="w-16 h-px bg-gold mt-6 mb-8" />

      {/* elegant body copy */}
      <p className="font-canela text-sm leading-relaxed text-charcoal/80">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
        perspiciatis similique nisi sit, accusantium nesciunt autem nam,
        dolorem facilis hic. Sit harum cumque aperiam quo, a libero fugiat
        quas consectetur adipisicing elit.
      </p>

      {/* target-customer tag */}
      <div className="inline-block mt-8 px-4 py-2 bg-gray-200 text-charcoal text-xs font-medium rounded-full">
        ⇡
      </div>
    </div>
  )
}

export default LeftContent