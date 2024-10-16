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

// --------------------------
// Slide 11/40

// Exercise:
// 1. Create this buon using ONLY
// JavaScript.
// 2. Add styles using CSS.
// 3. On click change the background color
// and the text content of the buon.
// 4. Optional - can you make the buon
// change the text and style only for 10
// seconds before it goes back to previous
// state?

const bodyElement = document.querySelector("main");
const createButtonElement = document.createElement("button");
// const emoji_icon_fire = String.fromCodePoint(0x1F525);
const emoji_icon_heart_eyes = String.fromCodePoint(0x1F60D);

bodyElement.append(createButtonElement);
// bodyElement.appendChild(createButtonElement);
createButtonElement.classList.add("button_element");
const buttonText = "Add to cart";
// const buttonUpdatedText = "Added to cart 😍";
const buttonUpdatedText = "Added to cart " + emoji_icon_heart_eyes;
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

const email_input_element = document.getElementById("email");
const select_element_cars_type = document.getElementById("cars");
const checkbox_element_weekly_newsletter = document.getElementById("checkbox");
const form_element_cars_newsletter = document.getElementById("cars_newsletter_form");

const UserDetails = {
  user_email: "",
  user_car_type_preference: "",
  user_weekly_newsletter_checkbox_value: false
};

const form_data = { UserDetails };

const alert_user_to_fill_empty_fields = ({ value }) => alert(`Fields - ${value} are empty, please fill out the form fields`);

const check_empty_form_submission = () => {
  if (UserDetails.user_email == "" || UserDetails.user_email == null) {
    alert_user_to_fill_empty_fields(UserDetails.user_email);
  }
  else if (UserDetails.user_car_type_preference == "" || UserDetails.user_car_type_preference == null) {
    alert_user_to_fill_empty_fields(UserDetails.user_car_type_preference);
  }
  else if (UserDetails.user_weekly_newsletter_checkbox_value == false) {
    alert_user_to_fill_empty_fields(UserDetails.user_weekly_newsletter_checkbox_value);
  }
  else {
    console.log("Form fiels are not empty, can be submitted.");
  }
};

const save_user_email = (event) => {
  form_data.UserDetails.user_email = event.target.value;
  console.log("save_user_email: ", event.target.value);
  return form_data.UserDetails.user_email;
};

const save_user_car_type_preference = (event) => {
  form_data.UserDetails.user_car_type_preference = event.target.value;
  console.log("save_user_car_type_preference: ", event.target.value);
  return form_data.UserDetails.user_car_type_preference;
};

const save_user_weekly_newsletter_checkbox_value = (event) => {
  form_data.UserDetails.user_weekly_newsletter_checkbox_value = event.target.checked;
  console.log("save_user_weekly_newsletter_checkbox_value: ", event.target.checked);
  return form_data.UserDetails.user_weekly_newsletter_checkbox_value;
};

const form_submit_cars_newsletter = (event) => {
  event.preventDefault();
  console.log("Form data - form_submit_cars_newsletter: ", form_data);
  check_empty_form_submission();
  return form_data;
};

email_input_element.addEventListener("input", save_user_email);
select_element_cars_type.addEventListener("change", save_user_car_type_preference);
checkbox_element_weekly_newsletter.addEventListener("input", save_user_weekly_newsletter_checkbox_value);
form_element_cars_newsletter.addEventListener("submit", form_submit_cars_newsletter);

console.log("Form data: ", form_data);

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
// Slide 22/40

// Exercise:
// Create an accordion that expands on click:
// 1. Build the HTML.
// 2. Add the functionality with JS:
// ● The icon should be rotated on click.
// ● Toggling the accordion should
// show/hide the text underneath.


