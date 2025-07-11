import {S} from '../Contacts_Styles.ts'
import React from "react";

type FieldPropsType = {
    fieldType?: 'textarea' | 'input',
    label: string
    inputType?: string
    name?: string
}

export const Field:React.FC<FieldPropsType>  = (props: FieldPropsType) => {
    return (
        <S.Label>
            {props.label}
            {props.fieldType === 'textarea' ? (<textarea required name={props.name} />) : (<input required type={props.inputType} name={props.name} />)}
        </S.Label>
    );
};


