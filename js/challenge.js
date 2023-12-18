// As a user, I can:

// See the timer increment every second once the page has loaded.
// timer ID = counter
let n = 0
function startCount() {
    n++
    document.getElementById('counter').textContent = n
}
// Above creates the function start count which increments i each time it is run
// the second line sets our counter function equal to i so each time i is updated it is displayed on the page

document.addEventListener('DOMContentLoaded', (event) => {
    counter = setInterval(startCount, 1000);
    
})


    // document. is always needed
    // addEventListener - This adds an event listener that sets the event trigger to wait for the doc to be completely parsed
    // event is a function that sets




// Manually increment and decrement the counter using the plus and minus buttons.


// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
// Pause the counter, which should:
const pause = document.getElementById('pause')
pause.addEventListener("click", function(){
        console.log('I was clicked')
        clearInterval(counter)
}
)

// pause the counter
// disable all buttons except the pause button
    // grab all the buttons you want to disable and put them into an array
const buttons = document.getElementsByTagName('button')
let buttonsArray = []

for (let i=0; i<buttons.length; i++) {
    if (buttons[i].id !== "pause"){
        buttonsArray.push(buttons[i])
    }
}
console.log(buttonsArray)
    // Above set a variable buttons equal to any document elements with the tag name button
    // create a buttonsArray for those we will want to disable
    // a for loop that iterates through all of buttons and adds any that are not equal to "pause" to an array

function disableButton(button) {
    button.setAttribute("disabled", true)
}
    // setattribute defines a new attribute for buttons and sets them equal to true
function replacePause(){
    pause.textContent = "resume"
}

    // creates a function that goes to pause textContent in html file and changes it to resume

pause.addEventListener("click", function(){
    clearInterval(counter)
    buttonsArray.forEach(button => disableButton(button))
    replacePause()
})

    // this event listener listens for a click on the pause button and executes the functions we wrote previously

// switch the label on the button from "pause" to "resume"
let paused

function enableButton(button){
    button.removeAttribute("disabled")
}
function replacePause(){
    if (!paused){
        pause.textContent = "resume"
    }
    if(paused){
        pause.textContent ="pause"
    }
}

// Click the "resume" button to restart the counter and re-enable the buttons.



//let paused
pause.addEventListener("click", function(){
    if (paused==false){
        clearInterval(counter)

        buttonsArray.forEach(button=> {
            disableButton(button)
        })
        replacePause()
    }
    if (paused)
    {
    console.log("Resuming counter")
    counter = setInterval(startCount, 1000)
    replacePause()
    buttonsArray.forEach(button=>{
        enableButton(button)
    })

}
paused = !paused

})



// Leave comments on my gameplay, such as: "Wow, what a fun game this is."
