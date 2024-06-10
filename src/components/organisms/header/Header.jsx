/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Logo, IconHumberg } from "../../atom"
import { Menu } from "../../molecules"


export const Header = () => {
  return (
    <header className="header">
            <div className="header__container">
                <Logo/>

                <Menu/>

                <IconHumberg/>
                
                <div className="header__action">
                    <Button buttonTitlte={'Click Me'} buttonType={'button__primary'}/>
                </div>
            </div>
        </header>
  )
}
