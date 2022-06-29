import Breadcrumb from './../components/Breadcrumb';
import { Box, Grid, GridItem, Image, Text, Button, ButtonGroup, Input, IconButton, useToast } from '@chakra-ui/react';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { addProduct } from './../features/ShoppingCartSlice';

import products from './../data/products';

import { useParams } from 'react-router-dom';

const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setLoading] = useState(false);

    let { id } = useParams();
    let data = {};

    const dispatch = useDispatch();
    const toast = useToast();

    id = parseInt(id);

    products.forEach(value => {
        if(id === value.id) {
            data = {...value};
            data.price = parseFloat(data.price).toFixed(2);
        };
    });

    const addProductCart = () => {
        setLoading(true);
        data.subtotal = parseFloat(data.price * quantity).toFixed(2);
        dispatch(addProduct({...data, quantity}));
        setTimeout(()=>{
            setLoading(false);
            toast({
                title: 'Producto agregado correctamente.',
                position: 'top',
                status: 'success',
                isClosable: true,
            });
        }, 1000);
    };
    return(
        <Fragment>
            <Breadcrumb title='Productos' routePath={['/products']} routeName={['Productos']} />
            <Box paddingY={'4rem'} paddingX={{'base': '2rem', 'md':'4rem', 'lg':'6rem', 'xl':'8rem', '2xl':'12rem'}} minHeight={'65vh'}>
                <Grid templateColumns={{'base': 'repeat(1, 1fr)', 'md':'repeat(2, 1fr)'}} gap={6}>
                    <GridItem>
                        <Image w={'100%'} objectFit={'cover'} src={process.env.PUBLIC_URL + data.src} rounded={'md'} />
                    </GridItem>
                    <GridItem textAlign={{'base':'center', 'md': 'left'}}>
                        <Text color={'#212529'} fontSize={'2xl'} fontWeight={'600'}>{data.name}</Text>
                        <Text fontSize={'md'} fontWeight={'400'}>Accesorios</Text>
                        <Text color={'#212529'} mt={'0.25rem'} fontSize={'2xl'} fontWeight={'400'}>S/{data.price}</Text>
                        <Box mt={'0.75rem'}>
                            <Text fontSize={'md'} fontWeight={'500'}>Quantity</Text>
                            <ButtonGroup mt={'0.75rem'} size='lg' isAttached variant='outline'>
                                <IconButton onClick={() => setQuantity(quantity-1)} aria-label='Decrement' icon={<FontAwesomeIcon icon={faMinus} />} />
                                <Input onChange={(e) => setQuantity(e.target.value)} value={quantity} size={'lg'} textAlign={'center'} type='number' min='0' max='99' width={'100px'} required rounded={'none'} borderRight={'none'} borderLeft={'none'} />
                                <IconButton onClick={() => setQuantity(quantity+1)} aria-label='Increment' icon={<FontAwesomeIcon icon={faPlus} />} />
                            </ButtonGroup>
                        </Box>
                        <Box mt={'0.75rem'}>
                            <Button w={'14rem'} isLoading={isLoading} onClick={() => addProductCart()} colorScheme='messenger' size={'lg'}>
                                <FontAwesomeIcon icon={faShoppingCart} />&nbsp;&nbsp;&nbsp;Agregar al Carrito
                            </Button>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Fragment>
    );
};
export default Product;