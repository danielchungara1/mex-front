import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductFilters from '../components/ProductFilters';
import ProductGrid from '../components/ProductGrid';
import ProductPager from '../components/ProductPager';
import ProductSearch from '../components/ProductSearch';
import { listProductsAction } from '../redux/ProductActions';
import { productListDefault } from '../redux/ProductReducers';

function ProductCatalog() {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(listProductsAction(productListDefault.filters));
    }, [dispatch])

    return (
        
        <div className='m-md-childs'>
            <ProductSearch />
            <ProductFilters />
            <ProductGrid />
            <ProductPager />
        </div>

    )
}

export default ProductCatalog
