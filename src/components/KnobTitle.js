import {FiHelpCircle} from "react-icons/fi";
import "./knob.css";
import ReactTooltip from "react-tooltip";
export default ({text, children, idKey}) =>{
    return(
        <div className="knob-title-container">
            <label className="knob-title">{text}</label>     
            {
                idKey?<><FiHelpCircle data-tip data-for={idKey}/>
                <ReactTooltip id={idKey} effect='solid'>
                    <div className="info-container">
                        {children}
                    </div>
                </ReactTooltip></>:<></>
            }
        </div>
    );
}