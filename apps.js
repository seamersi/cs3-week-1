function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverb = document.getElementById("adverb").value;



    document.getElementById("sentences").innerHTML = sentences(verb, adverb, person, place, adj);
}

function  sentences(verb, adverb, person, place, adj){
    sentenceArray = [`Today I had to ${verb} ${adverb}. But right in the middle of it
    ${person} came with this ${adj} book and wanted to go to ${place}`, `${person} was 
    in ${place} trying to ${verb}. However ${person} left a ${adj} shirt behind, while crying ${adverb}.`,`
    It's been a long time since ${person} decided to ${verb} in ${place}. What some people said that ${person} 
    screamed "this strawberry is ${adj}!!" We ßhought ${person} went crazy.`];
    

    ranN = Math.floor(Math.random() * sentenceArray.length);

    return sentenceArray[ranN]; 
    
}
// game 2 

var a = [1, 2, 4, 9]

var wordArr = [
    {
        word: "dog",
        hint: "Company you keep at home"
    },
    {
        word: "place",
        hint: "Somewhere at any time"
    },
    {
        word: "tree",
        hint: "it grows from the ground"
    },
    {
        word:"computer",
        hint:"You're using it right now"

    }
]

var rN = Math.floor(Math.random() * wordArr.length);

var word = wordArr[rN].word;
var hint = wordArr[rN].hint;
var correct = []
var counter = word.length + 2

document.getElementById("word").innerHTML = word;
document.getElementById("hint").innerHTML = hint;
document.getElementById("wrong").innerHTML = counter;

var splitWord = word.split("");

var emptySplitword = [];



for (i = 0; i < splitWord.length; i++) {
    emptySplitword[i] = "-"
    console.log(emptySplitword)
    document.getElementById("word").innerHTML = emptySplitword.join(" ")
}

function enterLetter() {
    var letter = document.getElementById("letter").value

    for( x = 0; x < splitWord.length; x++) {
        if(letter == splitWord[x]) {
            emptySplitword[x] = letter;
            document.getElementById("word").innerHTML = emptySplitword.join(" ");
            document.getElementById("letter").value = "";
            correct.push(1)

        }
        else{
            document.getElementById("letter").value = "";
        }
    }

    if(correct.length == emptySplitword.length){
        alert("You got it WRONG (just kidding you got)")
    }else if(counter > 1){
        counter -= 1;
        document.getElementById("wrong").innerHTML = counter
    } else if(counter == 1) {
        alert("you lost")   
    }
}