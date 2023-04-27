import React from 'react';
import {Stack,Heading} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Starships from '../Starships';


const Container = () => {
    return (
    
        <Stack spacing={6}>
           <Link to='/'>
                <Heading textTransform='uppercase' textShadow='3px 3px #008ae6' m='6' as='h1' size='4xl' noOfLines={1} color="white">
                    Star Wars
                </Heading>
                </Link>
        </Stack>
    )
}

export default Container
