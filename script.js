//// Section 1: Building a Chrome Extension
//// Lesson 1: Add a button and input tag 

// Adding a input element with type="text" and id="input-el"
// Create a save input button with id="input-btn"
// Do this in the HTML 





//// Section 1: Building a Chrome Extension
//// Lesson 2: Style the button and input tag

// Simply styling the SAVE INPUT button and the input tag in index.css





//// Section 1: Building a Chrome Extension
//// Lesson 3: Make the input button work with onclick 

// Log out "button clicked" when the user clicks the "SAVE INPUT" button 

// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function () {
//     console.log("button clicked")
// }) 
// "click" is the event and then you invoke a function 






//// Section 1: Building a Chrome Extension
//// Lesson 4: Write your first addEventListener


// 1. Grab the box from the DOM and store it in a variable 
// 2. Add a click event listener to the box
// 3. Log out "I want to open the box" when clicked 

// let openBox = document.getElementById("box");

// openBox.addEventListener('click', function() {
//     console.log("What's in the box?!")
// })





//// Section 1: Building a Chrome Extension
//// Lesson 5: Your turn to refactor 

// Did this in lesson 4





//// Section 1: Building a Chrome Extension
//// Lesson 6: Create the myLeads array and inputEl 

// Create 2 variables: 
// myLeads - should be assigned to an empty array 
// inputEl - should be assigned to the text input field 

// let myLeads = [];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function () {
//     console.log("button clicked")
// }) 





//// Section 1: Building a Chrome Extension
//// Lesson 7: When to say let and const

// const can be used when there is no need to change the value of a variable 
// let can be used if a value needs to be changed 

// const playerName = "Jesse" 
// let credits = 45 

// credit = credits - 10

// If you try to change a const variable, you will get an error
// If possible, use const. If not, use let 





//// Section 1: Building a Chrome Extension
//// Lesson 8: Push to the myLeads array 

// let myLeads = [];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to my array when the input button is clicked 

// inputBtn.addEventListener("click", function () {
//     console.log("button clicked")
//     myLeads.push("www.awesomeleads.com")
//     console.log(myLeads);
// }) 





//// Section 1: Building a Chrome Extension
//// Lesson 9: Push value from input field

// let myLeads = [];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")


// inputBtn.addEventListener("click", function () {
    // Push the value from the inputEl into the myLeads array
    // Instead of hard-coded "www.awesomelead.com" value
    // Google - "get value from input field javascript"
//     console.log("button clicked")
//     myLeads.push(inputEl.value)
//     console.log(myLeads);
// }) 





//// Section 1: Building a Chrome Extension
//// Lesson 10: Use for loop to log out leads

// let myLeads = ["www.awesomelead.com", "wwww.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function () {
//     console.log("button clicked")
//     myLeads.push(inputEl.value)
//     console.log(myLeads);
//     for(i = 0; i < myLeads.length; i++) {
//         console.log(myLeads[i])
//     }
// }) 

// Log out the items in the myLeads array using a for loop 





//// Section 1: Building a Chrome Extension
//// Lesson 11: Create the unordered list 

// let myLeads = ["www.awesomelead.com", "wwww.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementsByTagName("ul-el")

// inputBtn.addEventListener("click", function () {
//     console.log("button clicked")
//     myLeads.push(inputEl.value)
//     console.log(myLeads);
//     for(i = 0; i < myLeads.length; i++) {
//         console.log(myLeads[i])
//     }
// }) 





//// Section 1: Building a Chrome Extension
//// Lesson 12: Render the leads in the unordered list 


// let myLeads = ["www.awesomelead.com", "wwww.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementsByTagName("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     console.log(myLeads);
// }) 

// for(let i = 0; i < myLeads.length; i++) {
//     ulEl.textContent += myLeads[i] + " "
// }





//// Section 1: Building a Chrome Extension
//// Lesson 13: How to render <li> elements with innerHTML


// let myLeads = ["www.awesomelead.com", "wwww.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementsByTagName("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     console.log(myLeads);
// }) 

// for(let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }





//// Section 1: Building a Chrome Extension
//// Lesson 14: Write your first innerHTML

// Use .innerHTML to render a buy! button inside the div container


// let container = document.getElementById('container')

// container.innerHTML = "<button>" + "BUY NOW!" + "</button>"





