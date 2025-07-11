import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../styles/Theme.ts";
import {animateScroll as scroll} from 'react-scroll';
import {useEffect, useState} from "react";

export const GoTopBtn = () => {

     const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        });
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId='arrowGoTop' width="24"/>
                </StyledGoTopBtn>
            )}
        </>

    );
};

const StyledGoTopBtn = styled.button`
    width: 40px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: ${theme.colors.accent};
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    cursor: pointer;
`
