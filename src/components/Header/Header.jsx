import { useState } from 'react';
import Link from 'next/link';
import { DiCssdeck } from 'react-icons/di';
import { BsChevronBarDown } from 'react-icons/bs';
import Scrollspy from 'react-scrollspy';
import { Container, Div1, Div2, NavLink, MenuExpander } from './HeaderStyles';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const sectionIds = ['about', 'portfolio', 'contact', 'resume'];
    return (
        <Container>
            <Div1>
                <Link href='#home'>
                    <a
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'white',
                        }}
                    >
                        {/* Change it to something you like */}
                        <DiCssdeck size='3rem' /> <span>Portfolio</span>
                    </a>
                </Link>
            </Div1>

            <MenuExpander>
                <BsChevronBarDown
                    size='2.5rem'
                    onClick={() => setExpanded(prev => !prev)}
                />
            </MenuExpander>
            <Div2
                expand={expanded}
                items={sectionIds}
                currentClassName='active'
            >
                <li>
                    <Link href='#about'>
                        <NavLink>About Me</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href='#portfolio'>
                        <NavLink>Portfolio</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href='#contact'>
                        <NavLink>Contact</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href='#resume'>
                        <NavLink>Resume</NavLink>
                    </Link>
                </li>
            </Div2>
        </Container>
    );
};

export default Header;
