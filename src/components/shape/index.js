import React from 'react'

const shapes = {
    diamond: "M 7.00,14.00 C 7.00,14.00 36.00,3.70 36.00,3.70 36.00,3.70 46.00,6.40 46.00,6.40 46.00,6.40 66.00,15.00 66.00,15.00 66.00,15.00 47.00,22.20 47.00,22.20 47.00,22.20 37.00,25.47 37.00,25.47 37.00,25.47 26.00,22.00 26.00,22.00 26.00,22.00 7.00,14.00 7.00,14.00 Z",
    oval: "m10 3.57s45-.57 45-.57c3.8.02 6.76-.14 9.89 2.43 5.88 4.81 5.43 14.64-.93 18.83-3.04 2.01-6.49 1.73-9.96 1.74h-38c-3.66-.02-6.83.15-9.78-2.43-6.84-5.99-4.62-16.62 3.78-20z",
    squiggle: "M 3.00,26.00 C 3.00,22.55 2.80,19.32 3.92,16.00 4.80,13.38 6.14,11.14 8.13,9.21 22.56,-4.78 34.37,11.05 50.00,10.97 59.19,10.93 60.44,5.73 69.00,3.00 69.00,6.45 69.20,9.68 68.08,13.00 67.20,15.62 65.86,17.86 63.87,19.79 49.44,33.78 37.63,17.95 22.00,18.03 12.81,18.07 11.56,23.27 3.00,26.00 Z"
}


export default function Shape(props) {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg"
                width="1in" height="0.402778in"
                viewBox="0 0 72 29"
            >
                <linearGradient id="red-stripes" x1="40%" y1="0%" x2="50%" y2="0%" spreadMethod="repeat" gradientUnits="userSpaceOnUse">

                    <stop offset="20%" stop-color="red" />

                    <stop offset="20%" stop-color="white" />

                </linearGradient>
                <linearGradient id="purple-stripes" x1="40%" y1="0%" x2="50%" y2="0%" spreadMethod="repeat" gradientUnits="userSpaceOnUse">

                    <stop offset="20%" stop-color="purple" />

                    <stop offset="20%" stop-color="white" />

                </linearGradient>
                <linearGradient id="green-stripes" x1="40%" y1="0%" x2="50%" y2="0%" spreadMethod="repeat" gradientUnits="userSpaceOnUse">

                    <stop offset="20%" stop-color="green" />

                    <stop offset="20%" stop-color="white" />

                </linearGradient>

                <path id="Selection"
                    fill={props.fill === "solid" ? props.color : props.fill === "empty" ? "white" : `url(#${props.color}-stripes)`}
                    stroke={props.color}
                    stroke-width="1"
                    d={shapes[props.shape]} />
            </svg>
        </div> 
    )
}
