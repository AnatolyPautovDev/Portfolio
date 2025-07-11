import {S} from '../About_Styles.ts'
import {AboutItem} from "../aboutItem/AboutItem.tsx";
import {keyGenerator} from "../../../../components/common/keyGenerator.ts";
import React from "react";

type AboutListProps = {
    title: string,
    data: Array<{caption:string, busyness:string, organization?:string, location?:string, period?:string}>,
}

export const AboutList:React.FC<AboutListProps> = (props: AboutListProps) => {
    return (
        <>
            <S.Title>{props.title}</S.Title>
            <S.List>
                    {
                        props.data.map((item) => {
                            return (
                                <AboutItem
                                    key={keyGenerator()}
                                    caption={item.caption}
                                    busyness={item.busyness}
                                    organization={item.organization}
                                    location={item.location}
                                    period={item.period}
                                />
                            )
                        })
                    }
            </S.List>
        </>

    );
};

