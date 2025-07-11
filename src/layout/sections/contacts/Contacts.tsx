import {SectionTitle} from "../../../components/common/SectionTitle.ts";
import {FlexWrapper} from "../../../components/Wrappers/FlexWrapper.ts";
import {Field} from "./field/Field.tsx";
import {Button} from "../../../components/common/Button.ts";
import {InfoBox} from "./infoBox/InfoBox.tsx";
import {keyGenerator} from "../../../components/common/keyGenerator.ts";
import {Container} from "../../../components/common/Container.ts";
import React, {ElementRef, useRef} from "react";
import {S} from './Contacts_Styles.ts'
import emailjs from '@emailjs/browser';

const contactsData = [
    {
        iconId: 'map',
        data: {
            Country: 'Bangladesh',
            City: 'Dhaka',
            State: '35 vhatara, Badda'
        }
    },
    {
        iconId: 'mail',
        data: {
            Email: 'youremail@gmail.com',
            Skype: '@yourusername',
            Telegram: '@yourusername'
        }
    },
    {
        iconId: 'mobile',
        data: {
            'Support services': '15369',
            Office: '+58 (021) 356 587 235',
            Personal: '+58 (021) 356 587 235'
        }
    },
]

export const Contacts: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return;

        emailjs
            .sendForm('service_etc6zme', 'template_2n7ppjc', form.current, {
                publicKey: 'RgXNzTJGCBj-pl9LG',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <S.Contacts id="contacts">
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                        <FlexWrapper gap='30px' justify='center' wrap='wrap'>
                            <S.Form ref={form} onSubmit={sendEmail}>
                                <Field label={'Your Full Name'} name={'user_name'} />
                                <Field label={'Your Email'} inputType={'email'} name={'email'}/>
                                <Field label={'Subject'} name={'subject'}></Field>
                                <Field label={'Your Message'} fieldType='textarea' name={'message'}/>
                                <Button type={'submit'}>send message</Button>
                            </S.Form>
                            <FlexWrapper direction={'column'} gap='18px'>
                                {
                                    contactsData.map((item) => {
                                        return (
                                            <InfoBox key={keyGenerator()} iconId={item.iconId} data={item.data}/>
                                        )
                                    })
                                }
                            </FlexWrapper>
                        </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};



