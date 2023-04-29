import React from 'react';
import { Card, Image, Stack, CardBody, Heading, Text,  Button, Divider, UnorderedList, ListItem } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import useListShips from '../../context/ShipsContext';
import { ArrowLeftIcon } from '@chakra-ui/icons';

const ShipDetail = () => {
  const { shipId } = useParams();
  console.log(shipId);
  const { starships } = useListShips();
  const shipName = starships.find((s) => {
    return s.name === shipId
  })
  return (
    <div className="App">
      <Card
        className='detailshipcard'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        backgroundColor='black'
      >

        <Image

          maxW={{ base: '100%', sm: '600px' }}

          src={require(`../../assets/${shipName.name}.jpeg`)}
          alt={shipName.name}
          height="300px"
          maxH={{ base: '100%', sm: '400px' }}

        />


        <Divider margin={3} orientation='vertical' padding={6} height="200px" />
        <Stack>
          <CardBody>
            <Heading size='md'
              fontSize='lg' color='white' textTransform='uppercase'>{shipName.name}</Heading>

            <Text py='2' fontSize='md' textTransform='capitalize' color='white'>
              {shipName.model}
            </Text>
            <UnorderedList className='list'>
              <ListItem>passengers: &nbsp;{shipName.passengers}</ListItem>
              <ListItem>max_atmosphering_speed: &nbsp;{shipName.max_atmosphering_speed}</ListItem>
              <ListItem>manufacturer: &nbsp;{shipName.manufacturer}</ListItem>
              <ListItem>crew: &nbsp;{shipName.crew}</ListItem>
              <ListItem>cargo_capacity: &nbsp;{shipName.cargo_capacity}</ListItem>
            </UnorderedList>
            <Link to='/'>
              <Button marginY={6} variant='solid' colorScheme='twitter'>
                <ArrowLeftIcon />
              </Button>
            </Link>
          </CardBody>
        </Stack>
      </Card>
    </div>
  )
}

export default ShipDetail
