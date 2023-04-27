import React from 'react'
import { useFormik } from 'formik';
import useListShips from '../../context/ShipsContext';
import { Alert, AlertIcon, Text, Stack, FormControl, Input, Button, HStack, Container, Box } from '@chakra-ui/react';
import { SearchIcon, WarningIcon } from '@chakra-ui/icons'

const validate = values => {
    const errors = {};
    if (!values.nameModel) {
        errors.nameModel = 'please search by entering name or model.';
    }
    return errors;
};
const Form = () => {
    const { setName_Model } = useListShips();

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            nameModel: ''
        },
        validate,
        onSubmit: () => {
            setName_Model(values.nameModel);
        }
    });
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                {errors.nameModel ?
                    <Stack spacing={2}>

                        <Text textTransform='capitalize'>
                            <WarningIcon />   &nbsp;
                            {errors.nameModel}

                        </Text>

                    </Stack> : null}
                <HStack spacing="25px">
                    <FormControl>
                        <Box w="400px" h="25px">

                            <Input type='text' onChange={handleChange}
                                id="nameModel" name="nameModel" bg="white" placeholder="Name/Model" />
                        </Box>
                    </FormControl>
                    <Box>
                        <Button
                            mt={4}
                            colorScheme='twitter'
                            type='submit'
                        >
                            <SearchIcon boxSize={5} />
                        </Button>
                    </Box>
                </HStack>
            </form>

        </Container>
    )
}

export default Form
