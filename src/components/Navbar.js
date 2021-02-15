import { push as Menu } from 'react-burger-menu'
import {useState} from 'react';
import { Fade} from "react-reveal";
import './navbar.css'
export default ()=>{ 
    const [slope, setSlope] = useState(false)
    const [friction, setFriction] = useState(false)
    return(
    <Menu pageWrapId="page-wrap" outerContainerId="outer-container" disableCloseOnEsc>
        <button onClick={()=>setSlope(!slope)}>Równia pochyła</button>
        <Fade collapse when={slope}>
            <a className="bm-item dropdown-item sim"href="/slope">symulator</a>
            <a className="bm-item dropdown-item calc"href="slope-calc">kalkulator</a>
        </Fade>
        <button onClick={()=>setFriction(!friction)}>Tarcie</button>
        <Fade collapse when={friction}><a className="bm-item dropdown-item sim"href="/friction">symulator</a><a className="bm-item dropdown-item calc"href="/slope">kalkulator</a></Fade>
        <button onClick={()=>setSlope(!slope)}>Równia pochyła</button>
    </Menu>);

}