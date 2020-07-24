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

  // randomly assign values to objects and then sort those values
  cardArray.sort(() => 0.5 - Math.random())
  // layout
  const grid = document.querySelector('.grid')
  // display score
  const resultDisplay = document.querySelector('#result')
  // create empty lists
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      // set new attributes 
      card.setAttribute('src', 'images/colors/card.png')
      card.setAttribute('data-id', i)
      // listener "listens" for clicks
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    // check to see if player clicks on the same card twice
    if(optionOneId == optionTwoId) {
      // leave cards face down  
      cards[optionOneId].setAttribute('src', 'images/colors/card.png')
      cards[optionTwoId].setAttribute('src', 'images/colors/card.png')
      alert('You have clicked the same image!')
    }
    // check to see if both cards selected match
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('It is a match!')
      // replace two cards with a white space when they match
      cards[optionOneId].setAttribute('src', 'images/colors/white.png')
      cards[optionTwoId].setAttribute('src', 'images/colors/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
     // update list
      cardsWon.push(cardsChosen)
    } else {
        // don't flip cards over if not a match  
      cards[optionOneId].setAttribute('src', 'images/colors/card.png')
      cards[optionTwoId].setAttribute('src', 'images/colors/card.png')
      alert('Sorry, it is not a match. Try again!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    // check to see if all cards have been found
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congrats, you found all the cards!'
    }
  }

  // flip card function
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    // adds selected cards to list
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    // user must select two cards
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})