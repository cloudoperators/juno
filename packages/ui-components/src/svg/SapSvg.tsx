import React from "react"

interface SapSvgProps {
  className?: string
  alt?: string
}

export const SapSvg: React.FC<SapSvgProps> = ({ className, alt }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="none" viewBox="0 0 82 40" className={className} aria-label={alt}>
      <path
        fill="url(#paint0_linear_250_2398)"
        fillRule="evenodd"
        d="M0 40h41.229l40.35-40H0v40z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M48.22 7.271h-8.013v19.082l-7-19.088h-6.939l-5.975 15.958c-.64-4.023-4.784-5.413-8.06-6.455-2.16-.694-4.452-1.716-4.422-2.846.017-.926 1.23-1.78 3.628-1.657 1.612.085 3.033.215 5.864 1.582l2.783-4.854c-2.592-1.315-6.156-2.147-9.084-2.15h-.017c-3.411 0-6.253 1.106-8.014 2.93a6.773 6.773 0 00-1.917 4.682c-.045 2.462.857 4.211 2.752 5.595 1.599 1.174 3.643 1.936 5.448 2.495 2.224.69 4.04 1.291 4.018 2.57-.012.472-.2.922-.527 1.262-.554.573-1.407.79-2.583.81-2.268.047-3.948-.308-6.635-1.896l-2.473 4.925a18.486 18.486 0 009.08 2.416h.416c2.811-.05 5.081-.852 6.893-2.315.105-.082.197-.166.294-.253l-.813 2.145h7.27l1.221-3.721c1.38.458 2.826.687 4.28.678a13.47 13.47 0 004.176-.643l1.184 3.686h11.871v-7.71h2.588c6.259 0 9.96-3.193 9.96-8.541 0-5.953-3.597-8.687-11.253-8.687zM29.703 23.61a7.28 7.28 0 01-2.566-.451l2.54-8.025h.044l2.497 8.049a7.588 7.588 0 01-2.515.427zm18.989-4.613h-1.765V12.52h1.765c2.354 0 4.231.79 4.231 3.19 0 2.492-1.877 3.277-4.231 3.277v.01z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient id="paint0_linear_250_2398" x1="0" x2="0" y1="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B8F1"></stop>
          <stop offset="0.02" stopColor="#01B6F0"></stop>
          <stop offset="0.31" stopColor="#0D90D9"></stop>
          <stop offset="0.58" stopColor="#1775C8"></stop>
          <stop offset="0.82" stopColor="#1C65BF"></stop>
          <stop offset="1" stopColor="#1E5FBB"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
