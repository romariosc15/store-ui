import { Box, Image, Grid, GridItem } from '@chakra-ui/react';

import FeaturedProducts from './../components/FeaturedProducts';

const Home = () => {
    
    return(
        <Box paddingX={'8rem'}>
            <Box paddingBottom={'6rem'}>
                <Image objectFit={'cover'} objectPosition={'top'} w={'100%'} h={'700px'} src={process.env.PUBLIC_URL + '/home/main_edited.png'} />
            </Box>
            <Box paddingBottom={'6rem'}>
                <FeaturedProducts />
            </Box>
        </Box>
    );
};
export default Home;