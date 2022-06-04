import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Head from 'next/head';
import { Layout } from '../layout/Layout.jsx';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
    return (
        <Layout>
            <Head>
                <title>Portfolio</title>
            </Head>
            <Section id='about' grid>
                <Hero />
            </Section>
            <Projects />
            <Acomplishments />
        </Layout>
    );
};

export default Home;
