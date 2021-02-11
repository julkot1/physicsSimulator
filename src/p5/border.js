import {Bodies} from "matter-js";
import Ground from "./ground";
import {background2} from "../colors";

export default (w,h)=>{
    return {
        right: new Ground(w/2, 0, 20, w), 
        bottom: new Ground(0, h/2, w, 20, {},background2), 
        top: new Ground(0, -h/2, w, 20), 
        left: new Ground(-w/2, 0, 20, w) 
    }
}