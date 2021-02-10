import {Bodies} from "matter-js";
import Ground from "./ground";

export default (w,h)=>{
    return {
        right: new Ground(w/2, 0, 20, w), 
        bottom: new Ground(0, h/2, w, 20), 
        top: new Ground(0, -h/2, w, 20), 
        left: new Ground(-w/2, 0, 20, w) 
    }
}