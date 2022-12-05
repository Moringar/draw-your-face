const canvas = document.querySelectorAll(".art")
const painting = document.querySelectorAll(".painting")

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

let i = 0;

let go = true;

setInterval(() => {

    let currentCanvas = canvas[i]
    const context = currentCanvas.getContext("2d")
     
    let stringSequence = canvas[i].dataset.art
    let modelSplit = /X,|X/g
    let sequence = stringSequence.split(modelSplit)
    

    context.lineWidth = rand(1,2);

    colors = [
        "#480084",
        "#370560",
        "#320854", 
        "#2d0a49"
    ]
    context.lineCap = 'round';
    context.lineJoin = 'round'


    gsap.to(painting[i], {opacity:1,y:10, duration:0.5})

    let x = 0;

    if(go){
        setInterval(() => {
            context.strokeStyle = colors[rand(0,3)]

            eval(sequence[x])
    
            
            x += 1
    
        }, 1);
    }
    i += 1

}, 50);


    


    
