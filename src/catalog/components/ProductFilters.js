import { Button, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { listProductsAction } from '../redux/ProductActions';
import { productListDefault } from '../redux/ProductReducers';
import AvailabilityFilter from './filters/AvailabilityFilter';
import PriceFilter from './filters/PriceFilter';
import SortFilter from './filters/SortFilter';

function ProductFilters() {

    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(listProductsAction({
            ...productListDefault.filters
        }));
    }

    return (

        <Space direction="horizontal" wrap>

            <AvailabilityFilter />

            <PriceFilter />

            <SortFilter />

            <Button
                type="primary"
                onClick={handleReset}
                size={'large'}
            >
                Reset
            </Button>

        </Space>

    )
}

export default ProductFilters
