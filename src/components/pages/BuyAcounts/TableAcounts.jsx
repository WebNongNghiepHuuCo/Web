import { DeleteTwoTone, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from '~/common/hooks/useTranslation';
import { useCart } from '~/pages/redux/hooks/useCart';

export default function TableAcounts(props) {
  const { title, datas } = props;
  const { t } = useTranslation();

  const [currentListCart, setCurrentListCart] = useState([]);
  const {
    actions,
    data: { isLoading, listCarts }
  } = useCart();

  const addCart = (cart) => {
    actions.addCart(cart);
  };

  const deleteCart = (cart) => {
    actions.deleteCart(cart);
  };

  useEffect(() => {
    if (listCarts.length === 0) {
      setCurrentListCart(JSON.parse(localStorage.getItem('amorCart')));
    } else {
      setCurrentListCart(listCarts);
    }
  }, [listCarts]);

  const columns = [
    {
      title: t('PRODUCT'),
      dataIndex: 'name',
      key: 'name',
      width: 180,
      render: (data) => {
        return data;
      }
    },
    {
      title: t('PRICE'),
      dataIndex: 'price',
      key: 'price',
      width: 50,
      render: (data) => {
        return `$${data}`;
      }
    },
    {
      title: t('AVAILABLE'),
      dataIndex: 'quantity',
      key: 'quantity',
      width: 50,
      render: (data) => {
        return data;
      }
    },
    {
      title: t('DISCOUNT'),
      dataIndex: 'discount',
      key: 'discount',
      width: 50,
      render: (data) => {
        return data;
      }
    },
    {
      title: t('PURCHASE'),
      dataIndex: 'purchase',
      key: 'purchase',
      width: 50,
      render: (_, record) => {
        return (
          <>
            {currentListCart &&
              currentListCart?.findIndex(
                ({ _id }) => _id === record?._id?.toString()
              ) !== -1 && (
                <Button
                  className='!flex justify-center items-center !w-[40px]'
                  icon={
                    <DeleteTwoTone
                      style={{ fontSize: 18 }}
                      twoToneColor={'#FF4D4F'}
                    />
                  }
                  onClick={() => deleteCart(record)}
                />
              )}

            {currentListCart &&
              currentListCart?.findIndex(
                ({ _id }) => _id === record?._id?.toString()
              ) === -1 && (
                <Button
                  className={` ${
                    record?.quantity > 0
                      ? 'cursor-pointer'
                      : 'cursor-not-allowed'
                  } !flex justify-center items-center !w-[40px]`}
                  icon={
                    <ShoppingCartOutlined
                      style={{ fontSize: 18 }}
                      twoToneColor={'#1d4ed8'}
                    />
                  }
                  onClick={() => {
                    if (record?.quantity > 0) {
                      addCart(record);
                    }
                  }}
                />
              )}

            {!currentListCart && (
              <Button
                className={` ${
                  record?.quantity > 0
                    ? 'cursor-pointer'
                    : 'cursor-not-allowed'
                } !flex justify-center items-center !w-[40px]`}
                icon={
                  <ShoppingCartOutlined
                    style={{ fontSize: 18 }}
                    twoToneColor={'#1d4ed8'}
                  />
                }
                onClick={() => addCart(record)}
              />
            )}
          </>
        );
      }
    }
  ];

  return (
    <div className='grid grid-cols-1 gap-3 w-full mb-3'>
      <div className='text-xl font-bold'>{title}</div>
      <Table
        className='table-product shadow-md rounded-lg'
        locale={{ emptyText: t('emptyData') }}
        columns={columns}
        dataSource={datas}
        pagination={false}
        loading={isLoading}
      />
    </div>
  );
}
