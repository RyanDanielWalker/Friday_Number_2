$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#number1").val());
    const number2 = parseInt($("#number2").val());
    const number3 = parseInt($("#number3").val());
    const number4 = parseInt($("#number4").val());
    const number5 = parseInt($("#number5").val());
    const result = (number1 + number2 + number3 + number4 + number5);
    if (result <= 5) {
      $("#ruby").fadeIn() + $("#surveyCard").fadeOut();
    } else if (result > 5 && result <= 10) {
      $("#javascript").fadeIn() + $("#surveyCard").fadeOut();
    } else if (result > 10) {
      $("#cSharp").fadeIn() + $("#surveyCard").fadeOut();
    }
  });
  $("#name").submit(function(event){
    const name = $("input#person1").val();
    event.preventDefault();
    if (name) {
      $("#surveyCard").fadeIn(1000) + $("#name").fadeOut(100);
    }
    else {
      alert("Please enter a name!");
    }
    $(".userName").text(name);
  });
    
  
  

    
  


    
    
    
  
  

    






    
    

});