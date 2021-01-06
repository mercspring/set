export function check([card1, card2, card3]) {
    if (((card1.shape === card2.shape) && (card2.shape === card3.shape && (card1.shape === card3.shape))) || (card1.shape != card2.shape) && (card3.shape != card2.shape) && (card1.shape != card3.shape)) {
        console.log("pass shape");
        if (((card1.color === card2.color) && (card2.color === card3.color && (card1.color === card3.color))) || (card1.color != card2.color) && (card3.color != card2.color) && (card1.color != card3.color)) {
            console.log("pass color");
            if (((card1.fill === card2.fill) && (card2.fill === card3.fill && (card1.fill === card3.fill))) || (card1.fill != card2.fill) && (card3.fill != card2.fill) && (card1.fill != card3.fill)) {
                console.log("pass fill");
            if (((card1.number === card2.number) && (card2.number === card3.number && (card1.number === card3.number))) || (card1.number != card2.number) && (card3.number != card2.number) && (card1.number != card3.number)) {
                    console.log("pass number");
                    return true
                }
            }
        }
    }
    return false
}
