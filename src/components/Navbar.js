import { push as Menu } from 'react-burger-menu'
import {useState} from 'react';
import NavElement from "./navbarElement";
import { Fade} from "react-reveal";
import './navbar.css'
export default ()=>{ 
    const [slope, setSlope] = useState(false);
    const [friction, setFriction] = useState(false);
    const [collision, setCollision] = useState(false);
    return(
    <Menu pageWrapId="page-wrap" outerContainerId="outer-container" disableCloseOnEsc>
        <NavElement name="Równia pochyła">
            <a className="bm-item dropdown-item sim"href="/slope">symulator</a>
            <a className="bm-item dropdown-item calc"href="slope-calc">kalkulator</a>
        </NavElement>
        <NavElement name="Tarcie">
            <a className="bm-item dropdown-item sim"href="/friction">symulator</a>
            <a className="bm-item dropdown-item calc"href="/friction-calc">kalkulator</a>
        </NavElement>
        <NavElement name="Zderzenia">
            <NavElement name="Niesprężyste">
                <a className="bm-item dropdown-item sim"href="/collision">symulator</a>
                <a className="bm-item dropdown-item calc"href="/collision-calc">kalkulator</a>
            </NavElement>
        </NavElement>
    </Menu>);

}
