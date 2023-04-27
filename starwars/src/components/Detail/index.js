import React from 'react';
import { Grid, Card, CardHeader, CardBody, CardFooter, Stack, Divider, Button, Image, Heading, Text, ButtonGroup, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useListShips from '../../context/ShipsContext';


const Detail = ({ ship }) => {
    // const photos=[
    //     '../../assets/DeathStar.png',
    //     '../../assets/'

    // ];

    return (
        <Link  to={`ship/${ship.length}`} variant="link" >
            <Card  maxW='sm' boxShadow='2xl' p='4'>
            <Image
                            src={require(`../../assets/9.2.jpg`)}
                            alt={`${ship.name}`}
                            borderRadius='lg'
                            className='detailcard'
                            boxSize='200px'
                        />
                <CardBody p='2'>
                    <Stack mt='4' spacing='3'>
                        <Heading size='md'> {ship.name}</Heading>
                        <Divider />
                        <Text  align={"start"} color='blue.600' fontSize='lg'>
                           Model: {ship.model}
                        </Text>
                        <Text  align={"start"} color='blue.600' fontSize='lg'>
                        Hyperdrive Rating: {ship.hyperdrive_rating
}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Link>

    )
}

export default Detail
