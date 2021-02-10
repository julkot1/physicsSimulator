import {Bodies} from "matter-js";

export default class Body{
    constructor(x,y){
        this.body = Bodies.circle(x, y, 50);
    }
    show(p){
        p.fill(255);
        p.noStroke();
        p.beginShape();
        this.body.vertices.forEach(e => {
          p.vertex(e.x, e.y);
        });
        p.endShape();
    }
};


/*
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;

const engine = Engine.create();

const boxA =  Bodies.circle(460, 600, 20, {mass: 1});;
const boxB = Bodies.circle(0, 390, 20, {mass: 10, friction: 0.0001});

const ground = Bodies.rectangle(500, 610, 100, 60, {isStatic: true });
Bodies.trapezoid(250, 515, 500, 200, 2, {isStatic: true })
const t = Bodies.fromVertices(200, 200, [{x: 200, y:10},{x: 20, y:-100}], {isStatic: true });

function setup() {
  createCanvas(800, 600);
  World.add(engine.world, [boxA, boxB, ground, t]);


  Engine.run(engine);
  console.log(boxB);
 
  
}

function mouseClicked() {
  console.log(Vmax);
}

let Vmax=0;
function draw() {

  background(51);



  fill(255);
  strokeWeight(1)
  drawBox(boxB.vertices)
  drawBox(boxA.vertices);
  fill(117);
  noFill()
  strokeWeight(4)
  //drawBox(ground.vertices);
  drawBox(t.vertices);
  if(Vmax<boxB.velocity.x)Vmax=boxB.velocity.x;
}
const drawBox = (vertices)=>{


}
*/