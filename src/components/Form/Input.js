import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input } from '@chakra-ui/react';
import { useState } from 'react';

const FormInput = (props) => {

    const [value, setValue] = useState('');
    const [isError, setError] = useState(false);
    const handleInputChange = (e) => {
        setValue(e.target.value);
        props.handler(e.target.value);
        if(e.target.value === '' && isError === false){
            setError(true);
        }else if(e.target.value !== '' && isError === true){
            setError(false);
        }
    };
    
    return(
        <FormControl isInvalid={isError}>
            <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
            <Input
                id={props.name}
                type={props.type}
                value={value}
                onChange={handleInputChange}
                autoComplete={props.type === 'password' ? 'on' : 'off'}
            />
            {!isError ? (
                <FormHelperText>
                    {props.helperMessage}
                </FormHelperText>
            ) : (
                <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
            )}
        </FormControl>
    );
};
export default FormInput;
