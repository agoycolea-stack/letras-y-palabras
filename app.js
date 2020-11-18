function letterCounting(){

  var str = document.querySelector("#texto").textContent.toLowerCase().replace(/[\W_]+/g," ");
  
  var div = document.getElementById("resultados")

  var abecedario = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  for (letter of abecedario){

    var otra = new RegExp("[" + letter + "]", "g")

    var encuentra = str.match(otra); 

    if (encuentra){
      var count = encuentra.length
      var parrafo = document.createElement("p");
      var strong = document.createElement("strong");
      var span = document.createElement("span");

      strong.innerHTML = letter + ": ";
      span.innerHTML = count

      parrafo.appendChild(strong);
      parrafo.appendChild(span);
      div.appendChild(parrafo);
    }

  }
}

letterCounting()



function wordCounting(){

  var div = document.getElementById("resultados")

  var palabras = document.querySelector("#texto").textContent.toLowerCase().replace(/[\W_]+/g," ").split(' ') ;

  var search = [];

  palabras.forEach(function(word){
    if(search[word]){ 
      search[word] += 1;
    } 
    else {
      search[word] = 1;
    }
  })

  for(elem in search){
    var parrafo = document.createElement('p')
    var strong = document.createElement('strong')
    var span = document.createElement('span')
    parrafo.appendChild(strong)
    parrafo.appendChild(span)

    strong.innerHTML = elem + ": ";
    span.innerHTML = search[elem]

    parrafo.appendChild(strong);
    parrafo.appendChild(span);
    div.appendChild(parrafo);   
    
    document.getElementById('resultados').appendChild(parrafo)

    }
}

wordCounting()