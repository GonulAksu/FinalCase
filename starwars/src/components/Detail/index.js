import React from 'react';
import { Grid, Card, CardHeader, CardBody, CardFooter, Stack, Divider, Button, Image, Heading, Text, ButtonGroup, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Detail = ({ ship }) => {
    return (
        <Link  to={`ship/${ship.id}`} variant="link" >
            <Card className='detailcard' maxW='sm' boxShadow='dark-lg' p='6'>
            <Image
                            src='https://picsum.photos/seed/picsum/100/100'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                <CardBody>
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
