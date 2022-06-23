import { Box, Text, Button } from '@chakra-ui/react';
import { Fragment } from 'react';
import FeaturedProducts from './../components/FeaturedProducts';

const Home = () => {
    
    return(
        <Fragment>
            <Box display={'flex'} alignItems={'center'} paddingX={'10rem'} marginBottom={'6rem'} h={'700px'} backgroundSize={'cover'} backgroundPosition={'center'} backgroundImage={process.env.PUBLIC_URL + '/home/main.jpg'}>
                <Box>
                    <Text fontWeight={'900'} fontSize={'6xl'}>Aumenta tu rendimiento</Text>
                    <Text fontWeight={'300'} fontSize={'3xl'}>Las mejores ofertas en accesorios, componentes y consolas de videojuegos</Text>
                    <Button marginTop={'1.5rem'} colorScheme='messenger' size={'lg'}>
                        <Text ml={'0.5rem'} fontSize={'md'}>VER OFERTAS</Text>
                    </Button>
                </Box>
            </Box>
            <Box paddingX={'8rem'}>
                <Box paddingBottom={'6rem'}>
                    <FeaturedProducts />
                </Box>
            </Box>
        </Fragment>
        
    );
};
export default Home;