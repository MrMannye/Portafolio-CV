import { Box, Text } from "@chakra-ui/react";
import Image from 'next/image'


const Icon = ({ icon, title }) => {
    return (

        <Box display={'flex'} flexDirection='column' alignItems='center' mx={2}>
            <Image src={icon} alt='Icon' width={40} height={40} />
            <Text mt={-1} fontSize={12}>{title}</Text>
        </Box>

    )
}

export default Icon;