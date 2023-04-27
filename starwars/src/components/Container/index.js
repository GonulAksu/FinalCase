import React from 'react';
import {Stack,Heading} from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const Container = () => {
    return (
        <>
        <Stack spacing={6}>
           <Link to='/'>
                <Heading textTransform='uppercase' textShadow='3px 3px #1A94DA' m='6' as='h1' size='4xl' noOfLines={1} color="white" fontFamily='Crete Round, serif'>
                    Star Wars
                </Heading>
                </Link>
        </Stack>
        </>
    )
}

export default Container
