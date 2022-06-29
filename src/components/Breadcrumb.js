import { Box, Text, Breadcrumb as BreadcrumbUI, BreadcrumbItem } from '@chakra-ui/react';
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
        <Box paddingY={{'base': '3rem', 'lg': '3.5rem', 'xl': '4rem', '2xl': '5rem'}} backgroundColor={'gray.100'} display="flex" alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
            <Text color={'#212529'} fontSize={{'base': '2xl', 'md': '3xl'}} fontWeight={500}>{ title }</Text>
            <Box>
                <BreadcrumbUI fontSize={{'base': 'sm', 'md': 'md'}}>
                    <BreadcrumbItem>
                        <Link to={'/'}>
                            <FontAwesomeIcon color={'#0163d2'} icon={faHouseChimney} />
                        </Link>
                    </BreadcrumbItem>
                    {path}
                </BreadcrumbUI>
            </Box>
        </Box>
    );
};
export default Breadcrumb;