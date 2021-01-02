import React from 'react';
import Shape from '../shape';

export default function Card(props) {
    function populateCard(){
        const shapes = [];
        for(let i = 0; i < props.number; i++){
            shapes.push(<Shape color={props.color} shape={props.shape} fill={props.fill}></Shape>)
        }
        return shapes;
    }
    return (
        <div style={{ border: "solid 1px black", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {populateCard()}
        </div>
    )
}
