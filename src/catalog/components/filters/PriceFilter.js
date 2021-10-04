import { InputNumber, Space } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFilter from '../../../hooks/useFilter';
import { listProductsAction } from '../../redux/ProductActions';

function PriceFilter() {

    const dispatch = useDispatch();
    const { filters } = useSelector(state => state.productList)

    const handlePriceChange = (e) => {
        dispatch(listProductsAction({
            ...filters,
            page: 1,
            [e.target.name]: e.target.value ? e.target.value : ''
        }));
    }

    //***************************************************************************
    // Required when resetting filters
    //***************************************************************************
    const minPrice = useSelector(state => state.productList.filters.minPrice);
    const [valueMinPrice, setValueMinPrice] = useFilter(minPrice);


    //***************************************************************************
    // Required when resetting filters
    //***************************************************************************
    const maxPrice = useSelector(state => state.productList.filters.maxPrice);
    const [valueMaxPrice, setValueMaxPrice] = useFilter(maxPrice);

    return (

        <Space direction="horizontal" wrap>
            <div>
                <span>Min </span>
                <InputNumber
                    name='minPrice'
                    onPressEnter={handlePriceChange}
                    onBlur={(e) => { e.target.value && handlePriceChange(e) }}
                    value={valueMinPrice}
                    onChange={setValueMinPrice}
                    style={{ minWidth: '150px' }}
                    size={'large'}
                />
            </div>
            <div>
                <span>Max </span>
                <InputNumber
                    name='maxPrice'
                    onPressEnter={handlePriceChange}
                    onBlur={(e) => { e.target.value && handlePriceChange(e) }}
                    value={valueMaxPrice}
                    onChange={setValueMaxPrice}
                    style={{ minWidth: '150px' }}
                    size={'large'}
                />
            </div>
        </Space>

    )
}

export default PriceFilter
