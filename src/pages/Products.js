import ProductCard from './../components/ProductCard';
import Breadcrumb from './../components/Breadcrumb';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Fragment } from 'react';

import products from './../data/products';

const Products = () => {
    const ProductCards = products.map((v) =>
        <GridItem key={v.id}>
            <ProductCard product={v} />
        </GridItem>
    );
    return(
        <Fragment>
            <Breadcrumb title='Productos' routePath={['/products']} routeName={['Productos']} />
            <Box paddingY={'4rem'} paddingX={'8rem'}>
                <Grid px={'4rem'} templateColumns='repeat(12, 1fr)' gap={4}>
                    <GridItem colSpan={2}>
                        Categorias
                    </GridItem>
                    <GridItem colSpan={10}>
                        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                            {ProductCards}
                        </Grid>
                    </GridItem>
                </Grid>
            </Box>
        </Fragment>
        
    );
};
export default Products;