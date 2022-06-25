import { Fragment } from 'react';
import { Box, Text, IconButton, Input, useBreakpointValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
    const size = useBreakpointValue({'base':'sm', 'md':'md', 'lg':'md', 'xl':'lg', '2xl':'lg'});
    return(
        <Fragment>
            <Box paddingRight={{'base':'0', 'md':'2rem'}} paddingBottom={{'base':'1rem', 'md':'0'}}>
                <Text fontWeight={'500'} fontSize={{'base':'lg', 'md':'xl', 'lg':'xl', 'xl':'2xl', '2xl':'3xl'}}>Suscríbete a nuestro boletín</Text>
                <Text fontWeight={'300'} fontSize={{'base':'sm', 'md':'sm', 'lg':'sm', 'xl':'md', '2xl':'lg'}}>Suscríbete para recibir los mejores descuentos y novedades de la tienda.</Text>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Input type={'email'} w={{'lg':'16rem', 'xl':'18rem', '2xl':'20rem'}} backgroundColor={'white'} size={size} placeholder={'Ingresa tu email'} borderRightRadius={'none'} />
                <IconButton colorScheme={'messenger'} size={size} aria-label='Seguimiento' borderLeftRadius={'none'} icon={<FontAwesomeIcon icon={faEnvelope} />} />
            </Box>
        </Fragment>
        
    );
};
export default Newsletter;
