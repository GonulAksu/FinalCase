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
                            // objectFit='contain'
                        />
                <CardBody p='2'>
                    <Stack mt='4' spacing='3'>
                        <Heading color='white' textTransform='uppercase' fontFamily= 'Crete Round, serif'  size='md'> {ship.name}</Heading>
                        <Divider />
                       
                          <Text as='b' align={"start"} 
                         fontSize='lg'  color='#1A94DA' textTransform='uppercase'>Model : <Text display='inline'color='white' textTransform='capitalize'>
                               &nbsp;{ship.model}
                           </Text>
                        </Text>
                        <Text as='b' align={"start"} 
                         fontSize='lg'  color='#1A94DA' textTransform='uppercase'>Hyperdrive Rating :<Text display='inline'color='white' textTransform='capitalize'>
                              &nbsp; {ship.hyperdrive_rating}
                           </Text>
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Link>

    )
}

export default Detail
