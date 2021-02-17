import styled, { css } from 'styled-components'
import Link from 'next/link'
import { TextStyleVariantsMap } from '../../foundation/Text'


const MenuWrapper = styled.div`
    margin-top: 100vh;
    position: sticky;
    top: 0;
    height: 45px;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
     ${TextStyleVariantsMap.subTitle}
     padding: 2rem 3rem;
     text-shadow: .05em .05em .1em ${({ theme }) => theme.colors.primary.main. contrastText};
`

MenuWrapper.LeftSide = styled.div`
   
`

MenuWrapper.RightSide = styled.div`
    display: flex;
    li{
        margin-left: 1rem;
        a{
            color: ${({ theme }) => theme.colors.primary.main.color};
            text-decoration: none;
        }
    }
`

export default function Menu() {
    const links = [
        {
            texto: 'Work',
            url: '/work'
        },
        {
            texto: 'Contact',
            url: '/contact'
        },
    ]

    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                FunFuns
            </MenuWrapper.LeftSide>
            <MenuWrapper.RightSide>
                {links.map(link => {
                    return (
                        <li key={link.url}>
                            <Link href={link.url}>
                                {link.texto}
                            </Link>
                        </li>
                    )
                })}
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )

}