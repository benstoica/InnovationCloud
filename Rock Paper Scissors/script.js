const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput = "rock" || "paper" || "scissors") {
    return userInput;
  }
  else {
   console.log("Error!"); 
  };
};

const getComputerChoice = () => {
  compChoice = Math.floor(Math.random() * 3);
  switch(compChoice) {
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper'
      break;
    case 2:
     	return 'scissors'
     	break;
	};
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if(computerChoice === 'paper'){
      return 'The computer won!';
    }
    else {
      return 'You Won!';
    };
  };
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    }
    else {
      return 'You Won!';
    };
  };
 if (userChoice === 'scissors') {
   if (computerChoice === 'rock') {
     return 'The computer won!';
   }
   else {
     return 'You Won!';
   };
 };
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}`);
  console.log(`The computer threw ${computerChoice}`);
  
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
