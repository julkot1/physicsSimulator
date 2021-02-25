import React, {useState} from 'react';
import { Fade} from "react-reveal";
export default ({children, name})=>{ 
    const [element, setElement] = useState(false);

    return(
        <div className="bm-item-container">
            <button className="bm-item"onClick={()=>setElement(!element)}>{name}</button>
            <Fade collapse when={element}>
               <ul className="elements">
                   {
                       React.Children.map(children, (child, i)=>{
                            return <li><child.type {...child.props} key={i} /></li>;
                       })
                   }
                </ul>
            </Fade>
        </div>)
       


}