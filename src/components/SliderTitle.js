import {FiHelpCircle} from "react-icons/fi";
import "./slider.css";
import ReactTooltip from "react-tooltip";
export default ({text, children, idKey}) =>{
    return(
        <div className="slider-title-container">
            <label className="slider-title">{text}</label>     
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