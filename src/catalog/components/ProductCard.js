import { Card, Modal } from 'antd';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import useModal from '../../hooks/useModal';
import ProductDetail from './ProductDetail';

const ProductCard = ({ product }) => {

    const { Meta } = Card;

    const { description, price, stock, imageUrlMd } = product;

    const [isModalVisible, showModal, handleOk, handleCancel] = useModal();

    const stockLabel = (<>
        {stock > 0
            ? <span style={{ ...SAvailable, ...SAvailability }}>In Stock</span>
            : <span style={{ ...SUnavailable, ...SAvailability }}>Out Stock</span>
        }
    </>);

    const productImage = (
        <img
            alt="example"
            src={imageUrlMd}
            style={{...SProductImage}}
            onClick={showModal}
        />
    );

    return (
        <Card
            style={{ height: '100%' }}
            cover={productImage}
            extra={stockLabel}            
        >
            <Meta
                title={description}
            />
            <CurrencyFormat
                value={price}
                displayType={'text'}
                prefix={'$'}
                style={SPrice}
            />
            <Modal
                title="Product Detail"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <ProductDetail product={product} />
            </Modal>

        </Card>
    );
};

export default ProductCard;

// ***************************************************************************************************
// * Styles *
// ***************************************************************************************************
const SAvailability = {
    borderColor: '#4caf50',
    borderRadius: '5px',
    padding: '5px 10px',
    color: '#fff',
};
const SAvailable = {
    backgroundColor: '#4caf50'
};
const SUnavailable = {
    backgroundColor: '#FF4F4B'
};
const SPrice = {
    fontSize: '1.3rem',
    fontWeight: '600',
    lineHeight: '3rem'
}
const SProductImage = {
    padding: '5px',
    cursor: 'pointer'
}