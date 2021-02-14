import React, { useState, useEffect } from 'react'
import './panel.css'
import Knob from './knob';
import {Fade} from 'react-reveal';
import KnobTitle from './KnobTitle';


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
                                    <p>sdsd</p>
                                </KnobTitle>
                            </Knob>
                        </li>
                        <li>
                            <Knob value={d.mass} setValue={d.play?()=>{}:set} name='mass'  min={2} max={50}>
                                <KnobTitle text='Masa' idKey='mass'>
                                <p>asdsq</p>
                                </KnobTitle>
                            </Knob>
                        </li>
                        <li>
                            <Knob value={d.slope} setValue={d.play?()=>{}:set} name='slope' min={0}  max={30}>
                                <KnobTitle text='Nachylenie' idKey='slope'></KnobTitle>
                            </Knob>
                        </li>
                        <li>
                            <Knob value={d.friction} setValue={d.play?()=>{}:set} name='friction'  >
                                <KnobTitle text='Tarcie' idKey='friction'></KnobTitle>
                            </Knob>
                        </li>
                    </ul>   
                   
                </div>
            </div>
        </Fade>
       
    );
}
