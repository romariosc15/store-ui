import { Box, Text, Breadcrumb as BreadcrumbUI, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
    const { title, routePath, routeName } = props;
    const path = routeName.map((v, i) =>
        <BreadcrumbItem key={i}>
            <Link to={routePath[i]}><Text color={'#7e7e7e'}>{v}</Text></Link>
        </BreadcrumbItem>
    );
    return(
        <Box paddingY={'5rem'} backgroundColor={'#eff2f7'} display="flex" alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
            <Text color={'#212529'} fontSize={'3xl'} fontWeight={500}>{ title }</Text>
            <Box>
                <BreadcrumbUI fontSize={'md'}>
                    <BreadcrumbItem>
                        <Link to={'/'}><FontAwesomeIcon color='#0163d2' icon={faHouseChimney} /></Link>
                    </BreadcrumbItem>
                    {path}
                </BreadcrumbUI>
            </Box>
        </Box>
    );
};
export default Breadcrumb;