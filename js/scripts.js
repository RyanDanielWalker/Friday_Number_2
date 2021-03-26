// function add(number1, number2, number3, number4, number5) {
//   return number1 + number2 + number3 + number4 + number5 
// }





// USER INTERFACE LOGIC
$(document).ready(function(){
  $("form#survey").submit(function(event){
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

    
  
    event.preventDefault();

  });

  $("#name").submit(function(event){
    const name = $("input#person1").val();
    
    $(".userName").text(name);
    
    if (name) {
      $("#surveyCard").fadeIn() + $("#name").fadeOut();
    }
    else {
      alert("Please enter a name!");
    }
    
    event.preventDefault();
  });
  
  

    






    
    

});