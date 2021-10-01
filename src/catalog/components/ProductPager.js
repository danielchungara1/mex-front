import { Pagination } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsAction } from '../redux/ProductActions';

function ProductPager() {

    const page = useSelector(state => state.productPage.page)
    const dispatch = useDispatch();

    const totalElements = page ? page.totalDocs : 0;
    const currentPage = page ? page.page : 1;
    const pageSize = page ? page.limit : 10;
    
    const handlePageChange = (_page) => {
        dispatch(listProductsAction(_page));
    }

    return (
        <div className="row-centered">
            <Pagination
                defaultCurrent={currentPage}
                total={totalElements}
                onChange={handlePageChange}
                pageSize={pageSize}
            />
        </div>
    )
}

export default ProductPager
