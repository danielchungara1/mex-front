import { DownOutlined } from '@ant-design/icons';
import { Button, Checkbox, Dropdown, InputNumber, Menu, Slider, Space, Switch } from 'antd';
import React from 'react';

function ProductFilters() {

    const menu = (
        <Menu onClick={() => console.log('menu click')}>
            <Menu.Item key="1">
                Relevance
            </Menu.Item>
            <Menu.Item key="2">
                Lowest Price
            </Menu.Item>
            <Menu.Item key="3">
                Highest Price
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <h3>ProductFilters</h3>
            <Space direction="horizontal" wrap>
                <Checkbox.Group
                    options={['option1', 'option2']}
                    defaultValue={['option1']}
                    onChange={() => console.log('on change check')}
                    className="d-block"
                />
                <Slider
                    range
                    defaultValue={[20, 50]}
                    disabled={false}
                    style={{ minWidth: '100px' }}
                />
                <Switch
                    size="small"
                    checked={true}
                    onChange={() => console.log('on change switch')}
                />
                <InputNumber
                    defaultValue={1000}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={() => console.log('on change input number')}
                />
                <Dropdown overlay={menu}>
                    <Button>
                        Sort <DownOutlined />
                    </Button>
                </Dropdown>
                <Button type="primary">Reset</Button>
            </Space>
        </div>
    )
}

export default ProductFilters
