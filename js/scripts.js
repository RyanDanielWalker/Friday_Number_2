





// USER INTERFACE LOGIC
$(document).ready(function(){
  $("form#survey").submit(function(){
    event.preventDefault();
    const number1 = parseInt($("#number1").val());
    const number2 = parseInt($("#number2").val());
    const number3 = parseInt($("#number3").val());
    const number4 = parseInt($("#number4").val());
    const number5 = parseInt($("#number5").val());

    const result = $("#output").text(number1 + number2 + number3 + number4 + number5)

  });

  $("#name").submit(function(event){
    const name = $("input#person1").val();
    
    $(".userName").text(name);
    
    event.preventDefault();
    
  });
    

    






    
    

});