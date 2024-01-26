import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../../components/layout/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'
import Icon from '../../components/icon'

import thumbISIA from '../../public/images/works/ISIA.jpg'
import thumbSpotify from '../../public/images/works/spotify.png'
import thumbAntenas from '../../public/images/works/antenas.jpg'
import thumbHulu from '../../public/images/works/hulu.jpg'
import thumbUber from '../../public/images/works/uber.png'
import thumbAdmin from '../../public/images/works/admin.png'
import thumbAmazon from '../../public/images/works/amazon.jpg'
import thumbSolana from '../../public/images/works/solana-worlds.png'

import iconreact from '../../public/images/icons/react.png'
import iconmysql from '../../public/images/icons/mysql.png'
import iconnextjs from '../../public/images/icons/nextjs.png'
import iconnodejs from '../../public/images/icons/nodejs.png'
import iconreactnative from '../../public/images/icons/react-native.png'
import iconredux from '../../public/images/icons/redux.png'
import icontailwind from '../../public/images/icons/tailwindcss.png'
import iconmongodb from '../../public/images/icons/mongodb.png'
import iconfirebase from '../../public/images/icons/firebase.png'
import iconchart from '../../public/images/icons/chartjs.svg'
import icongoogle from '../../public/images/icons/google-api.png'
import iconsolana from '../../public/images/icons/solana.png'

const Works = () => (
  <Layout title="Works">
    <Container mt={20} maxWidth={'700px'}>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="solana" title="Solana Worlds" thumbnail={thumbSolana} href='https://solana-worlds.vercel.app/'>
            ¡Bienvenido a "Solana Worlds", la revolucionaria DApp (aplicación descentralizada) que te sumergirá en un emocionante juego de mundos interconectados!
          </WorkGridItem>
          <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={1}>
            <Icon icon={iconnextjs} title='NextJS'></Icon>
            <Icon icon={iconreact} title='React'></Icon>
            <Icon icon={iconmysql} title='MySQL'></Icon>
            <Icon icon={iconnodejs} title='NodeJS'></Icon>
            <Icon icon={iconsolana} title='Solana'></Icon>
          </Box>
        </Section>
        <Section>
          <WorkGridItem id="isia" title="ISIA" thumbnail={thumbISIA} href='https://www.isia.com.mx/'>
          Website made with React, Redux, NodeJS and MySQL for a company dedicated to the sale of automation 
          products.
          </WorkGridItem>
          <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={1}>
            <Icon icon={iconreact} title='React'></Icon>
            <Icon icon={iconredux} title='Redux'></Icon>
            <Icon icon={iconmysql} title='MySQL'></Icon>
            <Icon icon={iconnodejs} title='NodeJS'></Icon>
          </Box>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbAdmin} title="Admin-Shop" href={'https://github.com/MrMannye/React-Shop-Admin'}>
            Website made for the certification as a Frontend Developer with React in Platzi, with the functionality 
            of a dashboard for administrator.
          </WorkGridItem>
          <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={1}>
            <Icon icon={iconreact} title='React'></Icon>
            <Icon icon={iconredux} title='Redux'></Icon>
            <Icon icon={iconmongodb} title='MongoDB'></Icon>
            <Icon icon={iconnodejs} title='NodeJS'></Icon>
            <Icon icon={iconchart} title='ChartJS'></Icon>
          </Box>
        </Section>
        <Section>
          <WorkGridItem
            id="spotify"
            title="Spotify Clone"
            thumbnail={thumbSpotify}
            href='https://github.com/MrMannye/Spotify-Clone'
          >
            Spotify clone page using spotify-web-api to login, view your playlists and listen to your songs 
            as if you were using the original application.
          </WorkGridItem>
          <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={1}>
            <Icon icon={iconnextjs} title='NextJS'></Icon>
            <Icon icon={iconreact} title='React'></Icon>
            <Icon icon={icontailwind} title='Tailwind CSS'></Icon>
          </Box>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="antenas"
            title="Lineas de Transmision"
            thumbnail={thumbAntenas}
            href='https://github.com/MrMannye/Calculadora-Impedancia'
          >
            Web page where you can find a transmission line calculator for Antennas. 
            With it you can calculate impedances as well as dimensions of the same.
          </WorkGridItem>
          <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={1}>
            <Icon icon={iconnextjs} title='NextJS'></Icon>
            <Icon icon={iconreact} title='React'></Icon>
            <Icon icon={icontailwind} title='Tailwind CSS'></Icon>
          </Box>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="hulu" thumbnail={thumbHulu} title="Hulu Clone" href={'https://github.com/MrMannye/Hulu-Clone'}>
            Project to improve my skills with the Tecnologies of the Framework NextJS and TailwindCSS for the styles
          </WorkGridItem>
          <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={1}>
            <Icon icon={iconnextjs} title='Next'></Icon>
            <Icon icon={iconreact} title='React'></Icon>
            <Icon icon={icontailwind} title='Tailwind CSS'></Icon>
          </Box>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="uber" thumbnail={thumbUber} title="Uber Clone" href={'https://github.com/MrMannye/Uber-Clone'}>
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
          <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={1}>
            <Icon icon={iconreact} title='Redux'></Icon>
            <Icon icon={iconreactnative} title='Native'></Icon>
            <Icon icon={icontailwind} title='Tailwind CSS'></Icon>
            <Icon icon={icongoogle} title='Google Maps API'></Icon>
          </Box>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="amazon"
            thumbnail={thumbAmazon}
            title="Amazon Clone"
            href={'https://github.com/MrMannye/Amazon-Clone'}
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
          <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={1}>
            <Icon icon={iconnextjs} title='Next'></Icon>
            <Icon icon={iconreact} title='Redux'></Icon>
            <Icon icon={iconfirebase} title='Firebase'></Icon>
          </Box>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works