//// Section 1: Building a Chrome Extension
//// Lesson 15: More practice with innerHTML

// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>BUY NOW!</button>"

// function buy() {
//     container.innerHTML += "<p> Thank you for purchasing!</p>"
// }



// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"




//// Section 1: Building a Chrome Extension
//// Lesson 16: Render the <li> elements with innerHTML

// let myLeads = ["www.awesomelead.com", "wwww.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementsByTagName("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     console.log(myLeads);
// }) 

// // Replace .textContent with .innerHTML and use <li> tags
// for(let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }





//// Section 1: Building a Chrome Extension
//// Lesson 17: Use createElement() & append() instead of innerHTML

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     console.log(myLeads);
// }) 

// // Replace .textContent with .innerHTML and use <li> tags
// for(let i = 0; i < myLeads.length; i++) {
//     //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//     // create element
//     // set text content
//     // append to ul 
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li);
// }





//// Section 1: Building a Chrome Extension
//// Lesson 20: Improving the performance of the app 

// let myLeads = ["www.epiclead.com", "www.awesomelead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     console.log(myLeads);
// }) 

// Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with 
// let listItems = "" 
// for(let i = 0; i < myLeads.length; i++) {
    // Add the item to the listItems variable instead of the ulEl.innerHTML
//     listItems += "<li>" + myLeads[i] + "</li>"
// }

// ulEl.innerHTML = listItems
// Render the listItems inside the unordered list using ulEl.innerHTMl





//// Section 1: Building a Chrome Extension
//// Lesson 21: Create render function

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     renderLeads();

// }) 


// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }

//     ulEl.innerHTML = listItems
// }





//// Section 1: Building a Chrome Extension
//// Lesson 22: Clear the input field

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     renderLeads();

// }) 


// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }

//     ulEl.innerHTML = listItems
// }





//// Section 1: Building a Chrome Extension
//// Lesson 23: Add the <a> tag 

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     renderLeads();

// }) 


// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         // Wrap the lead in an anchor <a> inside the <li>
//         // can you make the link open in a new tab?
//         listItems += "<li><a href='#'>" + myLeads[i] +  "<a></li>"
//     } // href='#' is pointing to another id or name tag on the same page

//     ulEl.innerHTML = listItems
// }






//// Section 1: Building a Chrome Extension
//// Lesson 24: Write template string

// Template strings/literals

// const recipient = "Jesse"

// // Refactor the email string to use template strings 
// const email = `Hey ${recipient}! How is it going? Cheers John`

// console.log(email)





//// Section 1: Building a Chrome Extension
//// Lesson 25: Make the template string even more dynamic 

// const recipient = "John"
// const sender = "Jesse"
// Create a new variable, sender and set its value to your name

// Use your sender variable instead of "John"
// const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

// console.log(email)





//// Section 1: Building a Chrome Extension
//// Lesson 26: Template strings on multiple lines 

// const recipient = "John"
// const sender = "Jesse"

// Break the email string into multiple lines 
// const email = `Hey ${recipient}!,
// How is it going?,
// Cheers ${sender}`

// console.log(email)





//// Section 1: Building a Chrome Extension
//// Lesson 27: Refractor the app to use a template string

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     renderLeads();

// }) 


// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         // Wrap the lead in an anchor <a> inside the <li>
//         // can you make the link open in a new tab?
//         listItems += `<li> <a target='_blank' href=' ${myLeads[i]}'> ${myLeads[i]} <a> </li>`
//     } // href='#' is pointing to another id or name tag on the same page

//     ulEl.innerHTML = listItems
// }





//// Section 1: Building a Chrome Extension
//// Lesson 28: Style the list 

// Changed the styling in the css file 





//// Section 1: Building a Chrome Extension
//// Lesson 29: Preparing the deployment 

// Creating files to deploy extension 





//// Section 1: Building a Chrome Extension
//// Lesson 30: Deploying the chrome extension 

// Chrome downloaded 





//// Section 1: Building a Chrome Extension
//// Lesson 31: First localStorage

// let myLeads = ["www.example@Alead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads", "www.example@lead.com")
// localStorage.getItem("myLeads")
// console.log(myLeads)

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     renderLeads();

// }) 


// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         // Wrap the lead in an anchor <a> inside the <li>
//         // can you make the link open in a new tab?
//         listItems += "<li><a href='#'>" + myLeads[i] +  "<a></li>"
//     } // href='#' is pointing to another id or name tag on the same page

