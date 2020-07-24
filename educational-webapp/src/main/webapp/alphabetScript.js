function renderCards() {
    const audios =
      ['sounds/A.wav', 'sounds/B.wav', 'sounds/C.wav', 'sounds/D.wav', 'sounds/E.wav',
      'sounds/F.wav', 'sounds/G.wav', 'sounds/H.wav', 'sounds/I.wav', 'sounds/J.wav',
      'sounds/K.wav', 'sounds/L.wav', 'sounds/M.wav', 'sounds/N.wav', 'sounds/O.wav',
      'sounds/P.wav', 'sounds/Q.wav', 'sounds/R.wav', 'sounds/S.wav', 'sounds/T.wav',
      'sounds/U.wav', 'sounds/V.wav', 'sounds/W.wav', 'sounds/X.wav', 'sounds/Y.wav',
      'sounds/Z.wav'];

    const audioChosen = audios[Math.floor(Math.random() * audios.length)];

    let soundHashMap = new Map([
        ["sounds/A.wav", 'A'],
        ["sounds/B.wav", 'B'],
        ["sounds/C.wav", 'C'],
        ["sounds/D.wav", 'D'],
        ["sounds/E.wav", 'E'],
        ["sounds/F.wav", 'F'],
        ["sounds/G.wav", 'G'],
        ["sounds/H.wav", 'H'],
        ["sounds/I.wav", 'I'],
        ["sounds/J.wav", 'J'],
        ["sounds/K.wav", 'K'],
        ["sounds/L.wav", 'L'],
        ["sounds/M.wav", 'M'],
        ["sounds/N.wav", 'N'],
        ["sounds/O.wav", 'O'],
        ["sounds/P.wav", 'P'],
        ["sounds/Q.wav", 'Q'],
        ["sounds/R.wav", 'R'],
        ["sounds/S.wav", 'S'],
        ["sounds/T.wav", 'T'],
        ["sounds/U.wav", 'U'],
        ["sounds/V.wav", 'V'],
        ["sounds/W.wav", 'W'],
        ["sounds/X.wav", 'X'],
        ["sounds/Y.wav", 'Y'],
        ["sounds/Z.wav", 'Z']
    ]);

    var z = document.createElement("AUDIO");

    if (z.canPlayType("audio/ogg")) {
        z.setAttribute("src",audioChosen);
    } else {
        z.setAttribute("src",audioChosen);
    }
    z.setAttribute("controls", "controls");
    document.body.appendChild(z);

    var index = Math.floor(Math.random() * 4);

    const letters =
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const firstLetter = letters[Math.floor(Math.random() * letters.length)];
    const secondLetter = letters[Math.floor(Math.random() * letters.length)];
    const thirdLetter = letters[Math.floor(Math.random() * letters.length)];
    const fourthLetter = letters[Math.floor(Math.random() * letters.length)];

    var card1 = document.createElement("BUTTON");
    var first = document.createTextNode(firstLetter);
    card1.appendChild(first);
    card1.style.width = "200px";
    card1.style.height = "200px";
    card1.style.backgroundColor = "rgb(175, 240, 172)";
    card1.style.fontSize = "50px";
    card1.style.position = "relative";
    card1.style.position = "relative";
    card1.style.fontFamily = "Bungee Shade";
    document.body.appendChild(card1);


    var card2 = document.createElement("BUTTON");
    var second = document.createTextNode(secondLetter);
    card2.appendChild(second);
    card2.style.width = "200px";
    card2.style.height = "200px";
    card2.style.backgroundColor = "rgb(235, 187, 224)";
    card2.style.fontSize = "50px";
    card2.style.fontFamily = "Bungee Shade";
    document.body.appendChild(card2);

    var card3 = document.createElement("BUTTON");
    var third = document.createTextNode(thirdLetter);
    card3.appendChild(third);
    card3.style.width = "200px";
    card3.style.height = "200px";
    card3.style.backgroundColor = "rgb(196, 170, 232)";
    card3.style.fontSize = "50px";
    card3.style.fontFamily = "Bungee Shade";
    document.body.appendChild(card3);

    var card4 = document.createElement("BUTTON");
    var fourth = document.createTextNode(fourthLetter);
    card4.appendChild(fourth);
    card4.style.width = "200px";
    card4.style.height = "200px";
    card4.style.backgroundColor = "rgb(151, 227, 224)";
    card4.style.fontSize = "50px";
    card4.style.fontFamily = "Bungee Shade";
    document.body.appendChild(card4);

    if(index == 0){
        var t = document.createTextNode(soundHashMap.get(audioChosen));
        card1.removeChild(card1.firstChild);
        card1.appendChild(t);
        card1.addEventListener("click", function(){ evaluateResponse(t, t); });
        card2.addEventListener("click", function(){ evaluateResponse(second, t); });
        card3.addEventListener("click", function(){ evaluateResponse(third, t); });
        card4.addEventListener("click", function(){ evaluateResponse(fourth, t); });
    }
    else if(index == 1){
        var t = document.createTextNode(soundHashMap.get(audioChosen));
        card2.removeChild(card2.firstChild);
        card2.appendChild(t);
        card1.addEventListener("click", function(){ evaluateResponse(first, t); });
        card2.addEventListener("click", function(){ evaluateResponse(t, t); });
        card3.addEventListener("click", function(){ evaluateResponse(third, t); });
        card4.addEventListener("click", function(){ evaluateResponse(fourth, t); });
    }
    else if(index == 2){
        var t = document.createTextNode(soundHashMap.get(audioChosen));
        card3.removeChild(card3.firstChild);
        card3.appendChild(t);
        card1.addEventListener("click", function(){ evaluateResponse(first, t); });
        card2.addEventListener("click", function(){ evaluateResponse(second, t); });
        card3.addEventListener("click", function(){ evaluateResponse(t, t); });
        card4.addEventListener("click", function(){ evaluateResponse(fourth, t); });
    }
    else{
        var t = document.createTextNode(soundHashMap.get(audioChosen));
        card4.removeChild(card4.firstChild);
        card4.appendChild(t);
        card1.addEventListener("click", function(){ evaluateResponse(first, t); });
        card2.addEventListener("click", function(){ evaluateResponse(second, t); });
        card3.addEventListener("click", function(){ evaluateResponse(third, t); });
        card4.addEventListener("click", function(){ evaluateResponse(t, t); });
    }
}

function evaluateResponse(letter, answer) {
    if(letter == answer){
        alert("Correct!");
    }
    else{
        alert("Incorrect.");
    }
}