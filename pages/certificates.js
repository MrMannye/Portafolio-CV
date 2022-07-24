import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import cryptos from '../public/certificates/cryptos.jpg'
import javascript from '../public/certificates/javascript.jpg'
import nextjs from '../public/certificates/nextjs.jpg'
import webpack from '../public/certificates/webpack.jpg'
import freact from '../public/certificates/freact.jpg'
import wireframe from '../public/certificates/wireframe.jpg'
import node from '../public/certificates/node.jpg'
import uxdesign from '../public/certificates/uxdesign.jpg'
import emphatize from '../public/certificates/emphatize.jpg'
import AZ900 from '../public/certificates/AZ-900.jpg'
import Google from '../public/certificates/Google.jpg'
import Chatbot from '../public/certificates/Chatbot.png'
import Data from '../public/certificates/Data.png'


const Certificates = () => (
    <Layout title="Certificates">
        <Container mt={20} maxWidth={'700px'}>
            <Heading as="h3" fontSize={20} mb={4}>
                Certicates
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="microsoft" title="AZ900 - Microsoft" thumbnail={AZ900}>
                    </WorkGridItem> 
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="google" thumbnail={Google} title="Web Developer - Google">
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="react"
                        title="Frontend con ReactJS - Platzi"
                        thumbnail={freact}
                    >
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="javascript"
                        title="Escuela de JavaScript - Platzi"
                        thumbnail={javascript}
                    >
                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem id="uxdesign" title="Foundamentals UX Design - Google" thumbnail={uxdesign}>
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="emphatize" thumbnail={emphatize} title="Start UX Design Process - Google">
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="wireframe" thumbnail={wireframe} title="Build Wireframes - Google">
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="nextjs" title="NextJS - Platzi" thumbnail={nextjs}>
                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem id="antenas" title="Data Science Tools - IBM" thumbnail={Data}>
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="ibm" thumbnail={Chatbot} title="Build Your Own Chatbot - IBM">
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="webpack" thumbnail={webpack} title="WebPack - Platzi">
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="node"
                        title="Backend con NodeJS - Platzi"
                        thumbnail={node}
                    >
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Certificates