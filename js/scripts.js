var pigLatin = function(input) {


  if (input[0] === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
    return (input + "ay")
  } else {
    return input.slice(1) + input[0] + 'ay';
  }
};



$(document).ready(function() {
  $("form").submit(function(event) {
    var input = ("input#user").val();



    $("#result").text(pigLatin);
    event.preventDefault();
  });
});


else {
  return ((slice(input[0,1])) + "ay")
  }
