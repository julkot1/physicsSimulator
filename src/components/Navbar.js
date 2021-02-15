import { push as Menu } from 'react-burger-menu'

import './navbar.css'
export default ()=>{ 
    return(
    <Menu pageWrapId="page-wrap" outerContainerId="outer-container" disableCloseOnEsc>
        <a href="/slope">Równia pochyła</a>
    </Menu>);

}