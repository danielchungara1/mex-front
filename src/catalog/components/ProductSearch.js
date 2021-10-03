import { Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsAction } from '../redux/ProductActions';
import { productListDefault } from '../redux/ProductReducers';

function ProductSearch() {

    const { Search } = Input;

    const dispatch = useDispatch();
    const loading = useSelector(state => state.productList.loading);

    const handleSearch = (e) => {
        dispatch(listProductsAction({ 
            ...productListDefault.filters,
            searchText: e.target.value
        }));
    }
    
    return (
        <>
            <Search 
                placeholder="Search in Catalog ...." 
                loading={loading} 
                onPressEnter={handleSearch}
                
            />
        </>
    )
}

export default ProductSearch
