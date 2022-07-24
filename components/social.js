import { IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import { List, Button, ListItem, Link } from '@chakra-ui/react'
import { Show } from '@chakra-ui/react'

export const SocialMd = () => {
    return(
        <List spacing={3} mt={2}>
            <ListItem>
                <Link href='https://github.com/MrMannye' target={'_blank'}>
                    <Button variant={'link'} colorScheme='teal' leftIcon={<IoLogoGithub fontSize={'30px'} />}>
                        @MrMannye
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='https://www.linkedin.com/in/miguel-aguilera-sanchez-233567209/' target={'_blank'}>
                    <Button variant={'link'} colorScheme='teal' leftIcon={<IoLogoLinkedin fontSize={'30px'} />}>
                        Miguel Aguilera
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
            <Link href='https://api.whatsapp.com/send?phone=5564007133' target={'_blank'}>
                    <Button variant={'link'} colorScheme='teal' leftIcon={<IoLogoWhatsapp fontSize={'30px'} />}>
                        Miguel
                    </Button>
                </Link>
            </ListItem>
        </List>)
}

export const SocialLg = () => {
    return(
        <Show above='md'>
        <List spacing={3} mt={2} position={{lg:'fixed'}} top={'40%'} right={10}>
            <ListItem>
                <Link href='https://github.com/MrMannye' target={'_blank'}>
                    <Button variant={'link'} colorScheme='teal' leftIcon={<IoLogoGithub fontSize={'30px'} />}>
                        @MrMannye
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='https://www.linkedin.com/in/miguel-aguilera-sanchez-233567209/' target={'_blank'}>
                    <Button variant={'link'} colorScheme='teal' leftIcon={<IoLogoLinkedin fontSize={'30px'} />}>
                        Miguel Aguilera
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='https://api.whatsapp.com/send?phone=5564007133' target={'_blank'}>
                    <Button variant={'link'} colorScheme='teal' leftIcon={<IoLogoWhatsapp fontSize={'30px'} />}>
                        Miguel
                    </Button>
                </Link>
            </ListItem>
        </List>
        </Show>)
}