import Knob from "../knob";
import KnobTitle from '../KnobTitle';

export default ({data, set, d})=>{
    const play = ()=>{
        set('play',!d.play);
    }
    return(
        <div className='knobs'>
             <ul className='knobs-list' >
                 {data.map(e=>{
                     return(
                        <li>
                            <Knob value={e.value} setValue={(x)=>{set(e.valueName, x); if(d.play==true)play();}}  color={e.color} bg={e.bg}max={e.max} step={e.step} min={e.min}>
                                <KnobTitle text={e.text} idKey={e.idKey}>
                                    {e.tooltip}
                                </KnobTitle>
                            </Knob>
                        </li>
                     );
                 })}
             </ul>
        </div>
    );
}