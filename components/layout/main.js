import Head from 'next/head'
import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelCat from '../Cat'
import Footer from '../footer'

export default function Main({ children, router }) {
  return (
    <Box as='main' pb={8}>
      <Head>
        <title>Miguel Aguilera</title>
      </Head>

      <Navbar path={router.asPath} />
      {/* <SocialLg></SocialLg> */}
      <Container maxW='container.md' pt={14}>
        <VoxelCat />
        {children}
        <Footer></Footer>
      </Container>

    </Box>
  )
}
