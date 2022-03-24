import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Checkbox } from '@chakra-ui/react';

const Categories = (props) => {
    const categories = props.categories;
    const Checkboxes = categories.map((v) =>
        <Checkbox key={v.id}>
            <Text fontSize={'sm'}>{v.name}</Text>
        </Checkbox>
    );
    return(
        <Box p={'1.5rem'} border={'1px solid #ced4da'} rounded={'md'}>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem border={'none'}>
                    <AccordionButton backgroundColor={'#eff2f7'}>
                        <Box flex='1' textAlign='left'>
                            <Text fontWeight={500} color={'#212529'}>Categorías</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pt={4} pb={0}>
                        {Checkboxes}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};
export default Categories;