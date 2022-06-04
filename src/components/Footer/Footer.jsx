import React from 'react';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
} from 'react-icons/ai';
import { FaStackOverflow } from 'react-icons/fa';
// import { BsStackOverflow } from 'react-icons/bs';
import {
    ButtonBack,
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { Hr } from '../Projects/ProjectsStyles';
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <Section id='contact' nopadding>
                <SectionTitle>Contact</SectionTitle>
                <LinkList>
                    <LinkColumn>
                        <LinkTitle>Call</LinkTitle>
                        <LinkItem href='tel:314-343-3432'>
                            314-343-3432
                        </LinkItem>
                    </LinkColumn>
                    <LinkColumn>
                        <LinkTitle>Email</LinkTitle>
                        <LinkItem href='mailto:contact@example.com'>
                            contact@example.com
                        </LinkItem>
                    </LinkColumn>
                    <LinkColumn>
                        <LinkTitle>Address</LinkTitle>
                        <LinkItem href='https://goo.gl/maps/38xqUzn9evVYgBVG9'>
                            New York, NY
                        </LinkItem>
                    </LinkColumn>
                    <LinkColumn>
                        <LinkTitle>Phone</LinkTitle>
                        <LinkItem href='tel:0123456780'>0123456780</LinkItem>
                    </LinkColumn>
                </LinkList>
                <SectionDivider divider />
            </Section>
            <Section nopadding id='resume'>
                <SectionTitle>Resume</SectionTitle>

                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/file/d/16ChiELjjlb6u76pc3oqw1DwzfNXnZ8zU/view?usp=sharing'
                >
                    <ButtonBack>Download</ButtonBack>
                </a>

                <SocialIconsContainer>
                    <CompanyContainer>
                        <Slogan>Learn More About me</Slogan>
                    </CompanyContainer>
                    <SocialContainer>
                        <SocialIcons href='https://google.com'>
                            <AiFillGithub size='3rem' />
                        </SocialIcons>
                        <SocialIcons href='https://google.com'>
                            <AiFillLinkedin size='3rem' />
                        </SocialIcons>
                    </SocialContainer>
                </SocialIconsContainer>

                <Hr />

                <SocialIconsContainer>
                    <CompanyContainer>
                        <Slogan>Find me on Other Platforms</Slogan>
                    </CompanyContainer>
                    <SocialContainer>
                        <SocialIcons href='https://google.com'>
                            <FaStackOverflow size='3rem' />
                        </SocialIcons>
                        <SocialIcons href='https://google.com'>
                            <AiFillTwitterCircle size='3rem' />
                        </SocialIcons>
                    </SocialContainer>
                </SocialIconsContainer>
            </Section>
        </FooterWrapper>
    );
};

export default Footer;
