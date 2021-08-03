/* 2 */
let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';

// Add your code here
let quoteLength = quote.length;
let index = quote.indexOf(substring);
let revisedQuote = quote.substring(0,14) + substring + quote.charAt(quoteLength-1);
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
let para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);
    

/* 3 */
let quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here
quote = quote.toLowerCase();
let fixedQuote = quote.charAt(0).toUpperCase() + quote.slice(1);;
let finalQuote = fixedQuote.slice(0,14) + 'eggplant.';
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = fixedQuote;
let para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);
    
/* 4 */
let theorem = 'Pythagorean theorem';

let a = 5;
let b = 8;

let myString = `Using *${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of *${a} and *${b}, the length of the hypotenuse is *${Math.sqrt(a**2 + b**2)}.`;

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
    