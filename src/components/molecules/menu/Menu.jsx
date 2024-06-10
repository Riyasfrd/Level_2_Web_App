/* eslint-disable jsx-a11y/anchor-is-valid */
import { MenuItem} from "../../atom"

export const Menu = () => {
  return (
    <nav className="menu" id="menu">
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
