import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const product = props.product;
    product.price = parseFloat(product.price).toFixed(2);
    return(
        <Box>
            <Box overflow={'hidden'}>
                <Link to={`/product/${product.id}`}>
                    <Image height={{'base':'150px', 'lg': '200px', 'xl': '225px', '2xl': '250px'}} className='zoom-in' w={'100%'} h={'250px'} objectFit={'cover'} src={process.env.PUBLIC_URL + product.src} rounded={'md'} />
                </Link>
            </Box>
            <Box marginTop={'1rem'}>
                <Text fontWeight={500} fontSize={{'xl':'xl', '2xl':'xl'}} marginLeft={'auto'} color={'blue.500'} >S/{product.price}</Text>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
                <Text fontWeight={500} fontSize='md' marginRight={'1rem'}>
                    <Link to={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </Text>
            </Box>
            <Box>
                <Text fontSize={{'xl':'sm', '2xl':'md'}} color='#7e7e7e'>{product.brand}</Text>
            </Box>
        </Box>
    );
};
export default ProductCard;