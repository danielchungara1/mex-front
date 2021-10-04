import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import ProductCard from './ProductCard';
const ProductGrid = () => {

    const { result } = useSelector(state => state.productList)

    const products = result ? result.docs : [];

    return (
        <Row gutter={[16, 16]}>
            {products?.map(p =>
                <Col
                    xs={24} sm={24} md={8} lg={6} xl={6} xxl={6}
                    key={uuid()}
                >
                    <ProductCard key={p._id} product={p} />
                </Col>
            )}
        </Row>
    );
};

export default ProductGrid;