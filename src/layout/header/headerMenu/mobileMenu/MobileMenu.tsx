import {Menu} from "../menu/Menu.tsx";
import React, {useState} from "react";
import {S} from "../HeaderMenu_Styles.ts";
import { Events } from 'react-scroll';

export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}

    Events.scrollEvent.register('begin', () => {
        setTimeout(() => {setMenuIsOpen(false)}, 100)
    })

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick} aria-haspopup='true'>
                <span></span>
            </S.BurgerButton>

            <S.MenuPopup isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)}}>
                <Menu />
            </S.MenuPopup>

        </S.MobileMenu>
    );
};



