import React from 'react';
import { Grid, Card, CardHeader, CardBody, CardFooter, Stack, Divider, Button, Image, Heading, Text, ButtonGroup, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Detail = ({ ship }) => {
    return (
        <Link  to={`ship/${ship.id}`} variant="link" >
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Image
                            src='https://picsum.photos/seed/picsum/100/100'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Text color='blue.600' fontSize='2xl'>
                            {ship.name}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Link>

    )
}

export default Detail
