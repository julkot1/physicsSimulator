import {FiHelpCircle} from "react-icons/fi";
import "./knob.css";
import ReactTooltip from "react-tooltip";
export default ({text, children, idKey}) =>{
    console.log(children);
    return(
        <div className="knob-title-container">
            <label className="knob-title">{text}</label>     
            <FiHelpCircle data-tip data-for={idKey}/>
            <ReactTooltip id={idKey} effect='solid'>
                <div>
                    {children}
                </div>
            </ReactTooltip>
        </div>
    );
}