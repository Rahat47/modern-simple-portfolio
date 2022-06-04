import React from 'react';

import {
    Section,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection, RightSection, ImageWrapper } from './HeroStyles';
import Image from 'next/image';

const Hero = () => (
    <>
        <Section row nopadding full>
            <LeftSection>
                <SectionTitle center>
                    Hi There <br />
                    I'm <span>Juan Carlos</span>
                </SectionTitle>
                <SectionText>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt, eius velit hic, eligendi modi dicta ipsa
                    dignissimos possimus assumenda ratione itaque distinctio
                    repellat, quam voluptatum iure blanditiis fugit quos fuga.
                </SectionText>
            </LeftSection>
        </Section>
        <Section row nopadding full>
            <RightSection>
                <ImageWrapper>
                    <Image
                        src='/images/profile.jpeg'
                        alt='profile'
                        width={500}
                        height={500}
                        objectFit='cover'
                    />
                </ImageWrapper>
            </RightSection>
        </Section>
    </>
);

export default Hero;