//     ulEl.innerHTML = listItems
// }






//// Section 1: Building a Chrome Extension
//// Lesson 32: Storing arrays in localStorage

// let myLeads = []

// myLeads = JSON.parse(myLeads)
// myLeads.push('www.lead2.com')
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads) // typeof will tell you what type of data the value is. In this cas myLeads has been turned into a string
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")



// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     renderLeads();

// }) 


// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         // Wrap the lead in an anchor <a> inside the <li>
//         // can you make the link open in a new tab?
//         listItems += "<li><a href='#'>" + myLeads[i] +  "<a></li>"
//     } // href='#' is pointing to another id or name tag on the same page

//     ulEl.innerHTML = listItems
// }





//// Section 1: Building a Chrome Extension
//// Lesson 33: Save the lead to localStorage

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This saves the myLeads to storage 
//     renderLeads();
//     console.log(localStorage.getItem("myLeads"))
// }) 



// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         // Wrap the lead in an anchor <a> inside the <li>
//         // can you make the link open in a new tab?
//         listItems += "<li><a href='#'>" + myLeads[i] +  "<a></li>"
//     } // href='#' is pointing to another id or name tag on the same page

//     ulEl.innerHTML = listItems
// }






//// Section 1: Building a Chrome Extension
//// Lesson 34: Get the leads from localStorage

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// // Get the leads from the localStorage
// // Store it in variable, leadsFromLocalStorage

// const leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 

// // Log out the variable 
// console.log(leadsFromLocalStrorage)


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     renderLeads();
//     console.log(localStorage.getItem("myLeads"))
// }) 



// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         // Wrap the lead in an anchor <a> inside the <li>
//         // can you make the link open in a new tab?
//         listItems += "<li><a href='#'>" + myLeads[i] +  "<a></li>"
//     } // href='#' is pointing to another id or name tag on the same page

//     ulEl.innerHTML = listItems
// }






//// Section 1: Building a Chrome Extension
//// Lesson 35: Truthy and falsy statements

// const credits = 0 

// if (credits > 0) {
//     console.log("Let's Play")
// } else {
//     console.log("Sorry, you have no credits")
// }

// These are the 6 truthy and falsy values

// false
// 0 
// ""
// null -> How I define emptiness
// undefined -> How javascript defines emptiness
// NaN





//// Section 1: Building a Chrome Extension
//// Lesson 36: Guess the expression - truthy or falsy 

// let trueorFalse = Boolean('hello')

// console.log(trueorFalse) // This will come out to be true -- because hello is a value?

// let trueorFalse1 = Boolean('')
// console.log(trueorFalse)  // This will be false -- because an empty string is is a false value 

/// Exercise

// console.log(Boolean('')) // false
// console.log(Boolean('0')) // true
// console.log(Boolean(100)) // true
// console.log(Boolean(null)) // false
// console.log(Boolean([0])) // true -- 0 is a false value but and array is a truth value
// console.log(Boolean(-0)) // false -- doesn't matter if it's negative or positive 0 is a false value





//// Section 1: Building a Chrome Extension
//// Lesson 37: Checking localStorage before rendering 

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")


// let leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 

// if(leadsFromLocalStrorage) {
//     myLeads = leadsFromLocalStrorage
//     renderLeads()
// }


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     renderLeads();
//     console.log(localStorage.getItem("myLeads"))
// }) 



// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         listItems += "<li><a href='#'>" + myLeads[i] +  "<a></li>"
//     } 
//     ulEl.innerHTML = listItems
// }





//// Section 1: Building a Chrome Extension
//// Lesson 38: Style the delete button

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")


// let leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 

// if(leadsFromLocalStrorage) {
//     myLeads = leadsFromLocalStrorage
//     renderLeads()
// }


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     renderLeads();
//     console.log(localStorage.getItem("myLeads"))
// }) 


// deleteBtn.addEventListener("click", function(){

// })


// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         listItems += "<li><a href='#'>" + myLeads[i] +  "<a></li>"
//     } 
//     ulEl.innerHTML = listItems
// }





//// Section 1: Building a Chrome Extension
//// Lesson 39: Make the delet button work 

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")


// const leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 

// if(leadsFromLocalStrorage) {
//     myLeads = leadsFromLocalStrorage
//     renderLeads()
// }

