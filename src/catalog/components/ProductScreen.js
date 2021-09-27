import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductFilters from '../components/ProductFilters';
import ProductGrid from '../components/ProductGrid';
import ProductPager from '../components/ProductPager';
import ProductSearch from '../components/ProductSearch';
import { listProductsAction } from '../redux/ProductActions';

function ProductCatalog() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsAction());
    }, [dispatch])

    return (
        <div className='m-6-childs'>
            <h2>Product Catalog</h2>
            <ProductSearch />
            <ProductFilters />
            <ProductGrid />
            <ProductPager />
        </div>
    )
}

export default ProductCatalog
