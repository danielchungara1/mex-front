import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import ProductCard from './ProductCard';
const ProductGrid = () => {

    const page  = useSelector(state => state.productPage.page)
    const products = page ? page.docs : [];
    
    return (
        <Row>
            {products?.map(p =>
                <Col xs={24} sm={12} md={12} lg={8} xl={6} xxl={3} key={uuid()}>
                    <ProductCard key={p._id} product={p} />
                </Col>
            )}
        </Row>

    );
};

export default ProductGrid;