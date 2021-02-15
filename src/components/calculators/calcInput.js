import UnitSelect from "./unitSelect";

import {useState, useEffect} from "react";

export default ({name, unitData, info, d, set})=>{
    const [val, setVal] = useState(0)
    const [unit, setUnit] = useState(unitData.options==null?1:unitData.options[0].value);
    useEffect(()=>{
        set(val*unit)
    },[val,unit])
    return(
        
        <div>
            <label>{info}</label>
            <input className="calc-input" placeholder={name} type="Number" 
             value={val}
             onChange={e=>{setVal(e.target.value)}}></input>
            {unitData==null||unitData.options==null||<UnitSelect unit={unitData} setUnit={setUnit}></UnitSelect>}
        </div>
    );
}
