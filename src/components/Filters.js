import { Fragment } from 'react';
import Categories from './Filters/Categories';

const Filters = (props) => {
    const { categories } = props;
    return(
        <Fragment>
            <Categories categories={categories} />
        </Fragment>
    );
};
export default Filters;