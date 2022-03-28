import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const FeaturedProductCard = (props) => {
    const product = props.product;
    product.price = parseFloat(product.price).toFixed(2);
    return(
        <Box>
            <Box paddingBottom={'0.5rem'}>
                <Image w={'100%'} h={'250px'} objectFit={'cover'} src={process.env.PUBLIC_URL + product.src} />
            </Box>
            <Text textAlign={'center'} fontWeight={500} fontSize='xl' marginLeft={'auto'} color={'#0163d2'} >S/{product.price}</Text>
            <Text textAlign={'center'} fontWeight={500} fontSize='md'>{product.name}</Text>
            <Text textAlign={'center'} fontSize='md' color='#7e7e7e'>{product.brand}</Text>
        </Box>
    );
};
export default FeaturedProductCard;