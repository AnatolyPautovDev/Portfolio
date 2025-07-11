import {Icon} from "../icon/Icon.tsx";
import React from "react";
import {animateScroll as scroll} from 'react-scroll';

type LogoProps = {
    dark?: boolean;
}

export const Logo:React.FC<LogoProps> = (props: LogoProps) => {
    return (
        <a onClick={() => {scroll.scrollToTop()}} href='#'>
            <Icon iconId={props.dark ? 'logoDark':'logo'} width='97' height='59' />
        </a>
    );
};