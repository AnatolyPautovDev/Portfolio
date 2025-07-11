import React from 'react';
import {keyGenerator} from "../../../../components/common/keyGenerator.ts";
import {S} from '../HeaderMenu_Styles.ts'


const items = [
    {
        title: 'Home',
        link: 'home'
    },
    {
        title: 'About',
        link: 'about'
    },
    {
        title: 'Tech Stack',
        link: 'skills'
    },
    {
        title: 'Projects',
        link: 'projects'
    },
    {
        title: 'Contacts',
        link: 'contacts'
    },
]

export const Menu: React.FC = () => {
    return (
        <ul role="menu">
            {
                items.map(item => {
                    return (
                        <li key={keyGenerator()} role="menuitem">
                            <S.NavLink activeClass="active" spy to={item.link} smooth offset={-60}>{item.title}</S.NavLink>
                        </li>
                    )
                })
            }
        </ul>
    );
};

