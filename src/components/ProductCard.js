import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const product = props.product;
    product.price = parseFloat(product.price).toFixed(2);
    return(
        <Box>
            <Image w={'100%'} h={'250px'} objectFit={'cover'} src={process.env.PUBLIC_URL + product.src} />
            <Box marginTop={'1rem'}>
                <Text fontSize='md' color='#7e7e7e'>{product.brand}</Text>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
                <Text fontWeight={500} fontSize='md' marginRight={'1rem'}>{product.name}</Text>
                <Text fontWeight={500} fontSize='xl' marginLeft={'auto'} color={'#0163d2'} >S/{product.price}</Text>
            </Box>
        </Box>
    );
};
export default ProductCard;