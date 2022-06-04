import React from 'react';

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from './ProjectsStyles';
import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
    <Section nopadding id='portfolio'>
        <SectionDivider />
        <SectionTitle main>Portfolio</SectionTitle>
        <GridContainer>
            {projects.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <Img src={p.image} />
                        <TitleContent>
                            <a
                                href={p.visit}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <HeaderThree title>{p.title}</HeaderThree>
                            </a>
                            <Hr />
                        </TitleContent>
                        <CardInfo className='card-info'>
                            {p.description}
                        </CardInfo>
                        <div>
                            <TitleContent>Stack</TitleContent>
                            <TagList>
                                {p.tags.map((t, i) => {
                                    return <Tag key={i}>{t}</Tag>;
                                })}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={p.visit}>Live</ExternalLinks>
                            <ExternalLinks href={p.source}>
                                Source
                            </ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </Section>
);

export default Projects;
