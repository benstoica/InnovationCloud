let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "Will I go out tonight?";
let randomNumber = Math.floor(Math.random() * 7);
let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "Sorry, I've got nothing";
    break;
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Don't count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  case 8:
    eightBall = "Signs point to yes";
    break;
   };

console.log(userQuestion);
console.log(eightBall);
    
                   
                    