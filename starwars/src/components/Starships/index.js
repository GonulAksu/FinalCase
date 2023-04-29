import React, { useState } from 'react';
import useListShips from '../../context/ShipsContext';
import Form from '../Form';
import { Spinner, Grid, Button } from '@chakra-ui/react';
import Detail from '../Detail';
import NotFound from '../NotFound';


const Starships = () => {
    const { starships, loa } = useListShips();
    const [loadpage, setLoadpage] = useState(3);
    const slice = starships.slice(0, loadpage);
    
    const loadMore=()=>{
        setLoadpage(loadpage+loadpage);
    }
    console.log(starships);
    return (
        <div>
            <Form></Form>

            {
                loa ? <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    margin={6}
                /> :
                    slice.length === 0 ? <NotFound />
                        : <><Grid className='grid' marginY="50px" gap={6}>
                            {
                                slice.map((ship, index) => (
                                    <Detail key={index} ship={ship}></Detail>
                                ))
                            }
                        </Grid>
                            <Button
                            onClick={()=>loadMore()}
                             marginY="10px" colorScheme='teal' variant='outline'>
                                Load More
                            </Button>
                        </>
            }
           
        </div>
    )
}

export default Starships
