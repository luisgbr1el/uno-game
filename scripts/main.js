allCards = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Invert", "Block", "+2", "+4 Change Color", "Change Color" ];
colors = [ "blue", "red", "yellow", "green" ];

(function() {
    //shuffleRobot();
    shuffleCards('user');
})();

function colorDecider(card) {
    if (card != allCards[13] && card != allCards[14]) {
        return colors[Math.floor(Math.random()*colors.length)];
    } else {
        return "white";
    }
}

function shuffleRobot() {
    robotCards = [];
}

function newCard() {
    card = allCards[Math.floor(Math.random()*allCards.length)];
    color = colorDecider(card);

    return {
        card: card,
        color: color
    };
}

function shuffleCards(div) {
    userCardsDiv = document.getElementById(div);
    let userCards = [];
    cards = '';
    while (userCards.length < 7) {
    
        let newCardVar = newCard();
        if (userCards.includes(newCardVar)) {
           
            newCardVar = newCard();
            userCards.push(newCardVar);
        } else {
            newCardVar = newCard();
            userCards.push(newCardVar);
        }
        
        cards += `<p class="card" style="border: 2px solid ${newCardVar.color}">${newCardVar.card}</p>`;
        
    }
    userCardsDiv.innerHTML = cards;
    
    console.log(userCards);
}

function newCards() {
    console.log(allCards);
};