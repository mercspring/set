export function Deck() {
    this.colors = ['green', 'red', 'purple'];
    this.fill = ['empty', 'striped', 'solid'];
    this.number = [1, 2, 3];
    this.shapes = ['diamond', 'oval', 'squiggle']
    this.shuffle = function (arr) {
        let currentIndex = arr.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = arr[currentIndex];
          arr[currentIndex] = arr[randomIndex];
          arr[randomIndex] = temporaryValue;
        }
      
        return arr;
    }
    this.cards = [
        { color: 'green', fill: 'empty', number: 1, shape: 'diamond' },
        { color: 'green', fill: 'empty', number: 1, shape: 'oval' },
        { color: 'green', fill: 'empty', number: 1, shape: 'squiggle' },
        { color: 'green', fill: 'empty', number: 2, shape: 'diamond' },
        { color: 'green', fill: 'empty', number: 2, shape: 'oval' },
        { color: 'green', fill: 'empty', number: 2, shape: 'squiggle' },
        { color: 'green', fill: 'empty', number: 3, shape: 'diamond' },
        { color: 'green', fill: 'empty', number: 3, shape: 'oval' },
        { color: 'green', fill: 'empty', number: 3, shape: 'squiggle' },
        { color: 'green', fill: 'striped', number: 1, shape: 'diamond' },
        { color: 'green', fill: 'striped', number: 1, shape: 'oval' },
        { color: 'green', fill: 'striped', number: 1, shape: 'squiggle' },
        { color: 'green', fill: 'striped', number: 2, shape: 'diamond' },
        { color: 'green', fill: 'striped', number: 2, shape: 'oval' },
        { color: 'green', fill: 'striped', number: 2, shape: 'squiggle' },
        { color: 'green', fill: 'striped', number: 3, shape: 'diamond' },
        { color: 'green', fill: 'striped', number: 3, shape: 'oval' },
        { color: 'green', fill: 'striped', number: 3, shape: 'squiggle' },
        { color: 'green', fill: 'solid', number: 1, shape: 'diamond' },
        { color: 'green', fill: 'solid', number: 1, shape: 'oval' },
        { color: 'green', fill: 'solid', number: 1, shape: 'squiggle' },
        { color: 'green', fill: 'solid', number: 2, shape: 'diamond' },
        { color: 'green', fill: 'solid', number: 2, shape: 'oval' },
        { color: 'green', fill: 'solid', number: 2, shape: 'squiggle' },
        { color: 'green', fill: 'solid', number: 3, shape: 'diamond' },
        { color: 'green', fill: 'solid', number: 3, shape: 'oval' },
        { color: 'green', fill: 'solid', number: 3, shape: 'squiggle' },
        { color: 'red', fill: 'empty', number: 1, shape: 'diamond' },
        { color: 'red', fill: 'empty', number: 1, shape: 'oval' },
        { color: 'red', fill: 'empty', number: 1, shape: 'squiggle' },
        { color: 'red', fill: 'empty', number: 2, shape: 'diamond' },
        { color: 'red', fill: 'empty', number: 2, shape: 'oval' },
        { color: 'red', fill: 'empty', number: 2, shape: 'squiggle' },
        { color: 'red', fill: 'empty', number: 3, shape: 'diamond' },
        { color: 'red', fill: 'empty', number: 3, shape: 'oval' },
        { color: 'red', fill: 'empty', number: 3, shape: 'squiggle' },
        { color: 'red', fill: 'striped', number: 1, shape: 'diamond' },
        { color: 'red', fill: 'striped', number: 1, shape: 'oval' },
        { color: 'red', fill: 'striped', number: 1, shape: 'squiggle' },
        { color: 'red', fill: 'striped', number: 2, shape: 'diamond' },
        { color: 'red', fill: 'striped', number: 2, shape: 'oval' },
        { color: 'red', fill: 'striped', number: 2, shape: 'squiggle' },
        { color: 'red', fill: 'striped', number: 3, shape: 'diamond' },
        { color: 'red', fill: 'striped', number: 3, shape: 'oval' },
        { color: 'red', fill: 'striped', number: 3, shape: 'squiggle' },
        { color: 'red', fill: 'solid', number: 1, shape: 'diamond' },
        { color: 'red', fill: 'solid', number: 1, shape: 'oval' },
        { color: 'red', fill: 'solid', number: 1, shape: 'squiggle' },
        { color: 'red', fill: 'solid', number: 2, shape: 'diamond' },
        { color: 'red', fill: 'solid', number: 2, shape: 'oval' },
        { color: 'red', fill: 'solid', number: 2, shape: 'squiggle' },
        { color: 'red', fill: 'solid', number: 3, shape: 'diamond' },
        { color: 'red', fill: 'solid', number: 3, shape: 'oval' },
        { color: 'red', fill: 'solid', number: 3, shape: 'squiggle' },
        { color: 'purple', fill: 'empty', number: 1, shape: 'diamond' },
        { color: 'purple', fill: 'empty', number: 1, shape: 'oval' },
        { color: 'purple', fill: 'empty', number: 1, shape: 'squiggle' },
        { color: 'purple', fill: 'empty', number: 2, shape: 'diamond' },
        { color: 'purple', fill: 'empty', number: 2, shape: 'oval' },
        { color: 'purple', fill: 'empty', number: 2, shape: 'squiggle' },
        { color: 'purple', fill: 'empty', number: 3, shape: 'diamond' },
        { color: 'purple', fill: 'empty', number: 3, shape: 'oval' },
        { color: 'purple', fill: 'empty', number: 3, shape: 'squiggle' },
        { color: 'purple', fill: 'striped', number: 1, shape: 'diamond' },
        { color: 'purple', fill: 'striped', number: 1, shape: 'oval' },
        { color: 'purple', fill: 'striped', number: 1, shape: 'squiggle' },
        { color: 'purple', fill: 'striped', number: 2, shape: 'diamond' },
        { color: 'purple', fill: 'striped', number: 2, shape: 'oval' },
        { color: 'purple', fill: 'striped', number: 2, shape: 'squiggle' },
        { color: 'purple', fill: 'striped', number: 3, shape: 'diamond' },
        { color: 'purple', fill: 'striped', number: 3, shape: 'oval' },
        { color: 'purple', fill: 'striped', number: 3, shape: 'squiggle' },
        { color: 'purple', fill: 'solid', number: 1, shape: 'diamond' },
        { color: 'purple', fill: 'solid', number: 1, shape: 'oval' },
        { color: 'purple', fill: 'solid', number: 1, shape: 'squiggle' },
        { color: 'purple', fill: 'solid', number: 2, shape: 'diamond' },
        { color: 'purple', fill: 'solid', number: 2, shape: 'oval' },
        { color: 'purple', fill: 'solid', number: 2, shape: 'squiggle' },
        { color: 'purple', fill: 'solid', number: 3, shape: 'diamond' },
        { color: 'purple', fill: 'solid', number: 3, shape: 'oval' },
        { color: 'purple', fill: 'solid', number: 3, shape: 'squiggle' }
      ]
    this.Deck = this.shuffle(this.cards);
    this.deal = function(number){
        const dealtCards = [];
       for(let i = 0; i < number; i++){
           dealtCards.push(this.Deck.pop())
       } 
       console.log(dealtCards)
       return dealtCards
    }
}
