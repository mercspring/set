import React from 'react';
import Diamond from '../diamond';
import Oval from '../oval';
import Squiggle from '../squiggle';

export default function Card() {
    return (
        <div>
            <svg width='0in' height='0in'>
                <defs>

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

                </defs>
            </svg>
            <Diamond color="green" fill="stripe"></Diamond>
            <Oval color="purple" fill="empty"></Oval>
            <Squiggle color="green" fill="striped"></Squiggle>
        </div>
    )
}
