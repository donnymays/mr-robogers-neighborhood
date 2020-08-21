// Business Logic

let robotArr = function(input) {
  let numArr = [];
  for (let i = 0; i <= input; i++) { 
    if (i.toString().includes("3")) {
      numArr.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      numArr.push("Boop!");
    } else if (i.toString().includes("1")) {
      numArr.push("Beep!");
      
    } else { 
      numArr.push(i);
    }
  }
  console.log(numArr);
}

