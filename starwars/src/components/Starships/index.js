import React from 'react';
import useListShips from '../../context/ShipsContext';
import Form from '../Form';
import { Spinner,Grid } from '@chakra-ui/react';
import Detail from '../Detail';

const Starships = () => {
    const { starships, loa } = useListShips();
    console.log(starships);
    return (
        <div>
            <h1>Startships</h1>
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
            starships.length==0 ? <p>not found</p>
             :  <Grid  templateColumns='repeat(3, 1fr)' gap={4}>
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
