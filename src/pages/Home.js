import FeaturedProducts from './../components/FeaturedProducts';
import Newsletter from './../components/Newsletter';

import { Box, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { Fragment } from 'react';

const Home = () => {
    const size = useBreakpointValue({'base':'sm', 'md':'sm', 'lg':'md', 'xl':'lg', '2xl':'lg'});
    return(
        <Fragment>
            <Box display={'flex'} alignItems={'center'} paddingX={{'base': '2rem', 'md':'4rem', 'lg':'6rem', 'xl':'8rem', '2xl':'12rem'}} h={{'base':'200px', 'md':'300px', 'lg':'350px', 'xl':'450px', '2xl':'600px'}} backgroundSize={'cover'} backgroundPosition={'center'} backgroundImage={process.env.PUBLIC_URL + '/home/main.jpg'}>
                <Box flexBasis={{'base':'250px', 'md': 'auto'}}>
                    <Text fontWeight={'900'} fontSize={{'base':'lg', 'md': '2xl', 'lg': '3xl', 'xl': '4xl', '2xl':'6xl'}}>Aumenta tu rendimiento</Text>
                    <Text fontWeight={'300'} fontSize={{'base':'xs', 'md': 'sm', 'lg': 'lg', 'xl': 'xl', '2xl':'3xl'}}>Las mejores ofertas en accesorios, componentes y consolas de videojuegos</Text>
                    <Button marginTop={{'base':'0.5rem', 'md':'0.75rem', 'lg':'1rem', 'xl':'1.5rem'}} colorScheme='messenger' size={size}>
                        VER OFERTAS
                    </Button>
                </Box>
            </Box>
            <Box paddingX={{'base':'2rem', 'md':'4rem', 'lg':'6rem', 'xl':'8rem', '2xl':'12rem'}}>
                <Box paddingTop={{'base':'3rem', 'md':'4rem', 'lg':'5rem', 'xl':'6rem', '2xl':'6rem'}} paddingBottom={{'base':'2rem', 'md':'3rem', 'lg':'3rem', 'xl':'4rem', '2xl':'4rem'}}>
                    <FeaturedProducts />
                </Box>
            </Box>
            <Box paddingX={{'base':'2rem', 'md':'4rem', 'lg':'6rem', 'xl':'8rem', '2xl':'12rem'}} backgroundColor={'gray.100'} paddingY={{'base':'3rem', 'md':'3rem', 'lg':'3.5rem', 'xl':'4rem', '2xl':'4.5rem'}} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={{'base': 'column', 'md': 'row'}}>
                <Newsletter />
            </Box>
        </Fragment>
    );
};
export default Home;