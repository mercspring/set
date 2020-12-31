import React from 'react';
import Shape from '../shape';

export default function Card() {
    return (
        <div style={{ border: "solid 1px black", borderRadius: "10px" }}>

            <Shape color="green" shape="diamond" fill="empty"></Shape>
            <Shape color="purple" shape="squiggle" fill="striped"></Shape>
            <Shape color="red" shape="oval" fill="solid"></Shape>
        </div>
    )
}
