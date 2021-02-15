import Select from 'react-select';

const units = {
    mass:{
        not0: true,
        options:[
            {label: 'kg', value: 1},
            {label: 'dag', value: 0.01},
            {label: 'g', value: 0.001}
        ]
    },
    force:{
        options:[
            {label: 'N', value: 1},
            {label: 'kN', value: 1000}
        ]
    },
    angle:{
        max: 89/180 * Math.PI,
        options:[
            {label: 'deg', value: Math.PI/180},
            {label: 'rad', value: 1}
        ]
    },
    speed:{
        options:[
            {label: 'm/s', value: 1},
            {label: 'm/min', value: 1/60},
            {label: 'km/h', value: 5/18}
            
        ]
    },
    time:{
        options:[
            {label: 's', value: 1},
            {label: 'min', value: 60},
            {label: 'h', value: 3600}
            
        ]
    },
    lenght:{
        min: 0,
        options:[
            {label: 'm', value: 1},
            {label: 'km', value: 1000},
            {label: 'cm', value: 0.01}
            
        ],
    },
    friction:{
        min:0,
        max: 1
    }
}
export default ({unit, setUnit}) =>{
    return <select className="calc-select" onChange={e=>setUnit(e.target.value)}>
        {unit.options.map(u=><option value={u.value}  >{u.label}</option>)}
    </select>
}
export {units};