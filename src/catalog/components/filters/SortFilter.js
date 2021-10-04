import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFilter from '../../../hooks/useFilter';
import { listProductsAction } from '../../redux/ProductActions';

function SortFilter() {

    const dispatch = useDispatch();

    const { filters } = useSelector(state => state.productList)

    const handleSortChange = (sortCriteria) => {
        dispatch(listProductsAction({
            ...filters,
            page: 1,
            sort: sortCriteria
        }));
    };

    //***************************************************************************
    // Required when resetting filters
    //***************************************************************************
    const sortCriteriaMap = {
        'description,ASC': 'Relevance',
        'price,ASC': 'Lowest Price',
        'price,DESC': 'Hightest Price',
    };
    const sort = useSelector(state => state.productList.filters.sort);  // 'description,ASC'
    const [value, handleValueChange] = useFilter(sortCriteriaMap[sort]);

    const menu = (
        <Menu>
            <Menu.Item key="Relevance" onClick={(e) => { handleSortChange('description,ASC'); handleValueChange(e.key) }}>
                Relevance
            </Menu.Item>
            <Menu.Item key="Lowest Price" onClick={(e) => { handleSortChange('price,ASC'); handleValueChange(e.key) }}>
                Lowest Price
            </Menu.Item>
            <Menu.Item key="Hightest Price" onClick={(e) => { handleSortChange('price,DESC'); handleValueChange(e.key) }}>
                Highest Price
            </Menu.Item>
        </Menu>
    );

    return (
        <Space direction="horizontal" wrap>

            <Dropdown overlay={menu} trigger={['click']}>
                <Button size={'large'}>
                    {`${value}`} <DownOutlined />
                </Button>
            </Dropdown>

        </Space>
    )
}

export default SortFilter
