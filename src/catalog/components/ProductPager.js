import { Pagination } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsAction } from '../redux/ProductActions';
import { productListDefault } from '../redux/ProductReducers';

function ProductPager() {

    const {result, filters} = useSelector(state => state.productList)
    const dispatch = useDispatch();

    const currentPage = result.page || productListDefault.result.page;
    const totalElements = result.totalDocs || productListDefault.result.totalDocs;
    const pageSize = result.limit || productListDefault.result.limit;

    const handlePageChange = (page) => {        
        dispatch(listProductsAction({
            ...filters || productListDefault.filters, 
            page
        }));
    }

    return (
        <div>
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
        </div>
    )
}

export default ProductPager
