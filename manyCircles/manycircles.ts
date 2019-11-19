console.log("testing");

import { clrsA, clrsB, clrsC, clrsD, clrsE } from "./colors";


let canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context.beginPath();
// context.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2);
// context.fillStyle = "red";
// context.fill();

// let circle = new Circle(canvas, context);

export let mouse = {
    x: 0,
    y: 0
}

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
})


class Circle {

    public canvas: HTMLCanvasElement
    public context: CanvasRenderingContext2D

    public x: number;
    public y: number;

    public dx: number;
    public dy: number;

    public radius: number;
    public originalRadius: number = this.radius;
    public begin: number = 0;
    public end: number = Math.PI * 2;

    public mouseRangeInteract : number = 100;
    public growthRate : number = 4;

    public maxGrowth : number = (Math.random()*100) +10;


    constructor(public color: string) {

        this.canvas = canvas;
        this.context = context;

        this.radius = (Math.random() * 30) + 2;
        this.originalRadius = this.radius;

        this.x = Math.random() * (this.canvas.width - this.radius * 2) + this.radius;
        this.y = Math.random() * (this.canvas.height - this.radius * 2) + this.radius;

        this.dx = Math.random() * 3;
        this.dy = Math.random() * 3;
    }

    public draw = () => {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }


    public update = () => {


        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        if (mouse.x - this.x < this.mouseRangeInteract && mouse.x - this.x > -this.mouseRangeInteract
            && mouse.y - this.y < this.mouseRangeInteract && mouse.y - this.y > -this.mouseRangeInteract
        ) {
            while (this.radius < this.maxGrowth){
                this.radius += this.growthRate;
            }
        }

        else if (this.radius >= this.originalRadius) {
            this.radius --;
        }


        this.draw();
    }

    public animate = () => {



        // this.context.clearRect(0,0, innerWidth, innerHeight);
    }
}

let allCircles: Circle[] = [];

let clrs = clrsA;


for (let i = 0; i < 300; i++) {
    allCircles.push(new Circle(clrs[Math.floor(Math.random() * clrs.length)]));
}
let testCircle = new Circle(clrsA[0]);
testCircle.draw();

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let c of allCircles) {
        c.update();
    }
}

animate();



// context.stroke();
