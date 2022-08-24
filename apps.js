function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverb = document.getElementById("adverb").value;



    document.getElementById("sentence").innerHTML = sentence(verb, adverb, person, place, adj)
}

function  sentence(verb, adverb, person, place, adj){
    sentenceArray = [`Today I had to ${verb}${adverb}. But right in the middle of it
    ${person} came with this ${adj} book and wanted to go to ${place}`, `${person} was 
    in ${place} trying to ${verb}. However ${person} left a ${adj} shirt behind, while crying ${adverb}.`,`
    It's been a long time since ${person} decided to ${verb} in ${place}. What some people said that ${person} 
    screamed "this strawberry is ${adj}!!" We thought ${person} went crazy.`]
    

    ranN = Math.floor(Math.random() * sentenceArray.length)

    
}