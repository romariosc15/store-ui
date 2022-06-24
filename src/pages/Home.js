import FeaturedProducts from './../components/FeaturedProducts';
import Newsletter from './../components/Newsletter';

import { Box, Text, Button, } from '@chakra-ui/react';
import { Fragment } from 'react';

const Home = () => {
    return(
        <Fragment>
            <Box display={'flex'} alignItems={'center'} paddingX={{'xl':'10rem', '2xl':'12rem'}} h={{'lg':'400px', 'xl':'450px', '2xl':'600px'}} backgroundSize={'cover'} backgroundPosition={'center'} backgroundImage={process.env.PUBLIC_URL + '/home/main.jpg'}>
                <Box>
                    <Text fontWeight={'900'} fontSize={{'xl': '4xl', '2xl':'6xl'}}>Aumenta tu rendimiento</Text>
                    <Text fontWeight={'300'} fontSize={{'xl': 'xl', '2xl':'3xl'}}>Las mejores ofertas en accesorios, componentes y consolas de videojuegos</Text>
                    <Button marginTop={'1.5rem'} colorScheme='messenger' size={'lg'}>
                        <Text ml={'0.5rem'} fontSize={'md'}>VER OFERTAS</Text>
                    </Button>
                </Box>
            </Box>
            <Box paddingX={{'xl':'10rem', '2xl':'12rem'}}>
                <Box paddingTop={'6rem'} paddingBottom={{'xl':'4rem', '2xl':'4rem'}}>
                    <FeaturedProducts />
                </Box>
            </Box>
            <Box paddingX={{'xl':'10rem', '2xl':'12rem'}} backgroundColor={'gray.50'} height={'200px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Newsletter />
            </Box>
        </Fragment>
    );
};
export default Home;