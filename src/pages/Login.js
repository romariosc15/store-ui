import { Box, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import FormInput from './../components/Form/Input';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const logIn = (e) => {
        e.preventDefault();
        console.log(email, password);
    };
    return(
        <Box paddingY={'4rem'} paddingX={{'base': '2rem', 'md':'4rem', 'lg':'6rem', 'xl':'8rem', '2xl':'12rem'}} minHeight={'86vh'} backgroundColor={'gray.100'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box background={'white'} w={'30rem'} rounded={'md'} paddingX={'2rem'} paddingY={'3rem'}>
                <form onSubmit={(e) => logIn(e)}>
                    <Text color={'blue.500'} fontSize={'2xl'} fontWeight={'600'}>LOGIN</Text>
                    <Box marginTop={'2rem'}>
                        <FormInput handler={(value) => setEmail(value)} name={'email'} label={'Email'} type={'email'}  helperMessage={'Ingresa tu correo electrónico.'} errorMessage={'Es un campo requerido.'} />
                    </Box>
                    <Box marginTop={'2rem'}>
                        <FormInput handler={(value) => setPassword(value)} name={'password'} label={'Contraseña'} type={'password'} helperMessage={'Ingresa tu clave de acceso.'} errorMessage={'Es un campo requerido.'} />
                    </Box>
                    <Box marginTop={'2rem'}>
                        <Button w={'100%'} colorScheme='messenger' size={'lg'} type='submit'>
                            Iniciar sesión
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};
export default Login;