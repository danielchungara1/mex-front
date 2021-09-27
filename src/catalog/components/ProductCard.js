import { Card, Modal } from 'antd';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import useModal from '../../hooks/useModal';
import ProductDetail from './ProductDetail';

const ProductCard = ({ product }) => {

    const { Meta } = Card;

    const { description, price, stock, imageUrlMd } = product;

    const [isModalVisible, showModal, handleOk, handleCancel] = useModal();

    return (
        <div className="row-centered m-6">
            <Card
                hoverable
                onClickCapture={showModal}
                style={{ width: 240 }}
                cover={<img alt="example" src={imageUrlMd} />}
            >
                <Meta
                    title={description}
                />
                <CurrencyFormat
                    value={price}
                    displayType={'text'}
                    prefix={'$'}
                    style={{ lineHeight: '2rem', fontSize: '0.9rem' }}
                />
                {stock > 0
                    ? (<div>Available</div>)
                    : (<div>Unavailable</div>)
                }
                <Modal
                    title="Product Detail"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <ProductDetail product={product} />
                </Modal>

            </Card>
        </div>
    );
};

export default ProductCard;