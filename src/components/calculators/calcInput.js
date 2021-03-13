import UnitSelect from "./unitSelect";

import {useState, useEffect} from "react";

export default ({name, unitData, info, d, set, exp})=>{
    const [val, setVal] = useState(0)
    const [not, setNot] = useState(0)
    const [unit, setUnit] = useState(unitData.options==null?1:unitData.options[0].value);
    useEffect(()=>{
        console.log(val*unit*Math.pow(10,not));
        set(val*unit*Math.pow(10,not))
    },[val,unit,not])
    return(
        
        <div style={{display:'flex', alignItems: 'center'}}>
            <label>{info}</label>
            <input className="calc-input" placeholder={name} type="Number" 
             value={val}
             onChange={e=>{setVal(e.target.value)}}></input>
              {exp==true?<><p>10^</p><input onChange={d=>{setNot(d.target.value)}} value={not} type="Number"  className="calc-input" style={{width: '30px'}}></input></>:<></>}
            {unitData==null||unitData.options==null||<UnitSelect unit={unitData} setUnit={setUnit}></UnitSelect>}
           
        </div>
    );
}
