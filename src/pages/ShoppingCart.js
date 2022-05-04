import { Fragment } from 'react';
import Breadcrumb from './../components/Breadcrumb';
import { Box, Table, TableCaption, Thead, Tbody, Tr, Th, Td, Image, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux'
import { selectShoppingCart } from './../features/ShoppingCartSlice';

const ShoppingCart = () => {
    const shoppingCart = useSelector(selectShoppingCart);
    console.log(shoppingCart);
    return(
        <Fragment>
            <Breadcrumb title='Carrito de compra' routePath={['/shopping cart']} routeName={['Carrito']} />
            <Box paddingX={'8rem'} py={'6rem'}>
                <Table variant='simple'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr backgroundColor={'#eff2f7'}>
                            <Th textAlign={'center'}>Imagen</Th>
                            <Th>Nombre del Producto</Th>
                            <Th textAlign={'center'}>Precio</Th>
                            <Th textAlign={'center'}>Cantidad</Th>
                            <Th textAlign={'center'}>Acción</Th>
                            <Th textAlign={'center'}>Total</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Image mx={'auto'} w={'100px'} objectFit={'cover'}src={process.env.PUBLIC_URL + '/products/generic-headphones.jpg'} />
                            </Td>
                            <Td>Audífonos</Td>
                            <Td textAlign={'center'}>25</Td>
                            <Td textAlign={'center'}>2</Td>
                            <Td textAlign={'center'}>
                                <Button>
                                    <FontAwesomeIcon icon={faXmark} />
                                </Button>
                            </Td>
                            <Td textAlign={'center'}>2</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Fragment>
    );
};
export default ShoppingCart;