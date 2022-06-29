import Breadcrumb from './../components/Breadcrumb';

import { Box, Text, Input, IconButton } from '@chakra-ui/react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const OrderTracking = () => {
    return(
        <Fragment>
            <Breadcrumb title='Seguimiento de Pedidos' routePath={['/order-tracking']} routeName={['Seguimiento']} />
            <Box paddingX={{'base': '2rem', 'md':'4rem', 'lg':'6rem', 'xl':'8rem', '2xl':'12rem'}} py={'6rem'} minHeight={'65vh'}>
                <Text marginBottom={'2rem'} fontSize={{'base':'2xl', '2xl':'3xl'}} fontWeight={600} textAlign="center">Introduce N° de pedido</Text>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Input w={'40rem'} size={'lg'} placeholder={'Número de pedido'} borderRightRadius={'none'} />
                    <IconButton size={'lg'} aria-label='Seguimiento' borderLeftRadius={'none'} icon={<FontAwesomeIcon icon={faSearch} />} />
                </Box>
            </Box>
        </Fragment>
    );
};
export default OrderTracking;