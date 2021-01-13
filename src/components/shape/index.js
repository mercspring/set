import React from 'react'

const shapes = {
    diamond: "M 7.00,14.00 C 7.00,14.00 36.00,3.70 36.00,3.70 36.00,3.70 46.00,6.40 46.00,6.40 46.00,6.40 66.00,15.00 66.00,15.00 66.00,15.00 47.00,22.20 47.00,22.20 47.00,22.20 37.00,25.47 37.00,25.47 37.00,25.47 26.00,22.00 26.00,22.00 26.00,22.00 7.00,14.00 7.00,14.00 Z",
    diamond_upright: "M 18.00,12.00 C 21.42,17.26 23.18,24.99 25.42,31.00 26.93,35.02 29.85,41.84 29.74,46.00 29.56,52.43 20.94,73.90 17.00,79.00 14.60,72.07 6.18,51.94 6.18,46.00 6.18,38.87 15.23,19.98 18.00,12.00 Z",
    oval: "m10 3.57s45-.57 45-.57c3.8.02 6.76-.14 9.89 2.43 5.88 4.81 5.43 14.64-.93 18.83-3.04 2.01-6.49 1.73-9.96 1.74h-38c-3.66-.02-6.83.15-9.78-2.43-6.84-5.99-4.62-16.62 3.78-20z",
    oval_upright: "M 14.00,4.65 C 25.46,2.38 30.94,9.20 31.00,20.00 31.00,20.00 31.00,69.00 31.00,69.00 30.99,72.48 31.27,75.90 29.26,78.96 24.34,86.46 13.03,86.99 7.51,79.90 4.91,76.56 5.02,72.99 5.00,69.00 5.00,69.00 5.00,20.00 5.00,20.00 5.01,11.75 5.68,8.15 14.00,4.65 Z",
    squiggle: "M 3.00,26.00 C 3.00,22.55 2.80,19.32 3.92,16.00 4.80,13.38 6.14,11.14 8.13,9.21 22.56,-4.78 34.37,11.05 50.00,10.97 59.19,10.93 60.44,5.73 69.00,3.00 69.00,6.45 69.20,9.68 68.08,13.00 67.20,15.62 65.86,17.86 63.87,19.79 49.44,33.78 37.63,17.95 22.00,18.03 12.81,18.07 11.56,23.27 3.00,26.00 Z",
    squiggle_upright: "M 5.00,5.00 C 9.02,5.01 12.09,4.95 16.00,6.22 19.25,7.28 21.47,8.71 23.91,11.10 40.15,27.10 21.86,44.08 21.45,62.00 21.26,70.77 27.62,77.43 31.00,85.00 26.98,84.99 23.91,85.05 20.00,83.78 16.75,82.72 14.53,81.29 12.09,78.90 -4.50,62.56 14.67,45.58 14.66,28.00 14.66,19.23 8.39,12.59 5.00,5.00 Z",
}


export default function Shape(props) {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg"
                width={props.upright ? "36px" : "90px"} 
                height={props.upright ? "90px" : "36px" }
                viewBox={props.upright ? "0 0 36 90" :"0 0 72 29"}
            >
                <linearGradient id="red-stripes" x1="0%" y1="0%" x2={props.upright ? "25%" : "10%"} y2="0%" spreadMethod="repeat" gradientUnits="userSpaceOnUse" gradientTransform= {props.upright ? "rotate(90)" : ""}>

                    <stop offset="20%" stop-color="red" />

                    <stop offset="20%" stop-color="white" />

                </linearGradient>
                <linearGradient id="purple-stripes" x1="0%" y1="0%" x2={props.upright ? "25%" : "10%"} y2="0%" spreadMethod="repeat" gradientUnits="userSpaceOnUse" gradientTransform= {props.upright ? "rotate(90)" : ""}>

                    <stop offset="20%" stop-color="purple" />

                    <stop offset="20%" stop-color="white" />

                </linearGradient>
                <linearGradient id="green-stripes" x1="0%" y1="0%" x2={props.upright ? "25%" : "10%"} y2="0%" spreadMethod="repeat" gradientUnits="userSpaceOnUse" gradientTransform= {props.upright ? "rotate(90)" : ""}>

                    <stop offset="20%" stop-color="green" />

                    <stop offset="20%" stop-color="white" />

                </linearGradient>

                <path id="Selection"
                    fill={props.fill === "solid" ? props.color : props.fill === "empty" ? "white" : `url(#${props.color}-stripes)`}
                    stroke={props.color}
                    stroke-width="1"
                    d={ props.upright ? shapes[props.shape + "_upright"] : shapes[props.shape]} />
            </svg>
        </div> 
    )
}
