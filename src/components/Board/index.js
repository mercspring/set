import { React, useState, useEffect } from 'react';
import Card from '../card';
import { Deck } from '../../utils/deck.js';

const styles = {
    row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    column: {
        flexBasis: "100%",
    }
}


const myDeck = new Deck();

export default function Board() {
    const [currentCards, setCurrentCards] = useState([]);
    const [numberOfRows, setNumberOfRows] = useState(3);

    useEffect(() => {
        const starterCards = {};
        myDeck.deal(12).forEach((elm, index) => {
            starterCards['card' + index] = elm;
        })
        console.log(starterCards)
        setCurrentCards(starterCards)

    }, [])

    function populateRow() {
        for (let i = 0; i < numberOfRows; i++) {
            return(<div style={styles.row}>
                {myDeck.deal(4).map(elm => {
                   return <Card color={elm.color} fill={elm.fill} number={elm.number} shape={elm.shape}></Card>
                })}
            </div>)
        }
    }
    return (
        <div className="board">
            {populateRow()}
            {populateRow()}
            {populateRow()}
        </div>
    )
}
