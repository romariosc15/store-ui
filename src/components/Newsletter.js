import { Fragment } from 'react';
import { Box, Text, IconButton, Input } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
    return(
        <Fragment>
            <Box>
                <Text fontWeight={'500'} fontSize={{'xl':'2xl', '2xl':'3xl'}}>Suscríbete a nuestro boletín</Text>
                <Text fontWeight={'300'} fontSize={{'xl':'md', '2xl':'lg'}}>Suscríbete para recibir los mejores descuentos y novedades de la tienda.</Text>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Input type={'email'} w={{'xl':'18rem', '2xl':'20rem'}} backgroundColor={'white'} size={'lg'} placeholder={'Ingresa tu email'} borderRightRadius={'none'} />
                <IconButton colorScheme={'messenger'} size={'lg'} aria-label='Seguimiento' borderLeftRadius={'none'} icon={<FontAwesomeIcon icon={faEnvelope} />} />
            </Box>
        </Fragment>
        
    );
};
export default Newsletter;
