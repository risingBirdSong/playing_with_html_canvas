
export class Circle{
    public x : number = Math.random() * this.canvas.width;
    public y : number = Math.random() * this.canvas.height;
    public radius : number = (Math.random() * 3) + 2;
    public begin : number = 0;
    public end : number = Math.PI * 2;


    constructor(public canvas : HTMLCanvasElement, public context : CanvasRenderingContext2D, color : string){

        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        console.log(color);
        context.fillStyle = color;
        context.fill();
        context.closePath();

    }
}   