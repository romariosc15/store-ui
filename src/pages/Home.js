import { Box, Image } from '@chakra-ui/react';

const Home = () => {
    return(
        <Box paddingX={'8rem'}>
            <Image objectFit={'cover'} objectPosition={'top'} w={'100%'} h={'700px'} src={process.env.PUBLIC_URL + '/home/main_edited.png'} />
        </Box>
    );
};
export default Home;