$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var numInput = parseInt($("input#numInput").val());
    var resultArray = robotTranslate(numInput);
    var results = resultArray.map(function(input) {
      $("#resultList").append("<span>" + input + ", " + "</span>");
    })
    // $("#result").text(robotTranslate(numInput));



  });
});

var robotTranslate = function(numInput) {
  var numArr = [];
  for (let i = 0; i <= numInput; i++) { 
    if (i.toString().includes("3")) {
      numArr.push(" Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      numArr.push(" Boop!");
    } else if (i.toString().includes("1")) {
      numArr.push(" Beep!");   
    } else { 
      numArr.push(" " + i);
    }
  }
  return numArr;
}

    
