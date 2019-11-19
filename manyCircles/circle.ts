import { doExpression } from "@babel/types";

export class Circle {

    public canvas: HTMLCanvasElement
    public context: CanvasRenderingContext2D

    public x: number;
    public y: number;

    public dx: number;
    public dy: number;

    public radius: number = (Math.random() * 10) + 2;
    public begin: number = 0;
    public end: number = Math.PI * 2;


    constructor(public cnvs: HTMLCanvasElement, public ctx: CanvasRenderingContext2D, public color: string) {

        this.canvas = cnvs;
        this.context = ctx;

        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;

        this.dx = Math.random();
        this.dy = Math.random();
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

        this.draw();
    }

    public animate = () => {



        // this.context.clearRect(0,0, innerWidth, innerHeight);
    }
}   