// // 2. Listen for double click on the delete button 
// // 3. When clicked, clear localStorage, myLeads and the DOM

// deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     renderLeads()
// })


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     renderLeads();
//     console.log(localStorage.getItem("myLeads"))
// }) 


// function renderLeads() {
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++) {
//         listItems += "<li><a href='#'>" + myLeads[i] +  "<a></li>"
//     } 
//     ulEl.innerHTML = listItems
// }





//// Section 1: Building a Chrome Extension
//// Lesson 40: How function parameters can improve the code 

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")


// const leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 

// if(leadsFromLocalStrorage) {
//     myLeads = leadsFromLocalStrorage
//     render(myLeads)
// }

// function render(leads) {
//     let listItems = ""
//     for(let i = 0; i < leads.length; i++) {
//         listItems += `<li><a target='_blank' href='${leads[i]}'> ${leads[i]} </a> </li> `
//     } 
//     ulEl.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     render(myLeads);
// }) 





//// Section 1: Building a Chrome Extension
//// Lesson 41: Write first function parameter

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting) {
//     welcomeEl.textContent = greeting + ", Jesse"
// }

// greetUser("Hey")

// This new function wil allow us to pass any name in the function, we gave greetUser a paramater of (name) function (greetUser(name)) and when the function is invoked we pass an argument which would be the name of a person (greetUser(Jesse)). So now when the function is ran it will come out as "Welcome back, Jesse"





//// Section 1: Building a Chrome Extension
//// Lesson 42: functions with multiple parameters 

// const welcomeEl1 = document.querySelector("#welcome-el");

// function greetUser(greeting, name) {
//     welcomeEl1.textContent = `${greeting}, ${name}`
// };

// greetUser("Hey", "Jesse");





//// Section 1: Building a Chrome Extension
//// Lesson 43: Numbers as functions parameters

// Create a function, add(), that adds two numbers and returns the sum 

// function add(num1, num2) {
//     return num1 + num2
// }

// console.log(add(3, 4))





//// Section 1: Building a Chrome Extension
//// Lesson 44: Arguments vs Parameters

// function greetUser(greeting, name) // These parameters are defined variables  
// {
//     welcomeEl.textContent = `${greeting} + ${name}`
// }

// greetUser("Hey", "Jesse") // These values are passed into the fucntion once it's invoked 

// function add(num1, num2) {
//     return num1 + num2
// }

// add(2, 3)





//// Section 1: Building a Chrome Extension
//// Lesson 45: Array as parameters

// Create a function, getFistCar(arr), that returns the first item in the array 



// function getFirst(arr) {
//     return arr[2]
// }


// let firstCard = getFirst([10, 1, 2])

// console.log(firstCard)

// Call it with an array as an argument to verify that it works 





//// Section 1: Building a Chrome Extension
//// Lesson 46: Refactor renderLeads() to use a parameter

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")


// const leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 

// if(leadsFromLocalStrorage) {
//     myLeads = leadsFromLocalStrorage
//     render(myLeads)
// }

// function render(leads) {
//     let listItems = ""
//     for(let i = 0; i < leads.length; i++) {
//         listItems += `<li><a target='_blank' href='${leads[i]}'> ${leads[i]} </a> </li> `
//     } 
//     ulEl.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     render(myLeads);
// }) 





//// Section 1: Building a Chrome Extension
//// Lesson 47: Create a tabBtn

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const tabBtn = document.getElementById("tab-Btn")
// // 1. Grab the SAVE TAB button and store it in a tabBtn variable. -- Done



// const leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 

// if(leadsFromLocalStrorage) {
//     myLeads = leadsFromLocalStrorage
//     render(myLeads)
// }

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

// // 2. Listen for clicks on tabBtn. 
// tabBtn.addEventListener("click", function() {
//     console.log(tabs[0].url)
// })

// function render(leads) {
//     let listItems = ""
//     for(let i = 0; i < leads.length; i++) {
//         listItems += `<li><a target='_blank' href='${leads[i]}'> ${leads[i]} </a> </li> `
//     } 
//     ulEl.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     render(myLeads);
// }) 





//// Section 1: Building a Chrome Extension
//// Lesson 48: Save the tab url

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const tabBtn = document.getElementById("tab-Btn")
// // 1. Grab the SAVE TAB button and store it in a tabBtn variable. -- Done



// const leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 

// if(leadsFromLocalStrorage) {
//     myLeads = leadsFromLocalStrorage
//     render(myLeads)
// }

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

// // 2. Listen for clicks on tabBtn. 
// tabBtn.addEventListener("click", function() {
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)),
//     render(myLeads)
// })

