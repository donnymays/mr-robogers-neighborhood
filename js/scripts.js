var robotTranslate = function(numInput, nameInput) {
  let numArr = [];
   for (let i = 0; i <= numInput; i++) { 
     if (i.toString().includes("3")) {
       numArr.push("Won't you be my neighbor, " + nameInput + "?");
     } else if (i.toString().includes("2")) {
       numArr.push(" Boop!");
     } else if (i.toString().includes("1")) {
       numArr.push(" Beep!");   
     } else { 
       numArr.push(" " + i);
     };
   };
   return numArr;
 };  
 
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();   

    var numInput = parseInt($("input#numInput").val());
    var nameInput = $("input#name").val();
    $("input#numInput").val("");
    $("input#name").val("");
    $('.name').text(nameInput);

    if (nameInput === "")  {
      alert("Please Enter Your Name!");
    } else {
      var resultArray = robotTranslate(numInput, nameInput);
      
      resultArray.map(function(robotNum) {
        var resultList = $("#resultList");
        resultList.append("<span>" + robotNum + "</span>");
      });
      $("resultlist#span").each(function(index) {
        $(this).delay(600*index).fadeIn(600, function() {
         $(this).delay(500).remove();
        });
      }); 
    };  
  });
});
