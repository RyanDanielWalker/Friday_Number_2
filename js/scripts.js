// USER INTERFACE LOGIC
$(document).ready(function(){
  $("form#survey").submit(function(){
    event.preventDefault();
    const number1 = parseInt($("#disco").val());

    $("#output").text(number1);
  });


});