// function render(leads) {
//     let listItems = ""
//     for(let i = 0; i < leads.length; i++) {
//         listItems += `<li><a target='_blank' href='${leads[i]}'> ${leads[i]} </a> </li> `
//     } 
//     ulEl.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     render(myLeads);
// }) 





//// Section 1: Building a Chrome Extension
//// Lesson 49: How to get the current tab

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const tabBtn = document.getElementById("tab-Btn")
// // 1. Grab the SAVE TAB button and store it in a tabBtn variable. -- Done



// const leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 


// if(leadsFromLocalStrorage) {
//     myLeads = leadsFromLocalStrorage
//     render(myLeads)
// }


// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]


// // 2. Listen for clicks on tabBtn. 
// tabBtn.addEventListener("click", function() {
//    // Grab the URL of the current tab:
//    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     let activeTab = tabs[0]
//     let activeTabId = activeTab.id 
//   })
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)),
//     render(myLeads)
// })


// function render(leads) {
//     let listItems = ""
//     for(let i = 0; i < leads.length; i++) {
//         listItems += `<li><a target='_blank' href='${leads[i]}'> ${leads[i]} </a> </li> `
//     } 
//     ulEl.innerHTML = listItems
// }


// deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     render(myLeads);
// }) 





//// Section 1: Building a Chrome Extension
//// Lesson 50: Use the Chrome API to get the tab

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const tabBtn = document.getElementById("tab-Btn")
// // 1. Grab the SAVE TAB button and store it in a tabBtn variable. -- Done



// const leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 

// if(leadsFromLocalStrorage) {
//     myLeads = leadsFromLocalStrorage
//     render(myLeads)
// }

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

// // 2. Listen for clicks on tabBtn. 
// tabBtn.addEventListener("click", function() {
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)),
//     render(myLeads)
// })

// function render(leads) {
//     let listItems = ""
//     for(let i = 0; i < leads.length; i++) {
//         listItems += `<li><a target='_blank' href='${leads[i]}'> ${leads[i]} </a> </li> `
//     } 
//     ulEl.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     render(myLeads);
// }) 





//// Section 1: Building a Chrome Extension
//// Lesson 51: How to get the current tab

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const tabBtn = document.getElementById("tab-Btn")
// // 1. Grab the SAVE TAB button and store it in a tabBtn variable. -- Done



// const leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 


// if(leadsFromLocalStrorage) {
//     myLeads = leadsFromLocalStrorage
//     render(myLeads)
// }

// // 2. Listen for clicks on tabBtn. 
// tabBtn.addEventListener("click", function() {
//    // Grab the URL of the current tab:
// //    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// //   })


//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads)),
//         render(myLeads)
//     })

// })


// function render(leads) {
//     let listItems = ""
//     for(let i = 0; i < leads.length; i++) {
//         listItems += `<li><a target='_blank' href='${leads[i]}'> ${leads[i]} </a> </li> `
//     } 
//     ulEl.innerHTML = listItems
// }


// deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
//     render(myLeads);
// }) 






//// Section 1: Building a Chrome Extension
//// Lesson 52: Deploy the final version 

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-Btn")
// 1. Grab the SAVE TAB button and store it in a tabBtn variable. -- Done



const leadsFromLocalStrorage = JSON.parse(localStorage.getItem('myLeads')) // This will turn myLeads into an object after hitting the refresh and display in the console as an array 


if(leadsFromLocalStrorage) {
    myLeads = leadsFromLocalStrorage
    render(myLeads)
}

// 2. Listen for clicks on tabBtn. 
tabBtn.addEventListener("click", function() {
   // Grab the URL of the current tab:
//    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   })


    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads)),
        render(myLeads)
    })

})


function render(leads) {
    let listItems = ""
    for(let i = 0; i < leads.length; i++) {
        listItems += `<li><a target='_blank' href='${leads[i]}'> ${leads[i]} </a> </li> `
    } 
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)), // This turns myLeads into a string since arrays can't be read as a string 
    render(myLeads);
}) 
