import { Col, Row } from 'antd';
import React from 'react';

const ProductDetail = ({ product }) => {

  const { description, price, stock, imageUrlLg } = product;

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col  xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <img
            src={imageUrlLg}
            alt=""
            width="100%"
          />
        </Col>
        <Col  xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{...styles.body}}>
          <h3>{description}</h3>
          <div style={{...styles.price}}>${price}</div>
          <div><b>{stock}</b> Available</div>          
        </Col>
      </Row>

    </>
  );
};

export default ProductDetail;

const styles = {
  price: {
    color: '#009EE3',
    fontSize: '1.25rem',
    lineHeight: '1.5em',
    fontWeight: '600'
  },
  body: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
  }
}