import Sliders from "./Sliders";
import '../panel.css'
import {Fade} from 'react-reveal';
import { MathComponent } from 'mathjax-react'

export default ({d, set}) => {

    const play = ()=>{
        set('play',!d.play);
    }
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
                <p >Ustawia wartość wektora siły <MathComponent tex={String.raw`\vec F`} display={false} />, który ma taki sam zwrot i kierunek
                jak wektor <MathComponent tex={String.raw`\vec Q_\parallel`}  display={false}/>. Sumą tych wektorów jest <MathComponent tex={String.raw`\vec F`}  display={false}/></p>
                <p>
                <MathComponent tex={String.raw`\vec F_\parallel = \vec Q_\parallel + \vec F `}/>  <MathComponent tex={String.raw`\vec Q_\perp + \vec Q_\parallel = \vec Q`} />
                </p>
                                   
            </>
        },
        {
            value: d.mass,
            valueName: 'mass',
            max: 50,
            min: 1,
            text: 'Masa',
            idKey: 'mass',
            tooltip: <>
                <h1>Masa</h1>
                <p>Ustawia mase <MathComponent tex={String.raw`m`}  display={false}/> ciała na równi.</p>
                <p> <MathComponent tex={String.raw` \left\{ \begin{array}{c}\vec Q=\vec Q_\perp+\vec Q_\parallel\\ Q=m*g\end{array}\right. `} /></p>
            </>
        },
        {
            value: d.slope,
            valueName: 'slope',
            max: 30,
            text: 'Nachylenie',
            idKey: 'slope',
            tooltip: <>
                <h1>Nachylenie</h1>
                <p>Ustawia wartość kąta <MathComponent tex={String.raw`\alpha`} display={false}/> pomiędzy dłuższą przyprostokątną a przeciwprostokątną.</p>
            </>
        },
        
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
