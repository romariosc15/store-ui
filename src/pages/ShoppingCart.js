import { Fragment, useState, useEffect } from 'react';
import Breadcrumb from './../components/Breadcrumb';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Image, Button, Text, Grid, GridItem, useToast, TableContainer } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { selectShoppingCart, deleteProduct } from './../features/ShoppingCartSlice';

const ShoppingCart = () => {
    let subtotal = 0;
    const toast = useToast();
    const deleteProductCart = (index) => {
        subtotal -= parseFloat(shoppingCart[index].subtotal);
        let total = subtotal - cartTotal.discount;
        dispatch(deleteProduct(index));
        setCartTotal({...cartTotal, subtotal: subtotal, total: total});
    };
    const processShoppingCart = () => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            toast({
                title: 'Su compra fue procesada correctamente.',
                position: 'top',
                status: 'success',
                isClosable: true,
            });
        }, 1000);
    };
    const shoppingCart = useSelector(selectShoppingCart);
    const dispatch = useDispatch();
    const [cartTotal, setCartTotal] = useState({
        subtotal: 0, discount: 0, total: 0
    });
    const [isLoading, setLoading] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const Products = shoppingCart.map((v, i) => {
        subtotal += parseFloat(v.subtotal);
        return (<Tr key={v.id}>
            <Td>
                <Image mx={'auto'} w={'100px'} objectFit={'cover'}src={process.env.PUBLIC_URL + v.src} />
            </Td>
            <Td>{v.name}</Td>
            <Td textAlign={'center'}>{v.price}</Td>
            <Td textAlign={'center'}>{v.quantity}</Td>
            <Td textAlign={'center'}>
                <Button onClick={()=> deleteProductCart(i)}>
                    <FontAwesomeIcon icon={faXmark} />
                </Button>
            </Td>
            <Td textAlign={'center'}>{v.subtotal}</Td>
        </Tr>);
    });
    
    const EmptyCar = <Tr>
                        <Td colSpan={6}>
                            <Text textAlign={'center'}>Su carrito de compra est?? vac??o.</Text>
                        </Td>
                    </Tr>;

    useEffect(() => {
        let total = subtotal - cartTotal.discount;
        setCartTotal({...cartTotal, subtotal: subtotal, total: total});
        if(shoppingCart.length > 0) setDisabled(false);
        else setDisabled(true);
    }, []);
    return(
        <Fragment>
            <Breadcrumb title='Carrito de compra' routePath={['/shopping-cart']} routeName={['Carrito']} />
            <Box paddingX={{'base': '2rem', 'md':'4rem', 'lg':'6rem', 'xl':'8rem', '2xl':'12rem'}} py={'6rem'}>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr backgroundColor={'#eff2f7'}>
                                <Th w={'15%'} textAlign={'center'}>Imagen</Th>
                                <Th w={'30%'}>Nombre del Producto</Th>
                                <Th w={'15%'} textAlign={'center'}>Precio</Th>
                                <Th w={'10%'} textAlign={'center'}>Cantidad</Th>
                                <Th w={'15%'} textAlign={'center'}>Acci??n</Th>
                                <Th w={'15%'} textAlign={'center'}>Total</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {shoppingCart.length > 0 ? Products : EmptyCar}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Box display={'flex'} alignItems={'end'} py={'3rem'} flexDir={'column'} flexWrap={'wrap'}>
                    <Box borderRadius={'md'} borderBottomRadius={'none'} paddingX={'1rem'} paddingY={'1.5rem'} backgroundColor={'#eff2f7'} w={{'base': '100%', 'sm': '75%', 'md': '60%', 'lg': '45%', 'xl': '35%', '2xl':'30%'}}>
                        <Text fontSize={'lg'} fontWeight={500}>Total del Carrito</Text>
                        <Grid marginTop={'1rem'} templateColumns='repeat(2, 1fr)' columnGap={6} rowGap={1}>
                            <GridItem>
                                <Text fontSize={'sm'} fontWeight={400}>Subtotal</Text>
                            </GridItem>
                            <GridItem textAlign={'right'}>
                                <Text fontSize={'sm'} fontWeight={400}>S/{cartTotal.subtotal}</Text>
                            </GridItem>
                            <GridItem>
                                <Text fontSize={'sm'} fontWeight={400}>Descuento</Text>
                            </GridItem>
                            <GridItem textAlign={'right'}>
                                <Text fontSize={'sm'} fontWeight={400}>S/0</Text>
                            </GridItem>
                            <GridItem>
                                <Text fontSize={'sm'} fontWeight={400}>Total</Text>
                            </GridItem>
                            <GridItem textAlign={'right'}>
                                <Text fontSize={'sm'} fontWeight={400}>S/{cartTotal.total}</Text>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Button isDisabled={isDisabled} borderTopRadius={'none'} isLoading={isLoading} colorScheme='messenger' onClick={() => processShoppingCart()} size={'lg'} w={{'base': '100%', 'sm': '75%', 'md': '60%', 'lg': '45%', 'xl': '35%', '2xl':'30%'}}>
                        Procesar Carrito
                    </Button>
                </Box>
            </Box>
        </Fragment>
    );
};
export default ShoppingCart;