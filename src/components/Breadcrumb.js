import { Box, Text, Breadcrumb as BreadcrumbUI, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = (props) => {
    const { title, routePath, routeName } = props;
    const path = routeName.map((v, i) =>
        <BreadcrumbItem key={i}>
            <BreadcrumbLink color={'#7e7e7e'} href={routePath[i]}>{v}</BreadcrumbLink>
        </BreadcrumbItem>
    );
    return(
        <Box paddingY={'5rem'} backgroundColor={'#eff2f7'} display="flex" alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
            <Text color={'#212529'} fontSize={'3xl'} fontWeight={500}>{ title }</Text>
            <Box>
                <BreadcrumbUI fontSize={'md'}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'><FontAwesomeIcon color='#0163d2' icon={faHouseChimney} /></BreadcrumbLink>
                    </BreadcrumbItem>
                    {path}
                </BreadcrumbUI>
            </Box>
        </Box>
    );
};
export default Breadcrumb;