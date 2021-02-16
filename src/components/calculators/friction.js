import './calc.css';
import CalcInput from "./calcInput";
import {units} from "./unitSelect";
import useData from "../../useData";
import { MathComponent } from 'mathjax-react'
import { useState } from 'react';
import {Zoom} from "react-reveal";

export default ()=>{
    const [data, setData] = useData({
        m: 0, F: 0, fk: 0, fs: 0, t: 0
    });
    const [outData, setOutData] = useState(null)
    return (<div className="calculator-container">
        <h1 className="title">Kalkulator -  tarcie</h1>
        <div className="calculator-wrapper">
            <Zoom left>
                <div className="input-container">
                    <h1 className="container-title">Dane wejściowe</h1>
                    <ul className="inputs-list">
                        <li><CalcInput  set={(v)=>{setData('m', v)}}unitData={units.mass}name="masa" info="masa ciała:"/></li>
                        <li><CalcInput  set={(v)=>{setData('F', v)}}unitData={units.force}name="siła" info="Siła:"/></li>
                        <li><CalcInput  set={(v)=>{setData('t', v)}}unitData={units.time}name="czas" info="Czas: "/></li>
                        <li><CalcInput  set={(v)=>{setData('fs', v)}}unitData={units.friction}name="fs" info="Współczynnik tarcia statycznego: "/></li>
                        <li><CalcInput  set={(v)=>{setData('fk', v)}}unitData={units.friction}name="fk" info="Współczynnik tarcia kinetycznego: "/></li>
                    </ul>
                    <button className="slove" onClick={()=>{setOutData(slove(data))}}>Oblicz</button>
                </div>
            </Zoom>
            <Zoom right>
                <div className="output-container">
                    <h1 className="container-title">Dane wyjściowe</h1>
                    <div className="outData-container">{outData}</div>
                </div>
            </Zoom>
            
        </div>
    </div>)
}
const slove = ({m,F,fk,fs,t})=>{
    const g = 9.81;

    if(m<=0) return <p>Niepoprawna masa <MathComponent tex={String.raw`m>0`} display={false}/></p>;
    
    const N = m*g;
    const Tmax = N*fs;
    const forces = <div>
        <p>Siła nacisku <MathComponent tex={String.raw`N=${N.toFixed(2)}N`} display={false}/></p>
        <p>Maksymalne tarcie statyczne <MathComponent tex={String.raw`T_{s_{max}}=${Tmax.toFixed(2)}N`} display={false}/></p>
    </div>
    const T = N*fk;
    const Fw = F-T;
    if(Tmax>=F||F<=T) return <div>{forces}  <p>Za mała siła aby poruszyć ciało <MathComponent tex={String.raw`F>T_{smax}`} display={false}/></p></div>;
    
    const a = Fw/m;
    const s = a*t*t*0.5;
    const v = a*t;
    return<di>
        {forces}
        <div>
            <p>Siła wypadkowa działających sił na ciało <MathComponent tex={String.raw`F_w=F-T=${Fw.toFixed(2)}N`}/></p>
            <p>Przyśpieszenie ciała <MathComponent tex={String.raw`a=${a.toFixed(2)}{m \above 1pt s^2}`}/> </p>
            <p>Ciało po <MathComponent tex={String.raw`t=${t.toFixed(2)}s`} display={false}/> ruchu przebędzie drogę <MathComponent tex={String.raw`s(t)=${s.toFixed(2)}m`} display={false}/> oraz osiągnie prędkość <MathComponent tex={String.raw`v(t)=${v}{m \above 1pt s}`} display={false}/></p>
        </div>
    </di>


}