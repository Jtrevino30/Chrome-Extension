
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
