/* eslint-disable jsx-a11y/anchor-is-valid */
import { MenuItem} from "../../atom"

export const Menu = (
  {isOpen} // check if the menu is open or not
) => {
  return (
    <nav className={`menu ${isOpen ? 'active' : ''}`} id="menu">
        <ul>
            <MenuItem contend={'Home'} isActive/>
            <MenuItem contend={'About'}/>
            <MenuItem contend={'Contend'}/>
            <MenuItem contend={'Job'}/>
            <MenuItem contend={'Share'}/>
            <MenuItem contend={'Click Me'} isButton/>
        </ul>
    </nav>
  )
}
