import './calc.css';
import CalcInput from "./calcInput";
import {units} from "./unitSelect";
import useData from "../../useData";
import { MathComponent } from 'mathjax-react'
import { useState } from 'react';
import {Zoom} from "react-reveal";

export default ()=>{
    const [data, setData] = useData({
        massPlanet: 0, radius: 0, massSattelite: 0
    });
    const [outData, setOutData] = useState(null)
    return (<div className="calculator-container">
        <h1 className="title">Kalkulator -  orbita</h1>
        <div className="calculator-wrapper">
            <Zoom left>
                <div className="input-container">
                    <h1 className="container-title">Dane wejściowe</h1>
                    <ul className="inputs-list">
                        <li><CalcInput  exp={true}set={(v)=>{setData('massPlanet', v)}}unitData={units.mass}name="mp" info="masa planety:"/></li>
                        <li><CalcInput set={(v)=>{setData('massSattelite', v)}}unitData={units.mass}name="ms" info="masa satelity:"/></li>
                        <li><CalcInput exp={true}set={(v)=>{setData('radius', v)}}unitData={units.lenght}name="r" info="Odległość od środków mas:"/></li>

                    </ul>
                    <button className="slove" onClick={()=>{setOutData(slove(data)); console.log(data);}}>Oblicz</button>
                </div>
            </Zoom>
            <Zoom right>
                <div className="output-container">
                    <h1 className="container-title">Dane wyjściowe</h1>
                    <div className="outData-container">{outData}{data.mass}</div>
                </div>
            </Zoom>
            
        </div>
    </div>)
}
const slove = ({ massPlanet, radius, massSattelite})=>{
    const G = 6.67e-11;
    if(massPlanet<0)return <p>Masa planety musi być większa od 0 <MathComponent tex={String.raw`m_p>0`} display={false}/></p>
    if(massSattelite<0)return <p>Masa satelity musi być większa od 0 <MathComponent tex={String.raw`m_s>0`} display={false}/></p>
    if(massPlanet<massSattelite)return <p>Masa planety musi być większa od masy satelity <MathComponent tex={String.raw`m_p>m_s`} display={false}/></p>
    const v = Math.sqrt(G*massPlanet/radius);
    const ad = v*v/radius;
    const Fd = ad*massSattelite;
    const T = Math.PI*2*radius/v;
    return(
        <div>
            <p>prędkość liniowa satelity wynosi <MathComponent tex={String.raw`v=${(v/1000).toFixed(2)} {m \above 1pt s}`} display={false}/></p>
            <p>Przyśpieszenie dośrodkowe satelity wynosi <MathComponent tex={String.raw`a_d=${(ad).toFixed(2)} {m \above 1pt s^2}`} display={false}/></p>
            <p>Siła dośrodkowa działająca satelite wynosi <MathComponent tex={String.raw`F_d=${Fd.toFixed(2)} N`} display={false}/></p>
            <p>Okres obiegu satelity wynosi <MathComponent tex={String.raw`T=${T.toFixed(2)} s`} display={false}/></p>
        </div>
    )

}