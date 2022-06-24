import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <Box paddingX={'12rem'} paddingY={'1.5rem'} textAlign={'center'} borderTopColor={'gray.50'} borderTopWidth={'1px'}>
            <Text fontSize={'sm'} fontWeight={'300'} color={'gray.700'}>2022, Tienda Virtual. Desarrollado por Romario Sarmiento.</Text>
        </Box>
    );
};
export default Header;