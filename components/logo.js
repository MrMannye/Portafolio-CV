import React from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import styled from '@emotion/styled'
import Image from 'next/image'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex; 
    align-items: center; 
    height: 30px; 
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: rotate(20deg);
    }
`;

export default function logo() {
    const footPrintImg = `/images/footprint${useColorModeValue('','-dark')}.png`;
    return (
        <Link href='/'>
            <a href="">
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt='Logo Image'></Image>
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight={'bold'}
                        ml={3}
                    >
                        Miguel Aguilera
                    </Text>
                </LogoBox>
            </a>
        </Link>
  )
}
