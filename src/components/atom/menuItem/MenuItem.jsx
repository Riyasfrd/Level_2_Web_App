/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "../button/Button"

export const MenuItem = ({
    contend,  //Contend of the menu item
     isActive,  //Active status of the menu item
     isButton   //Use to check the menu type
}) => {
    
  return (
    <li className={`menu__item ${isActive ? 'active' : isButton ? 'menu__item-button' : ''}`}>
        {!isButton ? <a href="#">{contend}</a> : <Button buttonTitlte={contend}/>}
    </li>
  )
}
