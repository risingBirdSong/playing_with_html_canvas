console.log("testing");
import {Circle} from "./circle";
import {clrsA, clrsB} from "./colors";


let canvas : HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
const context : CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context.beginPath();
// context.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2);
// context.fillStyle = "red";
// context.fill();

// let circle = new Circle(canvas, context);

const allCircles : Circle[] = [];

let clrs = clrsB;

for (let i = 0; i < 100000; i ++) {
    allCircles.push(new Circle(canvas, context, clrs[Math.floor(Math.random()*clrs.length)]));
}

// context.stroke();
