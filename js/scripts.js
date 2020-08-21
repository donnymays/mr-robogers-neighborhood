// Business Logic

let robotArr = function(input) {
  let numArr = [];
  let numStr = input.toString();
  for (let i = 0; i <= input; i++) { 
    if (numStr.indexOf("1")) {
       numArr.push("Beep!");
    } else { 
      numArr.push(numStr);
    }
  }
  console.log(numArr);
}