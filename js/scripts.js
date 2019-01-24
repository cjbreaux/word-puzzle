$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var outputText = $("input#inputSentence").val();
    $("#outputSentence").text(outputText);
    $(".outputSentence").show();
  })
});
