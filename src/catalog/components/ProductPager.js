import { Pagination } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsAction } from '../redux/ProductActions';
import { productPageDefault } from '../redux/ProductReducers';

function ProductPager() {

    const page = useSelector(state => state.productPage.page)
    const dispatch = useDispatch();

    const currentPage = page.page || productPageDefault.page;
    const totalElements = page.totalDocs || productPageDefault.totalDocs;
    const pageSize = page.limit || productPageDefault.limit;

    const handlePageChange = (_page) => {
        dispatch(listProductsAction({ page: _page }));
    }

    return (
        <>
            { totalElements > 0
                ?
                    <div className="row-centered">
                        <Pagination
                            current={currentPage}
                            total={totalElements}
                            onChange={handlePageChange}
                            pageSize={pageSize}
                        />
                    </div>
                :
                    <h3>
                        No results...
                    </h3>
            }
        </>
    )
}

export default ProductPager
