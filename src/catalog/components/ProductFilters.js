import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, InputNumber, Menu, Space, Switch } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsAction } from '../redux/ProductActions';
import { productListDefault } from '../redux/ProductReducers';

function ProductFilters() {

    const dispatch = useDispatch();
    const { filters } = useSelector(state => state.productList)

    const [titleOrder, setTitleOrder] = useState('Relevance')

    const handleSortChange = (sort, direction) => {
        dispatch(listProductsAction({
            ...filters,
            page: 1,
            sort: `${sort},${direction}`
        }));
    };

    const handleChangeAvailability = (available) => {
        dispatch(listProductsAction({
            ...filters,
            page: 1,
            available
        }));
    };

    const handleChangeTitleOrder = ({ key }) => {
        setTitleOrder(key);
    };

    const menu = (
        <Menu>
            <Menu.Item key="Relevance" onClick={(e) => { handleSortChange('description', 'ASC'); handleChangeTitleOrder(e) }}>
                Relevance
            </Menu.Item>
            <Menu.Item key="Lowest Price" onClick={(e) => { handleSortChange('price', 'ASC'); handleChangeTitleOrder(e) }}>
                Lowest Price
            </Menu.Item>
            <Menu.Item key="Hightest Price" onClick={(e) => { handleSortChange('price', 'DESC'); handleChangeTitleOrder(e) }}>
                Highest Price
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <h3>ProductFilters</h3>
            <Space direction="horizontal" wrap>
                <span>Available</span>
                <Switch
                    defaultChecked={productListDefault.filters.available}
                    size="small"
                    onChange={handleChangeAvailability}
                />
                <span>Min</span>
                <InputNumber
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={() => console.log('on change input number')}
                />
                <span>Max</span>
                <InputNumber
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={() => console.log('on change input number')}
                />
                <Dropdown overlay={menu} trigger={['click']}>
                    <Button>
                        {`${titleOrder}`} <DownOutlined />
                    </Button>
                </Dropdown>       
                <Button type="primary">Reset</Button>         
            </Space>
        </div>
    )
}

export default ProductFilters
