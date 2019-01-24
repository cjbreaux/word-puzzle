$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var outputText = $("input#inputSentence").val();
    var output = ""

    for(i=0 ;i<outputText.length; i+=1) {
      if(outputText[i]==="a" || outputText[i]==="e" || outputText[i]==="i" || outputText[i]==="o" || outputText[i]==="u"){
      	output+="-";
      } else {
      	output+=outputText[i];
     	 }
    }

    $("#outputSentence").text(output);
    $(".outputSentence").show();
    $("form").hide();

    $("button#answerBtn").click(function(){
      $("#answer").text(outputText);
    })

  })


});
