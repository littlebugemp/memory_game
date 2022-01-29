document.addEventListener('DOMContentLoaded',()=>{
    //card options
    const cardArray = [
        {
            name:"img2",
            img:"images/img2.jpg"
        },
        {
            name:"img2",
            img:"images/img2.jpg"
        },
        {
            name:"img4",
            img:"images/img4.jpg"
        },
        {
            name:"img5",
            img:"images/img5.jpg"
        },
        {
            name:"img6",
            img:"images/img6.jpg"
        },
        {
            name:"img3",
            img:"images/img3.jpg"
        },
        {
            name:"img4",
            img:"images/img4.jpg"
        },
        {
            name:"img5",
            img:"images/img5.jpg"
        },
        {
            name:"img6",
            img:"images/img6.jpg"
        },
        {
            name:"img7",
            img:"images/img7.png"
        },
        {
            name:"img7",
            img:"images/img7.png"
        },
        {
            name:"img3",
            img:"images/img3.jpg"
        },
    ]

    cardArray.sort(()=> 0.5 - Math.random)

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board
function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src','images/blank.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert("You Found A Match")
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/blank.jpg')
        cards[optionTwoId].setAttribute('src','images/blank.jpg')
        alert("Sorry, Try Again")
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "Congratulations! You Found These All"
    }
}

//flip your card
function flipcard(){
    var cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch,500)
    }
}

createBoard()




})

