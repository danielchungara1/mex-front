import React from 'react';

const ProductDetail = ({ product }) => {

  const { description, price, stock, imageUrlLg } = product;

  return (
    <>
      <img
        src={imageUrlLg}
        alt=""
        width="100%"
      />
      <hr />
      <ul>
        <li>Description {description}</li>
        <li>Price ${price}</li>
        <li>Stock {stock}</li>
      </ul>
    </>
  );
};

export default ProductDetail;