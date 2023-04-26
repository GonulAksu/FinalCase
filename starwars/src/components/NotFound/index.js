import { Stack,Heading } from '@chakra-ui/react'
import React from 'react'


const NotFound= () => {
    return (
        <Stack spacing={6} align={'center'}>
            <Heading as='h2' size='2xl' noOfLines={1}>
                Not Found
            </Heading>
        </Stack>
    )
}

export default NotFound
