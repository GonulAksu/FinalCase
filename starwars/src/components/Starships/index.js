import React from 'react';
import useListShips from '../../context/ShipsContext';
import Form from '../Form';
import { Spinner,Grid, Center } from '@chakra-ui/react';
import Detail from '../Detail';
import NotFound from '../NotFound';

const Starships = () => {
    const { starships, loa } = useListShips();
    console.log(starships);
    return (
        <div>
           <Form></Form>
            <br />
            {
             loa ?<Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />:
            starships.length===0 ? <NotFound/>
            :<Grid  templateColumns='repeat(3, 1fr)' gap={6}>
                    {
                        starships.map((ship, index) => (
                            <Detail key={index} ship={ship}></Detail>
                       ))
                    }
             </Grid> 
                
            }
        </div>
    )
}

export default Starships
