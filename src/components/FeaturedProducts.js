import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import FeaturedProductCard from './../components/FeaturedProductCard';
import featured_products from './../data/featured_products';


const FeaturedProducts = (props) => {
    const ProductCards = featured_products.map((v) =>
        <GridItem key={v.id}>
            <FeaturedProductCard product={v} />
        </GridItem>
    );
    return(
        <Box>
            <Text textAlign={'center'} fontSize={'lg'} color={'#7e7e7e'}>Los más vendidos</Text>
            <Text paddingBottom={'2rem'} textAlign={'center'} fontSize={'2xl'} fontWeight={600}>Productos destacados</Text>
            <Grid px={'4rem'} templateColumns='repeat(5, 1fr)' gap={4}>
                {ProductCards}
            </Grid>
        </Box>
    );
};
export default FeaturedProducts;