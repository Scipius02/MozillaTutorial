// 1
if (season.includes('summer')) {
    response = "It's goddamn hot out!";
  } else if (season.includes('winter')){
      response = "It's cold as shit, son.";
  } else {
      response = "I have no idea what time of year it is.";
  }

// 2
let response;
let score = 75;
let machineActive = true;

// Add your code here
if (machineActive) {
  if (score < 0 || score > 100) {
    response = "This is not possible, an error has occurred.";
 } else if (score > 0 && score < 20) {
    response = "That was a terrible score — total fail!";
 } else if (score > 19 && score < 40) {
    response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
 } else if (score > 39 && score < 70) {
    response = "You did a passable job, not bad!";
 } else if (score > 69 && score < 90) {
    response = "That\'s a great score, you really know your stuff.";
 } else if (score > 89 && score < 101) {
    response = "What an amazing score! Did you cheat? Are you for real?";
 } 
} else {
    response = "Turn the shit on!";
}

// 3

let response;
let score = 75;
let machineActive = true;

// Add your code here
if (machineActive) {
  switch(true) {
    case (score < 0):
      response = "This is not possible, an error has occurred.";
      break;
    case (score > 100):
      response = "This is not possible, an error has occurred.";
      break;
    case (score < 20):
      response = "That was a terrible score — total fail!";
      break;
    case (score < 40):
      response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
      break;
    case (score < 70):
      response = "You did a passable job, not bad!";
      break;
    case (score < 90):
      response = "That\'s a great score, you really know your stuff.";
      break;
    case (score < 101):
      response = "What an amazing score! Did you cheat? Are you for real?";
      break;
    } 
} else {
    response = "Turn the shit on!";
}

// 4

let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here
if (machineActive) {
  machineResult = "Machine is on.";
  (pwd === 'cheese') ? pwdResult = "Login successful!" : pwdResult = "Login unsuccessful.";
} else {
  machineResult = "Machine is on.";
}