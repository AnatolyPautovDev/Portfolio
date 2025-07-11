import {FlexWrapper} from "../../../../components/Wrappers/FlexWrapper.ts";
import {S} from '../About_Styles.ts'
import React from "react";


type AboutItemProps = {
    caption: string
    busyness: string
    organization?: string
    location?: string
    period?: string
}

export const AboutItem:React.FC<AboutItemProps> = (props: AboutItemProps) => {
    return (
        <S.Item>
                <FlexWrapper justify="space-between" align="center">
                    <S.Caption>{props.caption}</S.Caption>
                    <S.Busyness>{props.busyness}</S.Busyness>
                </FlexWrapper>
                <FlexWrapper justify="space-between" align="center">
                    <FlexWrapper justify="space-between">
                        {props.organization && <S.Organization>{props.organization}</S.Organization>}
                        {props.location && <S.Location>{props.location}</S.Location>}
                    </FlexWrapper>
                    {props.period && <S.Period>{props.period}</S.Period>}
                </FlexWrapper>
        </S.Item>
    );
};



