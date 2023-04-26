import React from 'react';
import {Stack,Heading} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Container = () => {
    return (
        <Stack spacing={6}>
            <Link to="/" variant="link">
                <Heading textShadow='1px 1px #ff0000' m='6' as='h1' size='4xl' noOfLines={1}>
                    Star Wars
                </Heading>
            </Link>
        </Stack>
    )
}

export default Container
