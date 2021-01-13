import { React, useState, useEffect, useRef } from 'react';
import Card from '../card';
import newDeck from '../../utils/deck.js';
import { check } from '../../utils/check.js';

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



export default function Board() {
    // const [currentCards, setCurrentCards] = useState();
    const [numberOfRows, setNumberOfRows] = useState(3);
    const [setsFound, setSetsFound] = useState(0);
    const [upright, setUpright] = useState(false);
    const [selectedCards, setSelectedCards] = useState([])
    const [deck, setDeck] = useState([{ color: 'purple', fill: 'empty', number: 3, shape: 'oval' }]);

    useEffect(() => {

        setDeck(newDeck)

    }, [])

    useEffect(() => {
        console.log(selectedCards)
        if (selectedCards.length > 2) {
            if (check([deck[selectedCards[0]], deck[selectedCards[1]], deck[selectedCards[2]]])) {
                setSetsFound(setsFound + 1);
                const tmpDeck = deck;
                console.log(tmpDeck, tmpDeck.length)
                for (let i = 0; i < selectedCards.length; i++) {
                    tmpDeck[selectedCards[i]] = tmpDeck[tmpDeck.length - i - 1];
                }
                console.log(tmpDeck, tmpDeck.length)
                const removed = tmpDeck.splice(tmpDeck.length - 3, 3);
                console.log(tmpDeck, tmpDeck.length, removed)
                if (numberOfRows !== 3) {
                    setNumberOfRows(3);
                }
                setDeck(tmpDeck);
            }
            setSelectedCards([]);

        }

    }, [selectedCards])

    function populateRow(rowNumber) {

        const row = [];
        for (let j = 0; j < 4; j++) {
            const cardNumber = j + 4 * rowNumber;
            row.push(<Card key={cardNumber} upright={upright} cardNumber={cardNumber} color={deck[cardNumber].color} fill={deck[cardNumber].fill} number={deck[cardNumber].number} shape={deck[cardNumber].shape} setSelectedCards={setSelectedCards} selectedCards={selectedCards}></Card>)
        }
        return row

    }

    function populateBoard() {
        const board = []
        for (let i = 0; i < numberOfRows; i++) {
            board.push(<div key={i} style={styles.row}>
                {populateRow(i)}
            </div>)
        }
        return board
    }
    return (
        <div>
            <div className="board" >
                {(deck.length > 4) ? populateBoard() : null}
            </div>
            <div>
                <p>Sets Found: {setsFound}</p>
                <p>Cards Left: {deck.length}</p>
                <button onClick={() => { setNumberOfRows(numberOfRows + 1) }}>Add Row</button>
                <button onClick={() => { setUpright(!upright)}}>Invert</button>
            </div>
        </div>
    )
}
