import { Space, Switch } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFilter from '../../../hooks/useFilter';
import { listProductsAction } from '../../redux/ProductActions';

function AvailabilityFilter() {

    const dispatch = useDispatch();
    const { filters } = useSelector(state => state.productList)

    const handleChangeAvailability = (available) => {
        dispatch(listProductsAction({
            ...filters,
            page: 1,
            available
        }));
    };


    //***************************************************************************
    // Is required when resetting filters
    //***************************************************************************
    const available = useSelector(state => state.productList.filters.available);
    const [value, handleValueChange] = useFilter(available);

    return (
        <div>
            <Space direction="horizontal" wrap>

                <span>Available</span>
                <Switch
                    size="large"
                    onChange={(e) => { handleChangeAvailability(e); handleValueChange(e) }}
                    checked={value}
                />
            </Space>
        </div>
    )
}

export default AvailabilityFilter
