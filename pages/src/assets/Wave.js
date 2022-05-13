import * as React from "react"

const Wave = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1800}
    height={300}
    preserveAspectRatio="none"
    {...props}
  >
    <g mask='url("#a")' fill="none">
      <path
        d="M0 250C45 203.4 135 31.8 225 17c90-14.8 135 145.8 225 159 90 13.2 135-103 225-93s135 138.4 225 143c90 4.6 135-111.2 225-120 90-8.8 135 75.2 225 76 90 .8 135-78.2 225-72 90 6.2 180 82.4 225 103v87H0z"
        fill="rgba(89, 214, 215, 1)"
      />
    </g>
    <defs>
      <mask id="a">
        <path fill="#fff" d="M0 0h1800v300H0z" />
      </mask>
    </defs>
  </svg>
)

export default Wave
