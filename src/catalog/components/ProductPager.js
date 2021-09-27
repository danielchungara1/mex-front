import { Pagination } from 'antd';
import React from 'react';

function ProductPager() {
    return (
        <div className="row-centered">
            <Pagination defaultCurrent={1} total={50} />
        </div>
    )
}

export default ProductPager
