import Sliders from "./Sliders";
import '../panel.css'
import {Fade} from 'react-reveal';
import { MathComponent } from 'mathjax-react'
import { useState } from "react";

export default ({d, set}) => {

    const play = ()=>{
        set('play',!d.play);
        
    }
    const data = [
        {
            value: d.mass,
            valueName: 'mass',
            max: 50,
            min: 1,
            valText: "*10^24",
            step: 0.1,
            text: 'Masa',
            idKey: 'mass',
            tooltip: <>
                <h1>Masa</h1>
                <p>Ustawia mase <MathComponent tex={String.raw`m`}  display={false}/> planety, którą okrąża satelita.</p>
            </>
        },
        {
            value: d.radius,
            valueName: 'radius',
            max: 50,
            min: 1,
            valText: "*10^6",
            step: 0.5,
            text: 'Odległość',
            idKey: 'radius',
            tooltip: <>
                <h1>Odległość</h1>
                <p>Odległość środka masy satelity  <MathComponent tex={String.raw`r`}  display={false}/> do środka masy planety.</p>
            </>
        }
       
        
    ]

    return(
        <Fade left>
            <div className='panel'>
                <div className='play-container'> <button onClick={play}>{d.play?'Restart':'Start'}</button> </div>
                <Sliders
             data={data} d={d} set={set}/>
            </div>
        </Fade>
    );
}
