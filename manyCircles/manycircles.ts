console.log("testing");
import {Circle} from "./circle";
import {clrsA, clrsB, clrsC, clrsD,clrsE} from "./colors";


let canvas : HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
const context : CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context.beginPath();
// context.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2);
// context.fillStyle = "red";
// context.fill();

// let circle = new Circle(canvas, context);

let allCircles : Circle[] = [];

let clrs = clrsA;



for (let i = 0; i < 1000; i ++) {
    allCircles.push(new Circle(canvas, context, clrs[Math.floor(Math.random()*clrs.length)]));
}
let testCircle = new Circle(canvas, context, clrsA[0]);
testCircle.draw();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,window.innerWidth,window.innerHeight);
   for (let c of allCircles) {
        c.update();
   }
}

animate();

// context.stroke();
