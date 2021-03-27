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
      $("#ruby").fadeIn(1750) + $("#surveyCard").fadeOut(175);
    } else if (result > 5 && result <= 10) {
      $("#javascript").fadeIn(1750) + $("#surveyCard").fadeOut(175);
    } else if (result > 10) {
      $("#cSharp").fadeIn(1750) + $("#surveyCard").fadeOut(175);
    }
  });
  $("#name").submit(function(event){
    event.preventDefault();
    const name = $("input#person1").val();
    if (name) {
      $("#surveyCard").fadeIn(1750) + $("#card1").fadeOut(175);
    } else {
      alert("Please enter a name!");
    }
    $(".userName").text(name);
});
});


  

    
  


    
    
    
  
  

    






    
    
