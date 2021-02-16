import './calc.css';
import CalcInput from "./calcInput";
import {units} from "./unitSelect";
import useData from "../../useData";
import { MathComponent } from 'mathjax-react'
import { useState } from 'react';
import {Zoom} from "react-reveal";

export default ()=>{
    const [data, setData] = useData({
        m: 0, F: 0, angle: 0, v0: 0, Fr: 0, h: 0
    });
    const [outData, setOutData] = useState(null)
    return (<div className="calculator-container">
        <h1 className="title">Kalkulator -  równia pochyła</h1>
        <div className="calculator-wrapper">
            <Zoom left>
                <div className="input-container">
                    <h1 className="container-title">Dane wejściowe</h1>
                    <ul className="inputs-list">
                        <li><CalcInput  set={(v)=>{setData('m', v)}}unitData={units.mass}name="masa" info="masa ciała:"/></li>
                        <li><CalcInput set={(v)=>{setData('angle', v)}}unitData={units.angle}name="kąt" info="nachylenie równi:"/></li>
                        <li><CalcInput set={(v)=>{setData('h', v)}}unitData={units.lenght}name="h" info="wysokość:"/></li>
                        <li><CalcInput set={(v)=>{setData('v0', v)}}unitData={units.speed}name="prędkość" info="prędkość początkowa:"/></li>
                        <li><CalcInput set={(v)=>{setData('F', v)}}unitData={units.force}name="siła" info="siła ciągnąca:"/></li>
                        <li><CalcInput set={(v)=>{setData('Fr', v)}}unitData={units.force}name="siła" info="siła oporu:"/></li>
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
const slove = ({m, F, angle, v0, Fr, h})=>{
    const g = 9.81;

    if(angle>3.14/2||angle<0)return <p>Niepoprawna wartość nachylenia: <MathComponent tex={String.raw`0^\circ<\alpha<90^\circ`} display={false}/></p>;
    if(m<=0) return <p>Niepoprawna masa <MathComponent tex={String.raw`m>0`} display={false}/></p>;
   
    const s = h / Math.sin(angle);
    const Q = m*g;
    const Fpa = Q*Math.sin(angle);
    const Fw = F+Fpa-Fr;

    if(Fw==0) return <p> ciało nie porusza się: <MathComponent tex={String.raw`F_w=0 `} display={false}/></p>;
    if(Fw<0) return <p>Porusza się w przeciwnym zwrocie (nie stacza się z równi): <MathComponent tex={String.raw`F_w<0 `} display={false}/></p>;

    const a = Fw/m;
    const t1 = Math.sqrt(2*s/a);
    const v1 = v0+t1*a;

    const data = <div>
        <p>Siła ciężkości: <MathComponent tex={String.raw`Q=${Q.toFixed(2)}N`} display={false}/></p>
        <p>Siła ciężkości równoległa: <MathComponent tex={String.raw`Q_\parallel=${Fpa.toFixed(2)}N`} display={false}/></p>
        <p>Siła wypadkowa na równi: <MathComponent tex={String.raw`F_w=Q_\parallel+F_c=${Fw.toFixed(2)}N`} display={false}/></p>
        <p>Ciało przebędzie na równi drogę: <MathComponent tex={String.raw`s_1=${s.toFixed(2)}m`} display={false}/> w czasie <MathComponent tex={String.raw`t_1=${t1.toFixed(2)}s`} display={false}/>, z przyśpieszeniem <MathComponent tex={String.raw`a_1=${a.toFixed(2)} {m \above 1pt s^2}`} display={false}/>. Prędkość u zboczu 
        równi <MathComponent tex={String.raw`v_1=${v1.toFixed(2)} {m \above 1pt s}`} display={false}/> </p>
    </div>

    const Fw2 = F-Fr;
    const fw2 = <p>Siła wypadkowa po zjechaniu ciała z rówi wynosi: <MathComponent tex={String.raw`F_{w2}=${Math.abs(Fw2.toFixed(2))}N`} display={false}/></p>
    if(Fw2==0){
        return(
            <div>
                {data}
                <p>{fw2} Ciało porusza się ruchem jednostajnym ze stałą prędkością  <MathComponent tex={String.raw`v=${v1.toFixed(2)} {m \above 1pt s}`} display={false}/></p>
            </div>
        );
    }

    const a2 = Fw2/m;
    if(Fw2>0){
        return( <div>
            {data}
            <p>{fw2} Ciało porusza się ruchem jednostajnie przyśoieszonym ze stałym przyśpieszeniem <MathComponent tex={String.raw`a_2=${a2.toFixed(2)} {m \above 1pt s^2}`} display={false}/></p>
        </div>);
    }
    const t2 = -v1/a2;
    const s2 = Math.abs(a2*t2*t2/2)
    
    return(
        <div>
            {data}
            <p>{fw2} Ciało porusza się ruchem jednostajnie opóźnionym ze stałym opóźniemiem <MathComponent tex={String.raw`a_2=${Math.abs(a2.toFixed(2))} {m \above 1pt s^2}`} display={false}/></p>
            <p>Ciało zatrzyma się po czasie <MathComponent tex={String.raw`t_2=${t2.toFixed(2)} {m \above 1pt s^2}`} display={false}/> i przebędzie drogę <MathComponent tex={String.raw`s_2=${s2.toFixed(2)} m`} display={false}/></p>
        </div>
    );

}