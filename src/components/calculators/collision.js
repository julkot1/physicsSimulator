import './calc.css';
import CalcInput from "./calcInput";
import {units} from "./unitSelect";
import useData from "../../useData";
import { MathComponent } from 'mathjax-react'
import { useState } from 'react';
import {Zoom} from "react-reveal";

export default ()=>{
    const [data, setData] = useData({
        ma: 0, mb: 0, va: 0, vb: 0, s: 0
    });
    const [outData, setOutData] = useState(null)
    return (<div className="calculator-container">
        <h1 className="title">Kalkulator -  zderzenie dwóch ciał</h1>
        <div className="calculator-wrapper">
            <Zoom left>
                <div className="input-container">
                    <h1 className="container-title">Dane wejściowe</h1>
                    <ul className="inputs-list">
                        <li><CalcInput  set={(v)=>{setData('ma', v)}}unitData={units.mass}name="m" info="masa ciała A:"/></li>
                        <li><CalcInput  set={(v)=>{setData('mb', v)}}unitData={units.mass}name="m" info="masa ciała B:"/></li>
                        <li><CalcInput  set={(v)=>{setData('va', v)}}unitData={units.speed}name="v" info="prędkość ciała A:"/></li>
                        <li><CalcInput  set={(v)=>{setData('vb', v)}}unitData={units.speed}name="v" info="prędkość ciała B:"/></li>
                        <li><CalcInput  set={(v)=>{setData('s', v)}}unitData={units.lenght}name="s" info="odległość ciał:"/></li>
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
const slove = ({ma,mb,va,vb,s})=>{
    const g = 9.81;

    if(ma<=0) return <p>Niepoprawna masa <MathComponent tex={String.raw`m_a>0`} display={false}/></p>;
    if(mb<=0) return <p>Niepoprawna masa <MathComponent tex={String.raw`m_b>0`} display={false}/></p>;

    const t = s/(va+vb);
    const pa = ma*va;
    const pb = mb*vb;
    const v = (pa-pb)/(ma+mb);

    return<div>
        <p>Pęd początkowy ciała A:  <MathComponent tex={String.raw`p_a=${pa.toFixed(2)}{kg*m\above 1pt s}`}/> </p>
        <p>Pęd początkowy ciała B:  <MathComponent tex={String.raw`p_b=${pb.toFixed(2)}{kg*m\above 1pt s}`}/> </p>
        <p>Ciała zderzą się po czasie <MathComponent tex={String.raw`t=${t.toFixed(2)}s`} display={false}/> </p>
        <p>Ciała będą poruszać się razem z prędością <MathComponent tex={String.raw`v_{ab}=${Math.abs(v).toFixed(2)} {m\above 1pt s}`} display={false}/> i zwrotem zgodnym ze zwrotem wektora początkowej prędości <MathComponent tex={String.raw`\vec v_{${v>0?'a':'b'}}`} display={false}/> </p>
    </div>
    


}