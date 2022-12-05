const canvas = document.querySelector("#mainCanvas")
const context = canvas.getContext("2d")

const art = document.querySelector("#art");
const half_art = document.querySelector("#half_art");

let userCanvasOperations = []
let userCanvasOperationsHalfSized = []

function getMousePosition(e){
    // We get the canvas size.
    const rect = canvas.getBoundingClientRect();
    // Offset of the cursor.
    return{
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }
}

function mouseMove(e){
    const mousePosition = getMousePosition(e)

    // STROKE
    context.lineTo(mousePosition.x, mousePosition.y)
    context.stroke()

    userCanvasOperations.push(`context.lineTo(${mousePosition.x},${mousePosition.y})X`)
    userCanvasOperationsHalfSized.push(`context.lineTo(${(mousePosition.x)/2},${(mousePosition.y)/2})X`)
    userCanvasOperations.push(`context.stroke()X`)
    userCanvasOperationsHalfSized.push(`context.stroke()X`)
}


// CANVAS ACTIONS BEGINS HERE =================================
canvas.addEventListener("mousedown", (e)=>{
    // Evite de drag and drop le DOM
    e.preventDefault

    // POSITION DE LA SOURIS
    const mousePosition = getMousePosition(e)

    // START A STROKE

    context.lineWidth = 2;
    context.strokeStyle = "#3e0068";
    context.lineCap = 'round';
    context.lineJoin = 'round'


    context.beginPath()
    context.moveTo(mousePosition.x, mousePosition.y)
    
    // Save UserOperation
    userCanvasOperations.push(`context.beginPath()X`)
    userCanvasOperationsHalfSized.push(`context.beginPath()X`)
    userCanvasOperationsHalfSized.push(`context.beginPath()X`)

    userCanvasOperations.push(`context.moveTo(${mousePosition.x},${mousePosition.y})`)
    userCanvasOperationsHalfSized.push(`context.moveTo(${(mousePosition.x)/2},${(mousePosition.y)/2})`)
    

    canvas.addEventListener('mousemove', mouseMove)


})

window.addEventListener('mouseup', ()=>{

    canvas.removeEventListener('mousemove', mouseMove)
})

function executeSequenceOperation(){

}

// ERASE AND SAVE FUNTIONS
const submitArt = document.querySelector("#submitArt")
const title = document.querySelector("h2")

const eraseButton = document.querySelector("#erase")
const undoButton = document.querySelector("#undo")
const giveBackButton = document.querySelector("#giveBack")
const Debug = document.querySelector("#Debug")

submitArt.addEventListener("click", ()=>{
 
    if(userCanvasOperations.toString().length < 10000 && userCanvasOperationsHalfSized.toString().length < 10000){
        event.preventDefault()
        title.innerHTML = 'DO IT<br>BETTER'
        canvas.classList.add("error")
        
    }
    else{
        art.value = userCanvasOperations.toString();
        half_art.value = userCanvasOperationsHalfSized.toString();
    }

})

window.addEventListener("click", ()=>{
    console.log(userCanvasOperations.toString().length + " / " + userCanvasOperationsHalfSized.toString().length)

    if(userCanvasOperations.toString().length >= 10000 && userCanvasOperationsHalfSized.toString().length >= 10000){
        canvas.classList.remove('error')
        canvas.classList.add('isOk')
        
    }
    else{
        return null
    }
})


    




eraseButton.addEventListener("click", ()=>{
    // Should clean the canvas.
    // LATER : will delete the associated array of "canvas actions"
    context.clearRect(0, 0, canvas.width, canvas.height);
    userCanvasOperations = [];
    userCanvasOperationsHalfSized = [];
    canvas.classList.remove('error')
    canvas.classList.remove('isOk')
})

// undoButton.addEventListener("click", ()=>{
//     console.log("undo")

//     // context.clearRect(0, 0, canvas.width, canvas.height);

//     // userCanvasOperations.pop()

//     for (let i = 0; i < userCanvasOperations.length; i++){
//         console.log(userCanvasOperations[i])
//         eval(userCanvasOperations[i])
//     }

// })
