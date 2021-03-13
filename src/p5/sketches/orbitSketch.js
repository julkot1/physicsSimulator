import Vector from "../vector";
import {background, background2} from "../../colors";

export default  (p) =>{
  const w = 1000, h = 530;
  let play;
  let radius = 150;
  let r;
  let angle = Math.PI/2;
  const G = 3.2;
  let mass = 0;
  let  v;
  let speed= Math.sqrt(G*mass/r)/r/2;
  p.myCustomRedrawAccordingToNewPropsHandler = ({data,set}) => {
    play = data.play;
    mass = data.mass;
    r = data.radius
    radius =  120+data.radius*2.5;
    if(!play){
      angle = Math.PI/2;
      speed= Math.sqrt(G*mass/r)/r/2
    }
  }
  p.setup =  ()=>{
    p.createCanvas(w, h);
    v = new Vector('#ff0000');
    v.setLength(()=>{
      return  40+speed*10;
    });
  };
  p.draw = ()=>{
    p.background(p.color(background));
    p.fill(125)
    p.circle(w/2, h/2, 50+mass*3);
    let x = w/2 ;
    let y = h/2 + radius;
    if(play){
      speed = Math.sqrt(G*mass/r)/r/2;
      x = w/2 +  radius * Math.cos(angle);
      y = h/2 +  radius* Math.sin(angle);
      angle+= speed;
      
    }
    p.ellipse(x, y, 30, 30);
    p.fill(255)
    if(play)p.text(`${(Math.sqrt(6.67*mass/r)*Math.sqrt(10)).toFixed(2)} km/s`, w/2, h/2)
    p.textAlign(p.CENTER);
    p.textSize(18)
    v.update(p, {position: {x:x, y:y}, angle: angle+Math.PI/2})

    
  };
}

  /*
  var radius = 150;
var angle = 0;
var centerX = 300;
var centerY = 300;
const G = 6.67;
const mass = 597;
let speed = Math.sqrt(G*mass/Math.pow(radius,3));
function setup() { 
  createCanvas(600, 600);
}
const points=[];
function draw() { 
  background(74);
  points.forEach((e)=>{
    ellipse(e.x, e.y, 5, 5)
  })
  speed = Math.sqrt(G*mass/Math.pow(radius,3));

  
  ellipse(centerX, centerY, 10, 10);
  
  
  var x = centerX + radius * cos(angle);
  var y = centerY + radius * sin(angle);
  ellipse(x, y, 50, 50);
  if(points.length<120)points.push({x: x, y:y});

  

  angle = angle + speed;
}
*/


/*
export default  (p) => {
    const w = 1000, h = 320;
    let e,play;
    let boxA;
    let slope, setV, vs=[];
    const slopeH = 10;
    const create = (data)=>{
      const ang =  20*Math.PI/180;
      const H = Math.sin(ang)*w/2;
      
      boxA = new Body(500,100, {bg:'#ffffff',body:{ restitution: 0},data: data||{mass:5}});
      slope = new Ground(Math.sqrt(w/4-H)/2, h-(H/2), w/2, slopeH, {angle: ang},background2);
      e = new PhysicEngine(w,h, {boxA, slope}, p.canvas)
      slope.setSlopeAngle(ang, w, h, e);
     // boxA.setPositionFromAngle(ang, h, w, slopeH);
      boxA.addVector('#0087fc', (d,params)=>params.force*4+(params.force>0?10:0))
    }
    p.myCustomRedrawAccordingToNewPropsHandler = ({data,set}) => {
      if(slope&&boxA){
        play = data.play;
        setV = set;
        if(!data.play){
          e.restart();
          create(data);
          const angle = data.slope*Math.PI/180;
         // slope.setSlopeAngle(angle, w, h,e);
          //boxA.setPositionFromAngle(angle, h, w, slopeH);
         
        }
      }
     
    
    }
    
    p.setup =  ()=>{
      p.createCanvas(w, h);
      create()
     
    };
    let time = 0, s=0;
    let prevV = 0;
    p.draw = ()=>{
      p.background(p.color(background));
      if(play){
        
    
      }
      
    };
    
  };
  */