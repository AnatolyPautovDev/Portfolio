import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {Socials} from "./socials/Socials.tsx";
import {Container} from "../../components/common/Container.ts";
import {FlexWrapper} from "../../components/Wrappers/FlexWrapper.ts";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import React from "react";
import {S} from './Header_Styles.ts'



export const Header: React.FC = () => {

    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const breakpoint = 992;

    React.useEffect( () => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between" align='center'>
                    <Logo/>
                    <FlexWrapper gap='50px'>
                        {width > breakpoint ? <DesktopMenu />
                               : <MobileMenu />}
                        <Socials/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

