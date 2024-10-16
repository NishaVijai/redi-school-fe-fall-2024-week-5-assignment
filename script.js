console.log("Week 5 - class assignment");

const greeting = "hello";

const lengthOfVariable = (string) => {
  console.log("string.length: ", string.length);
  return string.length;
};

const convertStringToUpperCase = (string) => {
  console.log("string.toUpperCase(): ", string.toUpperCase());
  return string.toUpperCase();
};

const splitStringValue = (string) => {
  console.log("string.split(''): ", string.split(""));
  return string.split("");
};

const convertFirstLetterOfStringValueToUpperCase = (string) => {
  let [firstLetter, ...rest] = string;
  let capitalizeFirstLetter = firstLetter.toUpperCase();
  let result = [capitalizeFirstLetter, ...rest].join("");
  // console.log("Capitalize first letter of a string: ", result);
  console.log(`Capitalize first letter of a "${string}" using convertFirstLetterOfStringValueToUpperCase: ${result}`);
  return result;
};

const convertFirstLetterOfStringValueToUpperCaseUsingSlice = (string) => {
  let firstCharacterOfAString = string.charAt(0);
  let capitalizeFirstCharacterOfAString = firstCharacterOfAString.toUpperCase();
  let restOfAString = string.slice(1);
  let result = capitalizeFirstCharacterOfAString + restOfAString;
  // console.log("Capitalize first letter of a string: ", result);
  console.log(`Capitalize first letter of a "${string}"using convertFirstLetterOfStringValueToUpperCaseUsingSlice: ${result}`);
  return result;
};

const isFirstLetterOfUpperCase = (value, string) => {
  let result = convertFirstLetterOfStringValueToUpperCaseUsingSlice(string) === value;
  console.log(`convert string - "${string}" - first letter, using convertFirstLetterOfStringValueToUpperCaseUsingSlice method & compare with passed argument value: "${value}" using isFirstLetterOfUpperCase : ${result}`);
  return result;
};

const logOnConsole = (message) => console.log(`${message}`);

logOnConsole(greeting);

lengthOfVariable(greeting);
convertStringToUpperCase(greeting);
splitStringValue(greeting);
convertFirstLetterOfStringValueToUpperCase(greeting);
convertFirstLetterOfStringValueToUpperCaseUsingSlice(greeting);

isFirstLetterOfUpperCase("Hello", greeting);
isFirstLetterOfUpperCase("hello", greeting);

const bodyElement = document.querySelector("main");
const createButtonElement = document.createElement("button");

bodyElement.append(createButtonElement);
// bodyElement.appendChild(createButtonElement);
createButtonElement.classList.add("button_element");
const buttonText = "Add to cart";
const buttonUpdatedText = "Added to cart 😍";
// const buttonUpdatedText = "Added to cart" + `&#128540;`;
createButtonElement.textContent = buttonText;

const onClickChangeButtonStyleHandler = () => {
  createButtonElement.textContent = buttonUpdatedText;
  createButtonElement.classList.add("button_on_click");
};

const onClickRemoveButtonStyleHandler = () => {
  createButtonElement.textContent = buttonText;
  createButtonElement.classList.remove("button_on_click");
};

const setTimeOutForSomeTime = (functionName, time) => {
  setTimeout(functionName, time);
};

// Add a button (PreventSetTimeout) and use the following clearTimeout to prevent setTimeout.
// const clearTimeoutAfterSomeTime = (functionName, time) => {
//   console.log("clearTimeoutAfterSomeTime");
//   clearTimeout(functionName, time);
// };

createButtonElement.addEventListener("click", () => {
  onClickChangeButtonStyleHandler();
  setTimeOutForSomeTime(onClickRemoveButtonStyleHandler, 2000);
  // setTimeOutForSomeTime(onClickRemoveButtonStyleHandler, 1000);
});

// --------------------------
// Slide 22/40
// TODO: Form element exercise with event listeners

// --------------------------
// Slide 25/40

// Basic Operators
let a, b, c, d;
a = 1;
b = 1;
console.log("At first exectution, value of a: ", a);
console.log("At first exectution, value of b: ", b);
console.log("At first exectution, value of c: ", c);
console.log("At first exectution, value of d: ", d);

c = ++a;
console.log("Second exectution, value of a, due to ++a: ", a);
console.log("c: ", c);
// c:  2

d = b++;
console.log("Second exectution, value of b, because of b++: ", b);
console.log("d: ", d);
// d:  1


// --------------------------

// Create an accordion that expands on click:
// 1. Build the HTML.
// 2. Add the functionality with JS:
// ● The icon should be rotated on click.
// ● Toggling the accordion should
// show/hide the text underneath.


