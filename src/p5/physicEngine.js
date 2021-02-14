import {Engine, World, MouseConstraint, Mouse} from "matter-js";
import border from "./border";
export default class PhysicEngine{
    constructor(w, h, bodies, canvas){
        this.bodies=Object.assign(bodies, border(w,h));

        this.engine = Engine.create();
        World.add(this.engine.world, Object.values(this.bodies).map(e=>e.body));

    }
    play(){
        Engine.run(this.engine);
    }
    show(p){
        //Engine.update(this.engine)
        Object.values(this.bodies).forEach(e=>e.show(p));
    }
    restart(){
        Engine.clear(this.engine)
    }
  
}