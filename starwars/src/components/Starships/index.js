import React from 'react';
import useListShips from '../../context/ShipsContext';
import Form from '../Form';
import { Spinner } from '@chakra-ui/react';

const Starships = () => {
    const { starships, loa } = useListShips();
    console.log(starships);
    return (
        <div>
            <h1>Startships</h1>
            <Form></Form>
            <br />
            { loa ?<Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            /> :starships.map((ship, index) => (
                    <p key={index}>{ship.name}</p>
                ))}
        </div>
    )
}

export default Starships
