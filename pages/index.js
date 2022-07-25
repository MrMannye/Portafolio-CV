import { Container, Box, Heading, Button, Text, useColorModeValue, Image, SimpleGrid} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { Link } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layout/article"
import { useEffect } from "react"
import {SocialMd} from '../components/social'
import Icon from '../components/icon'

import iconmysql from '../public/images/icons/mysql.png'
import iconreact from '../public/images/icons/react.png'
import iconnextjs from '../public/images/icons/nextjs.png'
import iconnodejs from '../public/images/icons/nodejs.png'
import iconredux from '../public/images/icons/redux.png'
import icontailwind from '../public/images/icons/tailwindcss.png'
import iconmongodb from '../public/images/icons/mongodb.png'
import iconfirebase from '../public/images/icons/firebase.png'

export default function Home() {  

  useEffect(() => {
    window.scrollTo(0,10)
  })

  return (
    <Layout>
    <Container mt={20} maxWidth={'700px'} position='relative'>
      <Box borderRadius={'lg'} p={3} mb={6} align='center' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}> 
        Hello, I&apos;m a Frontend Developer based in Mexico. Currently I&apos;m studying the bachelor degree
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant='page-title'>
            Miguel Aguilera
          </Heading>
          <p> C++, Java, JavaScript, SQL, Python, Node</p>
        </Box>
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md:6}} align={'center'}>
          <Image 
            borderColor={'whiteAlpha.800'} 
            borderWidth={2} 
            borderStyle={'solid'} 
            maxWidth='100'
            display='inline-block'
            src="/images/Miguel.png"
            alt="Image Profile"
            borderRadius={'full'}
          ></Image>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as={'h3'} variant='section-title'>
          Work
        </Heading>
        <Paragraph>
          Student of the Interdisciplinary Professional Unit in Engineering and Advanced
          Technologies, currently in my last two semesters of college. I have different
          projects with Python, C, C++, JavaScript, Java and databases with MySQL and
          MongoDB.
          One year experience in web development with extensive knowledge in MERN Stack Developer (MongoDB, Express, React, Node).
          <br />
          Also I&apos;m passionate about cybersecurity technologies and Artificial Intelligence
          {' '}
          <NextLink href='https://github.com/MrMannye' target={'_blank'}>
            <Link>Github</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align='center' my={8}>
          <NextLink href={'/works'}>
            <Button alignItems={'center'} rightIcon={<ChevronRightIcon/>}>
              <Text pb={1}>My Portafolio</Text>
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Mexico City, Mexico
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Studying Telematic Engineering in the area of Informatics at the Interdisciplinary Professional Unit in Engineering and Advanced Technologies IPN.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at ISIA - Soft Symphony (For one year)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.5}>
      <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <SimpleGrid columns={[3, 3 , 4]} gap={6} justifyContent='center' alignItems={'center'}>
            <Link href="https://nextjs.org/">
                <Icon icon={iconnextjs} title='NextJS'/>
            </Link>
            <Link href="https://es.reactjs.org/">
                <Icon icon={iconreact} title='ReactJS'/>
            </Link>
            <Link href="https://es.redux.js.org/">
                <Icon icon={iconredux} title='Redux'/>
            </Link>
            <Link href="https://www.mongodb.com/es">
                <Icon icon={iconmongodb} title='MoongoDB'/>
            </Link>
            <Link href="https://nodejs.org/es/">
                <Icon icon={iconnodejs} title='NodeJS'/>
            </Link>
            <Link href="https://www.mysql.com/">
                <Icon icon={iconmysql} title='MySQL'/>
            </Link>
            <Link href="https://tailwindcss.com/">
                <Icon icon={icontailwind} title='TailwindCSS'/>
            </Link>
            <Link href="https://firebase.google.com/">
                <Icon icon={iconfirebase} title='Firebase'/>
            </Link>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art,{' '}
          <Link href="https://open.spotify.com/playlist/2uMguICmsz9ikGMXnMZhOR?si=624306dba3cc4310" target="_blank">
            Music
          </Link>
          , Playing Videogames,{' '}
          , Cybersecurity, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.4}>
      <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <SocialMd></SocialMd>
      </Section>

    </Container>
    </Layout>
  )
}
