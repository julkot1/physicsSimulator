import {Engine, World} from "matter-js";
import border from "./border";
export default class PhysicEngine{
    constructor(w, h, bodies){
        this.bodies=Object.assign(bodies, border(w,h));
        console.log(this.bodies);
        this.engine = Engine.create();
        World.add(this.engine.world, Object.values(this.bodies).map(e=>e.body));
         Engine.run(this.engine);

    }
    show(p){
        Object.values(this.bodies).forEach(e=>e.show(p));
    }
  
}