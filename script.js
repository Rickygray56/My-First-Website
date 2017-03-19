var myButton = document.getElementById("button");

myButton.addEventListener("click",function(){
  countWords();
});

function countWords() {

  var x = document.getElementById("userinput").value;

  var wordCount = 1;

  var spaceCount = 0;

  var sentenceCount = 0;

  for(var i = 0; i <= x.length; i++) {
    if(x[i] == " ") {
      wordCount++;
      spaceCount++;
    }
    if(x[i] == "." || x[i] == "!" || x[i] == "?") {
      sentenceCount++;
    }
  }

  var averageWords = wordCount / sentenceCount;

  document.getElementById("wordcount").innerHTML = "There are a total of" +
  " " + wordCount + " " + "words";

  document.getElementById("spacecount").innerHTML = "There are a total of" +
  " " + spaceCount + " " + "spaces";

  document.getElementById("sentencecount").innerHTML = "There are a total of" +
  " " + sentenceCount + " " + "sentences";

  document.getElementById("wordaverage").innerHTML = "There are an average of" +
  " " + averageWords + " " + "words per sentence";
}
