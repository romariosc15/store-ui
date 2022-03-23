import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <Box paddingX={'8rem'} paddingY={'1.5rem'} display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <Heading size={'md'} fontWeight={'800'}>Tienda</Heading>
            <Box marginLeft={'4rem'}>
                <Text fontWeight={'500'} display={'inline-block'} marginX={'1.5rem'}>
                    <Link to="/">Inicio</Link>
                </Text>
                <Text fontWeight={'500'} display={'inline-block'} marginX={'1.5rem'}>
                    <Link to="/products">Productos</Link>
                </Text>
                <Text fontWeight={'500'} display={'inline-block'} marginX={'1.5rem'}>
                    <Link to="/order-tracking">Seguimiento</Link>
                </Text>
            </Box>
            <Box marginLeft={'auto'}>

                <Box display={'inline-block'} marginRight={'1rem'}>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </Box>
                <Box display={'inline-block'}>
                    <Link to="/shopping-cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};
export default Header;