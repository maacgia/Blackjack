let deck = [];


const crearBaraja = () => {
   for (let i = 2; i < 15; i++) {
      let letra1 = ''
      letra1 = (i == 11) ? (letra1 = 'J') : (i == 12) ? (letra1 = 'Q') : (i == 13) ? (letra1 = 'K') : (i == 14) ? (letra1 = 'A') : ""
      for (let j = 0; j < 4; j++) {
         let carta = ""
         carta = (j == 0) ? carta = 'C'
            : (j == 1) ? carta = 'D'
               : (j == 2) ? carta = 'H'
                  : (j == 3) ? carta = 'S' : "";

         if (i > 10) {
            deck.push(`${letra1}${carta}`)

         }
         else {
            deck.push(`${i}${carta}`)
         }
      }
   }

   return deck = _.shuffle(deck);
}

console.log(crearBaraja());

const pedirCarta = () => {
   if (deck.length === 0) {
      throw 'NO hay cartas en el deck'
   }

   const carta = deck.pop();
   return carta
}
console.log(pedirCarta())

console.log(deck)