import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const FeaturedProductCard = (props) => {
    const product = props.product;
    product.price = parseFloat(product.price).toFixed(2);
    return(
        <Box paddingBottom={{'base':'3rem', 'md':'3rem', 'lg':'2rem', 'xl':'3rem', '2xl':'3rem'}}>
            <Box overflow={'hidden'}>
                <Link to={`/product/${product.id}`}>
                    <Image className='zoom-in' w={'100%'} h={'250px'} objectFit={'cover'} src={process.env.PUBLIC_URL + product.src} />
                </Link>
            </Box>
            <Text marginTop={'1rem'} textAlign={'center'} fontWeight={500} fontSize={{'base':'2xl', 'xl':'xl', '2xl':'2xl'}} marginLeft={'auto'} color={'blue.500'} >S/{product.price}</Text>
            <Text textAlign={'center'} fontWeight={500} fontSize='md'>
                <Link to={`/product/${product.id}`}>
                    {product.name}
                </Link>
            </Text>
            <Text textAlign={'center'} fontSize='md' color={'gray.500'}>{product.brand}</Text>
        </Box>
    );
};
export default FeaturedProductCard;