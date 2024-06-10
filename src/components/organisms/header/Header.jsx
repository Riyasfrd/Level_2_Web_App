/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Button, Logo, IconHumberg } from "../../atom"
import { Menu } from "../../molecules"


export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
            <div className="header__container">
                <Logo/>

                <Menu isOpen={isMenuOpen}/>

                <IconHumberg toggleMenu1={toggleMenu}/>
                
                <div className="header__action">
                    <Button buttonTitlte={'Click Me'} buttonType={'button__primary'}/>
                </div>
            </div>
        </header>
  )
}
