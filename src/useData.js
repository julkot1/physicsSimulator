import {useState} from "react";

export default (data)=>{
    const d = data;
    const [dataState, setDataState] = useState(data);
    const setData = (key, val)=>{
        setDataState({...dataState, [key]: val});
    }
    return [dataState, setData]
}