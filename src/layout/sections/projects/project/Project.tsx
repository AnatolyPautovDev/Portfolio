import {TechStack} from "./TechStack.tsx";
import {FlexWrapper} from "../../../../components/Wrappers/FlexWrapper.ts";
import {S} from '../Projects_Styles.ts'
import React from "react";

type ProjProps = {
    imageSrc: string
    alt: string
    title: string
    description: string
    techStackList: Array<string>
}

export const Project: React.FC<ProjProps> = (props: ProjProps) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.imageSrc} alt={props.alt}/>
            </S.ImageWrapper>

            <FlexWrapper direction="column" >
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
                <TechStack stackList={props.techStackList}/>
                <FlexWrapper gap={'50px'}>
                    <S.Link href={'#'}>Live Preview</S.Link>
                    <S.Link href={'#'}>View Code</S.Link>
                </FlexWrapper>
            </FlexWrapper>
        </S.Project>
    );
};


