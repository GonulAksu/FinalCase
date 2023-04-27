import React from 'react';
import {Card, CardBody,Stack, Divider, Image, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Detail = ({ ship }) => {
  

    return (
        <Link  to={`ship/${ship.length}`} variant="link" >
            <Card  className='detailcard'  maxW='sm' boxShadow='dark-lg' p='1' backgroundColor="rgba(0, 15, 26,0.1)">
            <Image
                            src={require(`../../assets/${ship.name}.jpeg`)}
                            alt={`${ship.name}`}
                            borderRadius='lg'
                            height="300px"
                            width="400px"
                        />
                <CardBody p='2'>
                    <Stack mt='4' spacing='3'>
                        <Heading color='white' textTransform='uppercase'  size='md'> {ship.name}</Heading>
                        <Divider />
                        <Text  align={"start"} color='#008ae6
                        ' fontSize='lg' textTransform='capitalize'>
                          <Text as='b'  textTransform='uppercase'  >Model: </Text>{ship.model}
                        </Text>
                        <Text  align={"start"} color='#008ae6' fontSize='lg' textTransform='capitalize'>
                        <Text as='b'  textTransform='uppercase' >Hyperdrive Rating: </Text>
                             {ship.hyperdrive_rating}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Link>

    )
}

export default Detail
