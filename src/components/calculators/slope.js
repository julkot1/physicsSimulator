import './calc.css';
import CalcInput from "./calcInput";
import {units} from "./unitSelect";
import useData from "../../useData";
import { MathComponent } from 'mathjax-react'

export default ()=>{
    const [data, setData] = useData({
        m: 0, F: 0, angle: 0, v0: 0, fk: 0, h: 0
    })
    return (<div className="calculator-container">
        <h1 className="title">Kalkulator -  równia pochyła</h1>
        <div className="calculator-wrapper">
            <div className="input-container">
                <h1 className="container-title">Dane wejściowe</h1>
                <ul className="inputs-list">
                    <li><CalcInput  set={(v)=>{setData('m', v)}}unitData={units.mass}name="masa" info="masa ciała:"/></li>
                    <li><CalcInput set={(v)=>{setData('angle', v)}}unitData={units.angle}name="kąt" info="nachylenie równi:"/></li>
                    <li><CalcInput set={(v)=>{setData('h', v)}}unitData={units.lenght}name="h" info="wysokość:"/></li>
                    <li><CalcInput set={(v)=>{setData('v0', v)}}unitData={units.speed}name="prędkość" info="prędkość początkowa:"/></li>
                    <li><CalcInput set={(v)=>{setData('F', v)}}unitData={units.force}name="siła" info="siła:"/></li>
                    <li><CalcInput set={(v)=>{setData('fk', v)}}unitData={units.friction} name="fk" info="współczynnik tarcia kinetycznego:"/></li>
                </ul>
                <button className="slove" onClick={()=>{console.log(slove(data));}}>Oblicz</button>
            </div>
            <div className="output-container">
                <h1 className="container-title">Dane wyjściowe</h1>
                
            </div>
        </div>
    </div>)
}
const slove = ({m, F, angle, v0, fk, h})=>{
    const data = {};
    const g = 9.81;

    if(angle>3.14/2){
      
        data.message = "za duży kąt";
        return data;
    }
    if(m<=0){
      
        data.message = "zła masa";
        return data;
    }
    const s = h / Math.sin(angle);
    const Q = m*g;
    const Fpa = Q*Math.sin(angle);
    const N = Q*Math.cos(angle)
    const T = fk*N;
    data.Q=Q; data.Fpa=Fpa; data.N = N; 
    data.T=T;
    
    const Fw = F+Fpa-T;
    if(Fw==0||F+Fpa<T){
        data.message = "Nie porusza się F+Fpa==0";
        if(Fw==0){data.Fw=Fw; data.message = "Nie porusza się Fw==0";}
       
        return data;
    }
    if(Fw<0){
        data.message = "Porusza się w przeciwnym zwrocie (nie stacza się z równi)";
        return data;
    }
    const a = Fw/m;

    data.Fw=Fw;
    data.a=a;
    data.s=s;
    const t1 = Math.sqrt(2*s/a);
    const v1 = v0+t1*a;
    const Fw2 = F-T;
    data.v1 = v1;
    data.Fw2 = Fw2;
    if(Fw2==0){
        data.message = "Porusza się w ruchem jednostajnym";
        return data;
    }
    const a2 = Fw2/m;
    data.a2 = a2;
    if(Fw2>0){
        data.message = "Porusza się w ruchem jednostajnym przyśpieszonym";
        return data;
    }
    const t2 = -v1/a2;
    const s2 = Math.abs(a2*t2*t2/2)
    data.t2 = t2;
    data.s2 = s2;
    data.message = "Porusza się w ruchem jednostajnym opóźnionym";
    return data;

}