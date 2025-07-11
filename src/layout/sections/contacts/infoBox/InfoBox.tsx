import {Icon} from "../../../../components/icon/Icon.tsx";
import {keyGenerator} from "../../../../components/common/keyGenerator.ts";
import {S} from '../Contacts_Styles.ts'
import React from "react";

type InfoBoxProps = {
    iconId: string
    data: object
}


export const InfoBox:React.FC<InfoBoxProps> = (props: InfoBoxProps) => {
    return (
        <S.Box>
            <S.Circle>
                <Icon iconId={props.iconId} width='18'/>
            </S.Circle>
            <S.List>
                {
                    Object.entries(props.data).map(([property, value]) => {
                        return (
                            <S.ListItem key={keyGenerator()}>
                                <span>{property}:</span><span>{value}</span>
                            </S.ListItem>
                        )
                    })
                }
            </S.List>
        </S.Box>
    );
};

