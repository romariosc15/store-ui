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
            <Box paddingY={'4rem'} paddingX={{'base': '2rem', 'md':'4rem', 'lg':'6rem', 'xl':'6rem', '2xl':'12rem'}}>
                <Grid templateColumns={{'base':'repeat(1, 1fr)', 'lg':'repeat(12, 1fr)', 'xl':'repeat(11, 1fr)', '2xl':'repeat(10, 1fr)'}} columnGap={{'base': 0, 'lg': 4}} rowGap={{'base': 8, 'lg': 6}}>
                    <GridItem colSpan={{'base': 2, 'lg': 4, 'xl': 3, '2xl': 2}}>
                        <Filters categories={categories} />
                    </GridItem>
                    <GridItem colSpan={{'base': 2, 'lg': 8, 'xl': 8, '2xl': 8}}>
                        <Grid templateColumns={{'base':'repeat(1, 1fr)', 'lg':'repeat(2, 1fr)', 'xl':'repeat(3, 1fr)'}} columnGap={{'base': 0, 'lg': 4}} rowGap={{'base': 8, 'lg': 6}}>
                            {ProductCards}
                        </Grid>
                    </GridItem>
                </Grid>
            </Box>
        </Fragment>
        
    );
};
export default Products;