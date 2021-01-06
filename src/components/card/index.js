import { React, useState, useEffect } from 'react';
import Shape from '../shape';

const styles = {
    notSelected: { border: "solid 1px black", margin: "2px", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "133px", backgroundColor: "white" },
    selected: { border: "solid 1px black", margin: "2px", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "133px", backgroundColor: "khaki" }
}

export default function Card(props) {
    // const [selected, setSelected] = useState(false);

    function populateCard() {
        const shapes = [];
        for (let i = 0; i < props.number; i++) {
            shapes.push(<Shape color={props.color} shape={props.shape} fill={props.fill}></Shape>)
        }
        return shapes;
    }
    function onClick(event) {
        let tmpSelectedCards = props.selectedCards;
        if (props.selectedCards.includes(props.cardNumber)) {
            props.setSelectedCards(props.selectedCards.filter(elm => elm != props.cardNumber))
        } else {
            props.setSelectedCards([...props.selectedCards, props.cardNumber])
        }
    }
    return (
        <div style={props.selectedCards.includes(props.cardNumber) ? styles.selected : styles.notSelected} onClick={onClick}>
            {populateCard()}
        </div>
    )
}
