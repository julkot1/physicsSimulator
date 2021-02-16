
import '../panel.css'
import Knob from '../knob';
import {Fade} from 'react-reveal';
import KnobTitle from '../KnobTitle';

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
                            <Knob value={d.massA} setValue={(x)=>{set('massA', x); if(d.play==true)play();}}  max={50} step={1}>
                                <KnobTitle text='Masa ciała A' />           
                            </Knob>
                        </li>

                        <li>
                            <Knob value={d.velocityA} setValue={(x)=>{set('velocityA', x); if(d.play==true)play();}}  max={30} step={0.5}>
                                <KnobTitle text='Prędkość ciała A'/>
                            </Knob>
                        </li>

                        <li>
                            <Knob value={d.massB} setValue={(x)=>{set('massB', x); if(d.play==true)play();}}  max={50} step={1} bg='#234F10' color='#509C2F'>
                                <KnobTitle text='Masa ciała B' />
                            </Knob>
                        </li>

                        <li>
                            <Knob value={d.velocityB} setValue={(x)=>{set('velocityB', x); if(d.play==true)play();}}  max={30} step={0.5}  bg='#234F10' color='#509C2F'>
                                <KnobTitle text='Prędkość ciała B' />
                            </Knob>
                        </li>
                    </ul>   
                   
                </div>
            </div>
        </Fade>
       
    );
}
