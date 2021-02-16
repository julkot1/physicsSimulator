import {Bodies} from "matter-js";
import Ground from "./ground";
import {background2} from "../colors";

export default (w,h)=>{
    return {
        right: new Ground(w, 0, 20, w, {}), 
        bottom: new Ground(w/2, h, w, 10, {},background2), 
        top: new Ground(w/2,0, w, 20), 
        left: new Ground(0, 0, 10, w, {}) ,
    }
}