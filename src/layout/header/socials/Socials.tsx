import {Icon} from "../../../components/icon/Icon.tsx";
import {S} from './Socials_Styles.ts'
import {keyGenerator} from "../../../components/common/keyGenerator.ts";
import React from "react";

const socialsData = [
    {
        href: '#',
        ariaLabel: 'git hub link',
        iconId: 'git-hub-link',
        width: '30'
    },
    {
        href: '#',
        ariaLabel: 'twitter link',
        iconId: 'twitter',
        width: '30',
        viewBox: '0 0 32 32'
    },
    {
        href: '#',
        ariaLabel: 'linkedin link',
        iconId: 'linkedin',
        width: '30'
    }
]

export const Socials:React.FC = () => {
    return (
        <S.Socials>
            <ul>
                {
                    socialsData.map(item => {
                        return (
                            <li key={keyGenerator()}>
                                <a href={item.href} aria-label={item.ariaLabel}>
                                    <Icon iconId={item.iconId} width={item.width} viewBox={item.viewBox}/>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </S.Socials>
    );
};

