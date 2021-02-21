import React, { useState, useEffect } from 'react'
import '../panel.css'
import {Fade} from 'react-reveal';
import { MathComponent } from 'mathjax-react'
import Knobs from "./knobs";

export default ({d, set}) => {
    const data = [
        {
            value: d.force,
            valueName: 'force',
            max: 30,
            step: 0.5,
            text: 'Siła',
            idKey: 'force',
            tooltip: <>
                <h1>Siła</h1>
                <p >Ustawia wartość wektora siły <MathComponent tex={String.raw`\vec F`} display={false} /></p>
            </>
        },
        {
            value: d.mass,
            valueName: 'mass',
            min: 1,
            max: 50,
            text: 'Masa',
            idKey: 'mass',
            tooltip: <>
                <h1>Masa</h1>
                <p>Ustawia mase <MathComponent tex={String.raw`m`}  display={false}/> ciała na równi.</p>
                <p> <MathComponent tex={String.raw`N=m*g`} /></p>v
            </>
        },
        {
            value: d.frictionStatic,
            valueName: 'frictionStatic',
            min: 0,
            max: 100,
            text: 'Tarcie statyczne',
            idKey: 'frictionS',
            tooltip: <>
                <h1>Tarcie statyczne</h1>
                <p>Ustawia współczynnik tarcia kinetycznego <MathComponent tex={String.raw`f_s`} display={false}/> pomniędzy ciałem a powieszchnią równi. 
                Ustalona wartość jest dostosowana do wymagań silinka symulacji.</p>
                <p>Tarcie statyczne występuje między dwoma ciałami, które nie przemieszczają się względem siebie</p>
                <p>Maksymalną wartość Tarcia statycznego można obliczyć wzorem <MathComponent tex={String.raw`T=f_s*N`} display={false}/></p>
            </>
        },
        {
            value: d.friction,
            valueName: 'friction',
            min: 0,
            max: 100,
            text: 'Tarcie kinetyczne',
            idKey: 'friction',
            tooltip: <>
                <h1>Tarcie Kinetyczne</h1>
                <p>Ustawia współczynnik tarcia kinetycznego <MathComponent tex={String.raw`f_k`} display={false}/> pomniędzy ciałem a powieszchnią równi. 
                Ustalona wartość jest dostosowana do wymagań silinka symulacji.</p>
                <MathComponent tex={String.raw`T=N*f_k`}/>
            </>
        }
    ]
    const play = ()=>{
        set('play',!d.play);
    }

    return(
        <Fade left>
            <div className='panel'>
                <div className='play-container'> <button onClick={play}>{d.play?'Restart':'Start'}</button> </div>
                <Knobs data={data} d={d} set={set}/>
            </div>
        </Fade>
       
    );
}
