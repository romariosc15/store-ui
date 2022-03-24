import ProductCard from './../components/ProductCard';
import Breadcrumb from './../components/Breadcrumb';
import Filters from './../components/Filters';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Fragment } from 'react';

import products from './../data/products';
import categories from './../data/categories';

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
                <Grid px={'4rem'} templateColumns='repeat(10, 1fr)' gap={4}>
                    <GridItem colSpan={2}>
                        <Filters categories={categories} />
                    </GridItem>
                    <GridItem colSpan={8}>
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