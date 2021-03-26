function add(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5 
}





// USER INTERFACE LOGIC
$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#number1").val());
    const number2 = parseInt($("#number2").val());
    const number3 = parseInt($("#number3").val());
    const number4 = parseInt($("#number4").val());
    const number5 = parseInt($("#number5").val());
    // const result = parseInt($(number1 + number2 + number3 + number4 + number5).val());
    const result = parseInt($(number1 + number2 + number3 + number4 + number5).add());
    
    if (result > 1) {
      $("#ruby").fadeIn();
    }

    

  });

  $("#name").submit(function(event){
    const name = $("input#person1").val();
    
    $(".userName").text(name);
    
    if (name) {
      $("#survey").fadeIn() + $("#name").fadeOut();
    }
    else {
      alert("Please enter a name!");
    }
    
    event.preventDefault();
  });
  
  

    






    
    

});