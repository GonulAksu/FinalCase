import React from 'react';
import {Stack,Heading} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Container = () => {
    return (
        <Stack spacing={6}>
           
                <Heading textTransform='uppercase' textShadow='3px 3px #008ae6' m='6' as='h1' size='4xl' noOfLines={1} color="white">
                    Star Wars
                </Heading>
           
        </Stack>
    )
}

export default Container
