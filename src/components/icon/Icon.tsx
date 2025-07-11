import iconsSprite from '../../assets/images/icons-sprite.svg'
import React from "react";

type IconProps = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon:React.FC<IconProps> = (props: IconProps) => {
    return (
        <svg width={props.width || '50'} height={props.height || props.width || '50'} viewBox={props.viewBox || `0 0 ${props.width} ${props.height || props.width}` || '0 0 50 50'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    );
};

