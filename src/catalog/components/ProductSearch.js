import { Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFilter from '../../hooks/useFilter';
import { listProductsAction } from '../redux/ProductActions';
import { productListDefault } from '../redux/ProductReducers';

function ProductSearch() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.productList.loading);
    const { Search } = Input;

    const handleSearch = (value) => {
        dispatch(listProductsAction({
            ...productListDefault.filters,
            searchText: value
        }));
    }

    //***************************************************************************
    // Is required when resetting filters
    //***************************************************************************
    const searchText = useSelector(state => state.productList.filters.searchText);
    const [value, handleValueChange] = useFilter(searchText);

    return (
        <>
            <Search
                placeholder="Search in Catalog ...."
                loading={loading}
                onPressEnter={(e)=> handleSearch(e.target.value)}
                onSearch={handleSearch}
                onBlur={(e)=> {e.target.value && handleSearch(e.target.value)}}
                value={value}
                onChange={(e) => handleValueChange(e.target.value)}
            />
        </>
    )
}

export default ProductSearch
