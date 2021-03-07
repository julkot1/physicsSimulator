import React from 'react'
import '../panel.css'
import {Fade} from 'react-reveal';
import { MathComponent } from 'mathjax-react'
import Sliders from "./Sliders";

export default ({d, set}) => {
    const data = [
        {
            value: d.force,
            valueName: 'force',
            max: 50,
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
            max: 200,
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
            max: 1,
            step: 0.01,
            text: 'Tarcie statyczne',
            idKey: 'frictionS',
            tooltip: <>
                <h1>Współczynnik tarcia statycznego</h1>
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
            max: 1,
            step: 0.01,
            text: 'Tarcie Kinetyczne',
            idKey: 'friction',
            tooltip: <>
           
                <h1> Współczynnik tarcia kinetycznego</h1>
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
                <Sliders data={data} d={d} set={set}/>
            </div>
        </Fade>
       
    );
}
