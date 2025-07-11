import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Link} from "react-scroll";

// Menu

const NavLink = styled(Link)`
    font-family: "DM Sans", sans-serif;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
`

// Mobile Menu

const MobileMenu = styled.nav`
    
`

const MenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(66, 68, 110, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: .6s ease-in-out;
    
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
        transition: .6s ease-in-out;

        a {
            color: ${theme.colors.primary};
            font-size: 22px;
            font-weight: 700;
        }

    }

    ${(props) => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
        backdrop-filter: blur(2px);
        & ul {
            row-gap: 50px;
        }
    `} 
    
    `

const BurgerButton = styled.button<{isOpen: boolean}>`
    width: 40px;
    height: 40px;
    z-index: 999999;
    ${(props) => props.isOpen && css<{ isOpen: boolean }>`
        position: fixed;
        top: 20px;
        right: 25px;
    `}
    
    span {
        display: block;
        width: 40px;
        height: 2px;
        background-color: ${theme.colors.darkContent};
        transition: .3s linear;
        

        ${(props) => props.isOpen && css<{ isOpen: boolean }>`
            background-color: transparent;
        `}
        
        &::before {
            content: "";
            display: block;
            width: 40px;
            height: 2px;
            background-color: ${theme.colors.darkContent};
            transform: translateY(-10px);
            transition: .3s linear;

            ${(props) => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0px) rotate(-45deg);
                background-color: ${theme.colors.primary};
        `}
        }

        &::after {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.darkContent};
            transform: translateY(10px);
            transition: .4s linear;

            ${(props) => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0px) rotate(45deg);
                background-color: ${theme.colors.primary};
                width: 40px;
            `}
        }
    }
`

// Desktop Menu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        column-gap: 50px;
    }
`

export const S = {
    NavLink,
    MobileMenu,
    MenuPopup,
    BurgerButton,
    DesktopMenu,
}