import Slider from "../Slider";
import SliderTitle from '../SliderTitle';

export default ({data, set, d})=>{
    const play = ()=>{
        set('play',!d.play);
    }
    return(
        <div className='sliders'>
             <ul className='sliders-list' >
                 {data.map(e=>{
                     return(
                        <li className="slider">
                           
                            <Slider value={e.value} text={e.valText}setValue={(x)=>{set(e.valueName, x); }}  color={e.color} bg={e.bg}max={e.max} step={e.step} min={e.min}>
                                <SliderTitle text={e.text} idKey={e.idKey}>
                                    {e.tooltip}
                                </SliderTitle>
                            </Slider>
                        </li>
                     );
                 })}
             </ul>
        </div>
    );
}