import React, { useState, useEffect } from 'react'
import '../panel.css'
import Knob from '../knob';
import {Fade} from 'react-reveal';
import KnobTitle from '../KnobTitle';
import { MathComponent } from 'mathjax-react'

export default ({d, set}) => {

    const play = (e)=>{
        set('play',!d.play);

    }

    return(
        <Fade left>
            <div className='panel'>
                <div className='play-container'> <button onClick={play}>{d.play?'Restart':'Start'}</button> </div>
                <div className='knobs'>
                    <ul className='knobs-list' >
                        <li>
                            <Knob value={d.force} setValue={d.play?()=>{}:set} name='force'  max={10} step={0.5}>
                                <KnobTitle text='Siła' idKey='force'>
                                    <h1>Siła</h1>
                                    <img src="https://eszkola.pl/img/galleries/thumb/home/12_wykres.jpg" width="350px" height="140px"></img>
                                    <p >Ustawia wartość wektora siły <MathComponent tex={String.raw`\vec F`} display={false} />, który ma taki sam zwrot i kierunek
                                    jak wektor <MathComponent tex={String.raw`\vec Q_\parallel`}  display={false}/>. Sumą tych wektorów jest <MathComponent tex={String.raw`\vec F_\parallel`}  display={false}/></p>
                                    <p>
                                    <MathComponent tex={String.raw`\vec F_\parallel = \vec Q_\parallel + \vec F `}/>  <MathComponent tex={String.raw`\vec Q_\perp + \vec Q_\parallel = \vec Q`} />
                                    </p>
                                   
                                </KnobTitle>
                            </Knob>
                        </li>
                        <li>
                            <Knob value={d.mass} setValue={d.play?()=>{}:set} name='mass'  min={2} max={50}>
                                    <KnobTitle text='Masa' idKey='mass'>
                                    <h1>Masa</h1>
                                    <img src="https://eszkola.pl/img/galleries/thumb/home/12_wykres.jpg" width="350px" height="140px"></img>
                                    <p>Ustawia mase <MathComponent tex={String.raw`m`}  display={false}/> ciała na równi.</p>
                                    <p> <MathComponent tex={String.raw` \left\{ \begin{array}{c}\vec Q=\vec Q_\perp+\vec Q_\parallel\\ Q=m*g\end{array}\right. `} /></p>
                                </KnobTitle>
                            </Knob>
                        </li>
                        <li>
                            <Knob value={d.slope} setValue={d.play?()=>{}:set} name='slope' min={0}  max={30}>
                                <KnobTitle text='Nachylenie' idKey='slope'>
                                    <h1>Nachylenie</h1>
                                    <img src="https://eszkola.pl/img/galleries/thumb/home/12_wykres.jpg" width="350px" height="140px"></img>
                                    <p>Ustawia wartość kąta <MathComponent tex={String.raw`\alpha`} display={false}/> pomiędzy dłuższą przyprostokątną a przeciwprostokątną.</p>
                                </KnobTitle>
                            </Knob>
                        </li>
                        <li>
                            <Knob value={d.friction} setValue={d.play?()=>{}:set} name='friction'  >
                                <KnobTitle text='Tarcie' idKey='friction'>
                                    <h1>Tarcie</h1>
                                    <img src="https://eszkola.pl/img/galleries/thumb/home/12_wykres.jpg" width="350px" height="140px"></img>
                                    <p>Ustawia współczynnik tarcia kinetycznego <MathComponent tex={String.raw`f_k`} display={false}/> pomniędzy ciałem a powieszchnią równi. 
                                    Ustalona wartość jest dostosowana do wymagań silinka symulacji. W rzecywistości <MathComponent tex={String.raw`f_k`} display={false}/> przyjmuje wartości
                                    <MathComponent tex={String.raw`f_k \in (0, 1)`} display={false}/> </p>
                                    <p>Tarcie <MathComponent tex={String.raw`\vec T`} display={false}/> działa w przeciwnym zwrocie do wektora prędkość.</p>
                                    <MathComponent tex={String.raw`T=N*m`}/>
                                </KnobTitle>
                            </Knob>
                        </li>
                    </ul>   
                   
                </div>
            </div>
        </Fade>
       
    );
}
