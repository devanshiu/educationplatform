var aAudio = new Audio('sounds/A.wav');
var bAudio = new Audio('sounds/B.wav');
var cAudio = new Audio('sounds/C.wav');
var dAudio = new Audio('sounds/D.wav');
var eAudio = new Audio('sounds/E.wav');
var fAudio = new Audio('sounds/F.wav');
var gAudio = new Audio('sounds/G.wav');
var hAudio = new Audio('sounds/H.wav');
var iAudio = new Audio('sounds/I.wav');
var jAudio = new Audio('sounds/J.wav');
var kAudio = new Audio('sounds/K.wav');
var lAudio = new Audio('sounds/L.wav');
var mAudio = new Audio('sounds/M.wav');
var nAudio = new Audio('sounds/N.wav');
var oAudio = new Audio('sounds/O.wav');
var pAudio = new Audio('sounds/P.wav');
var qAudio = new Audio('sounds/Q.wav');
var rAudio = new Audio('sounds/R.wav');
var sAudio = new Audio('sounds/S.wav');
var tAudio = new Audio('sounds/T.wav');
var uAudio = new Audio('sounds/U.wav');
var vAudio = new Audio('sounds/V.wav');
var xAudio = new Audio('sounds/X.wav');
var yAudio = new Audio('sounds/Y.wav');
var zAudio = new Audio('sounds/Z.wav');

function alphabetAudio(letter) {
    if(letter == 'a') {
        aAudio.play();
    } else if(letter == 'b') {
        bAudio.play();
    } else if(letter == 'c') {
        cAudio.play();
    } else if(letter == 'd') {
        dAudio.play();
    } else if(letter == 'e') {
        eAudio.play();
    } else if(letter == 'f') {
        fAudio.play();
    } else if(letter == 'g') {
        gAudio.play();
    } else if(letter == 'h') {
        hAudio.play();
    } else if(letter == 'i') {
        iAudio.play();
    } else if(letter == 'j') {
        jAudio.play();
    } else if(letter == 'k') {
        kAudio.play();
    } else if(letter == 'l') {
        lAudio.play();
    } else if(letter == 'm') {
        mAudio.play();
    } else if(letter == 'n') {
        nAudio.play();
    } else if(letter == 'o') {
        oAudio.play();
    } else if(letter == 'p') {
        pAudio.play();
    } else if(letter == 'q') {
        qAudio.play();
    } else if(letter == 'r') {
        rAudio.play();
    } else if(letter == 's') {
        sAudio.play();
    } else if(letter == 't') {
        tAudio.play();
    } else if(letter == 'u') {
        uAudio.play();
    } else if(letter == 'v') {
        vAudio.play();
    } else if(letter == 'w') {
        wAudio.play();
    } else if(letter == 'x') {
        xAudio.play();
    } else if(letter == 'y') {
        yAudio.play();
    } else if(letter == 'z') {
        zAudio.play();
    }
}

document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'blue',
      img: 'images/colors/blue.jpg'
    },
    {
      name: 'green',
      img: 'images/colors/green.jpg'
    },
    {
      name: 'red',
      img: 'images/colors/red.jpg'
    },
    {
      name: 'yellow',
      img: 'images/colors/yellow.jpg'
    },
    {
      name: 'red',
      img: 'images/colors/red.jpg'
    },
    {
      name: 'black',
      img: 'images/colors/black.jpg'
    },
    {
      name: 'blue',
      img: 'images/colors/blue.jpg'
    },
    {
      name: 'brown',
      img: 'images/colors/brown.jpg'
    },
    {
      name: 'yellow',
      img: 'images/colors/yellow.jpg'
    },
    {
      name: 'brown',
      img: 'images/colors/brown.jpg'
    },
    {
      name: 'green',
      img: 'images/colors/green.jpg'
    },
    {
      name: 'black',
      img: 'images/colors/black.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/colors/card.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/colors/card.png')
      cards[optionTwoId].setAttribute('src', 'images/colors/card.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/colors/white.png')
      cards[optionTwoId].setAttribute('src', 'images/colors/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/colors/card.png')
      cards[optionTwoId].setAttribute('src', 'images/colors/card.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})