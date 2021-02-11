import {Engine, World, MouseConstraint, Mouse} from "matter-js";
import border from "./border";
export default class PhysicEngine{
    constructor(w, h, bodies, canvas){
        this.bodies=Object.assign(bodies, border(w,h));
        console.log(this.bodies);
        this.engine = Engine.create();
        World.add(this.engine.world, Object.values(this.bodies).map(e=>e.body));
        Engine.run(this.engine);
        const mouse = Mouse.create(canvas);
        console.log(mouse);
        const t =MouseConstraint.create(this.engine, {
            mouse:  mouse
        })
        World.add(this.engine.world,t )
      


    }
    show(p){
        Engine.update(this.engine)
        Object.values(this.bodies).forEach(e=>e.show(p));
    }
  
}