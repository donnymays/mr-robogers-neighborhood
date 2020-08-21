$(document).ready(function() {
  $("form#formOne").click(function(event) {
    event.preventDefault();
   
    
    var nameInput = $("input#name").val();
    var numInput = parseInt($("input#numInput").val());
    var resultArray = robotTranslate(numInput);
    
    var results = resultArray.map(function(robotNum) {
      $("#resultList").append("<span>" + robotNum + "</span>");
    });
    
    $("span").each(function(index) {
      $(this).delay(400*index).fadeIn(300, function() {
        $(this).delay(100000*index).fadeOut(30000);
      });
    });
    
    $('.name').text(nameInput);


    // $("#result").text(robotTranslate(numInput));



  });
});

var robotTranslate = function(numInput) {
  var numArr = [];
  for (let i = 0; i <= numInput; i++) { 
    if (i.toString().includes("3")) {
      numArr.push("Won't you be my neighbor, <span class='name'><span/>?");
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

    
