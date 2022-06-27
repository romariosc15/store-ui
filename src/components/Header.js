import { Button, Box, Heading, Text, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useRef } from 'react';

const Header = () => {
    let navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const redirectTo = (url) => {
        onClose();
        navigate(url, { replace: true });
    };
    return(
        <Fragment>
            <Box paddingX={{'md':'2rem', 'lg':'4rem', 'xl':'5rem', '2xl':'8rem'}} paddingY={{'md':'1rem', 'lg':'1.25rem', 'xl':'1.25rem', '2xl':'1.5rem'}} display={{'base': 'none', 'md': 'flex'}} flexDirection={'row'} alignItems={'center'}>
                <Heading size={'md'} fontWeight={'800'}>Tienda</Heading>
                <Box marginLeft={'4rem'}>
                    <Text fontSize={{'md': 'sm', 'lg': 'sm', 'xl': 'md', '2xl':'md'}} fontWeight={'500'} display={'inline-block'} marginX={'1.5rem'}>
                        <Link to="/">Inicio</Link>
                    </Text>
                    <Text fontSize={{'md': 'sm', 'lg': 'sm', 'xl': 'md', '2xl':'md'}} fontWeight={'500'} display={'inline-block'} marginX={'1.5rem'}>
                        <Link to="/products">Productos</Link>
                    </Text>
                    <Text fontSize={{'md': 'sm', 'lg': 'sm', 'xl': 'md', '2xl':'md'}} fontWeight={'500'} display={'inline-block'} marginX={'1.5rem'}>
                        <Link to="/order-tracking">Seguimiento</Link>
                    </Text>
                </Box>
                <Box marginLeft={'auto'}>
                    <Box display={'inline-block'} fontSize={{'md': 'sm', 'lg': 'sm', 'xl': 'md', '2xl':'md'}} marginRight={'1rem'}>
                        <Link to="/login">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </Box>
                    <Box display={'inline-block'} fontSize={{'md': 'sm', 'lg': 'sm', 'xl': 'md', '2xl':'md'}} >
                        <Link to="/shopping-cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box paddingX={'2rem'} paddingY={'1rem'} display={{'base': 'flex', 'md': 'none'}} flexDirection={'row'} justifyContent={'space-between'}>
                <Heading size={'sm'} fontWeight={'800'}>Tienda</Heading>
                <Box ref={btnRef}>
                    <FontAwesomeIcon icon={faBars} onClick={onOpen} />
                </Box>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>MENÚ</DrawerHeader>
                        <DrawerBody>
                            <Text cursor={'pointer'} fontSize={'lg'} fontWeight={'500'} marginY={'0.25rem'} onClick={() => redirectTo('/')}>
                                Inicio
                            </Text>
                            <Text cursor={'pointer'} fontSize={'lg'} fontWeight={'500'} marginY={'0.25rem'} onClick={() => redirectTo('/products')}>
                                Productos
                            </Text>
                            <Text cursor={'pointer'} fontSize={'lg'} fontWeight={'500'} marginY={'0.25rem'} onClick={() => redirectTo('/order-tracking')}>
                                Seguimiento
                            </Text>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Fragment>
    );
};
export default Header;