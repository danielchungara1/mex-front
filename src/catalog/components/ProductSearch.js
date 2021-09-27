import { Input } from 'antd';
import React from 'react';

function ProductSearch() {
    const { Search } = Input;

    return (
        <>
            <Search placeholder="input search loading default" loading={false} />
        </>
    )
}

export default ProductSearch
