import React from 'react'
import NextLink from 'next/link'
import {
    Container,
    Box, 
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import Logo from './logo'

const LinkItem = ({href, path, children}) => {
    const active = path === href 
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return(
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#9b9b9b' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

function Navbar(props) {

    const { path } = props; 

    return (
        <Box
            position={'fixed'}
            as='nav'
            w='100%'
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
            {...props}
        >
            <Container display={'flex'} p={2} maxW='container.md' wrap='wrap' alignItems={'center'} justifyContent={'space-between'}>
                <Flex align={'center'}>
                    <Heading as={'h1'} size='lg' letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>
                <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems='center'
                flexGrow={1}
                mt={{base: 4, md: 0}}
                >
                    <LinkItem href={"/works"} path={path}>Works</LinkItem>
                    <LinkItem href={"/certificates"} path={path}>Certificates</LinkItem>
                </Stack>
                <Box flex={1} align='right'>
                    <ThemeToggleButton/>
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant='outline' arial-label='Options'></MenuButton>
                            <MenuList>
                                <NextLink href={"/"} passHref>
                                    <MenuItem as={Link} style={{textDecoration: 'none'}}>About</MenuItem>
                                </NextLink>
                                <NextLink href={"/works"} passHref>
                                    <MenuItem as={Link} style={{textDecoration: 'none'}}>Works</MenuItem>
                                </NextLink>
                                <NextLink href={"/certificates"} passHref>
                                    <MenuItem as={Link} style={{textDecoration: 'none'}}>Certicates</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
  )
}

export default Navbar