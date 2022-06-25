import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <Box paddingX={{'md':'4rem', 'lg':'6rem', 'xl':'8rem', '2xl':'12rem'}} paddingY={{'base':'0.75rem', 'md':'1rem', 'lg':'1.25rem', 'xl':'1.25rem', '2xl':'1.5rem'}} textAlign={'center'} borderTopColor={'gray.50'} borderTopWidth={'1px'}>
            <Text fontSize={{'base': 'xs', 'md':'sm', 'lg':'sm', '2xl':'md'}} fontWeight={'300'} color={'gray.700'}>2022, Tienda Virtual. Desarrollado por Romario Sarmiento.</Text>
        </Box>
    );
};
export default Header;