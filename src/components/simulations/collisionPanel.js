
import '../panel.css'
import {Fade} from 'react-reveal';
import Sliders from "./Sliders";

export default ({d, set}) => {
    
    const play = ()=>{
        set('play',!d.play);
    }
    const data = [
        {
            value: d.massA,
            valueName: 'massA',
            max: 200,
            min: 1,
            text: 'Masa ciała A',
        },
        {
            value: d.velocityA,
            valueName: 'velocityA',
            max: 50,
            min: 0,
            step: 0.5,
            text: 'Prędkość ciała A',
        },
        {
            value: d.massB,
            valueName: 'massB',
            max: 200,
            min: 1,
            color: '#509C2F',
            bg: '#234F10',
            text: 'Masa ciała B',
        },
        {
            value: d.velocityB,
            valueName: 'velocityB',
            max: 50,
            min: 0,
            color: '#509C2F',
            bg: '#234F10',
            step: 0.5,
            text: 'Prędkość ciała B',
        }
    ]
    return(
        <Fade left>
            <div className='panel'>
                <div className='play-container'> <button onClick={play}>{d.play?'Restart':'Start'}</button> </div>
                <Sliders data={data} d={d} set={set}/>
            </div>
        </Fade>

    );
}
