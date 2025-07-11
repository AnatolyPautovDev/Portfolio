import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/Wrappers/FlexWrapper.ts";
import {Container} from "../../components/common/Container.ts";
import React from "react";
import {S} from './Footer_Styles.ts'

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.FooterContacts>
                    <Logo dark/>
                    <FlexWrapper align="center" gap='50px'>
                        <S.Link href='tel:+911234509876'>+91 12345 09876</S.Link>
                        <S.Link href="mailto:info@example.com">info@example.com</S.Link>
                    </FlexWrapper>
                </S.FooterContacts>
                <S.Author>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></S.Author>
            </Container>
        </S.Footer>
    );
};
