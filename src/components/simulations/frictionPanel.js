import React, { useState, useEffect } from 'react'
import '../panel.css'
import Knob from '../knob';
import {Fade} from 'react-reveal';
import KnobTitle from '../KnobTitle';
import { MathComponent } from 'mathjax-react'

export default ({d, set}) => {

    const play = ()=>{
        set('play',!d.play);
    }

    return(
        <Fade left>
            <div className='panel'>
                <div className='play-container'> <button onClick={play}>{d.play?'Restart':'Start'}</button> </div>
                <div className='knobs'>
                    <ul className='knobs-list' >
                        <li>
                            <Knob value={d.force} setValue={(x)=>{set('force', x); if(d.play==true)play();}}  max={30} step={0.5}>
                                <KnobTitle text='Siła' idKey='force'>
                                    <h1>Siła</h1>
                                    <img src="https://eszkola.pl/img/galleries/thumb/home/12_wykres.jpg" width="350px" height="140px"></img>
                                    <p >Ustawia wartość wektora siły <MathComponent tex={String.raw`\vec F`} display={false} />
                                    </p>
                                   
                                </KnobTitle>
                            </Knob>
                        </li>
                        <li>
                            <Knob value={d.mass} setValue={(x)=>{set('mass', x); if(d.play==true)play();}}  min={2} max={50}>
                                    <KnobTitle text='Masa' idKey='mass'>
                                    <h1>Masa</h1>
                                    <img src="https://eszkola.pl/img/galleries/thumb/home/12_wykres.jpg" width="350px" height="140px"></img>
                                    <p>Ustawia mase <MathComponent tex={String.raw`m`}  display={false}/> ciała na równi.</p>
                                    <p> <MathComponent tex={String.raw`N=m*g`} /></p>
                                </KnobTitle>
                            </Knob>
                        </li>
                        <li>
                            <Knob value={d.frictionStatic} setValue={(x)=>{set('frictionStatic', x); if(d.play==true)play();}} min={0}  max={100}>
                                <KnobTitle text='Tarcie statyczne' idKey='frictionS'>
                                    <h1>Tarcie statyczne</h1>
                                    <img src="https://eszkola.pl/img/galleries/thumb/home/12_wykres.jpg" width="350px" height="140px"></img>
                                    <p>Ustawia współczynnik tarcia kinetycznego <MathComponent tex={String.raw`f_s`} display={false}/> pomniędzy ciałem a powieszchnią równi. 
                                    Ustalona wartość jest dostosowana do wymagań silinka symulacji.</p>
                                    <p>Tarcie statyczne występuje między dwoma ciałami, które nie przemieszczają się względem siebie</p>
                                    <p>Maksymalną wartość Tarcia statycznego można obliczyć wzorem <MathComponent tex={String.raw`T=f_s*N`} display={false}/></p>
                                </KnobTitle>
                            </Knob>
                        </li>
                        <li>
                            <Knob value={d.friction} setValue={(x)=>{set('friction', x); if(d.play==true)play();}}  >
                                <KnobTitle text='Tarcie kinetyczne' idKey='friction'>
                                    <h1>Tarcie Kinetyczne</h1>
                                    <img src="https://eszkola.pl/img/galleries/thumb/home/12_wykres.jpg" width="350px" height="140px"></img>
                                    <p>Ustawia współczynnik tarcia kinetycznego <MathComponent tex={String.raw`f_k`} display={false}/> pomniędzy ciałem a powieszchnią równi. 
                                    Ustalona wartość jest dostosowana do wymagań silinka symulacji.</p>
                                    <MathComponent tex={String.raw`T=N*f_k`}/>
                                </KnobTitle>
                            </Knob>
                        </li>
                    </ul>   
                   
                </div>
            </div>
        </Fade>
       
    );
}
