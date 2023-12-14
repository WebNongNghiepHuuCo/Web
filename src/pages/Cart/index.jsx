import { Button, Card, InputNumber, Result, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from '~/common/hooks/useTranslation';
import BaseLayout from '~/layouts';
import { useCart } from '../redux/hooks/useCart';
import { DeleteTwoTone, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';
const Cart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [currentListCart, setCurrentListCart] = useState([]);

  const {
    actions,
    data: { listCarts }
  } = useCart();

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
      title: t('QUANTITY'),
      dataIndex: 'total',
      key: 'total',
      width: 50,
      render: (_, data) => {
        return (
          <div className='flex items-center'>
            <MinusOutlined
              className='cursor-pointer hover:!text-[#FF4D4F] mr-3'
              onClick={() => {
                if (data?.total - 1 === 0) {
                  deleteCart(data);
                } else {
                  updateCart({ ...data, total: data?.total - 1 });
                }
              }}
            />

            <InputNumber
              onChange={(value) => {
                if (value === 0 || value === null) {
                  deleteCart(data);
                } else {
                  updateCart({ ...data, total: value });
                }
              }}
              style={{ width: 50 }}
              value={data?.total}
            />

            <PlusOutlined
              className='cursor-pointer ml-3 hover:!text-[#1d4ed8]'
              onClick={() => {
                updateCart({ ...data, total: 1 + data?.total });
              }}
            />
          </div>
        );
      }
    },
    {
      title: t('SUBTOTAL'),
      dataIndex: 'price',
      key: 'subTotal',
      width: 50,
      render: (_, data) => {
        return `$${data?.price * data?.total}`;
      }
    },
    {
      title: t('ACTION'),
      key: 'action',
      width: 50,
      render: (_, record) => {
        return (
          <>
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
          </>
        );
      }
    }
  ];

  const deleteCart = (cart) => {
    actions.deleteCart(cart);
  };

  const updateCart = (cart) => {
    actions.updateCart(cart);
  };
  useEffect(() => {
    if (listCarts.length === 0) {
      setCurrentListCart(JSON.parse(localStorage.getItem('amorCart')));
    } else {
      setCurrentListCart(listCarts);
    }
  }, [listCarts]);

  return (
    <BaseLayout>
      <div className='bg-white'>
        <div className='mx-auto max-w-screen-xl p-4'>
          {currentListCart?.length > 0 && (
            <div className='grid grid-cols-1 md:!grid-cols-3 gap-4 w-full'>
              <div className='col-span-2'>
                <Table
                  className='table-product shadow-md rounded-lg'
                  locale={{ emptyText: t('emptyData') }}
                  columns={columns}
                  dataSource={currentListCart}
                  pagination={false}
                  loading={false}
                />
              </div>

              <Card className='shadow-md sm:rounded-lg h-[15.5rem]'>
                <h5 className='mb-4 text-lg font-medium text-gray-500 healer:text-gray-400'>
                  Cart totals
                </h5>

                <div className='flex jutify-between'>
                  <h1 className='w-full text-base font-medium text-gray-500 healer:text-gray-400'>
                    Subtotal
                  </h1>

                  <span className='block text-base font-normal text-gray-500 healer:text-gray-400'>
                    $
                    {currentListCart?.reduce((accumulator, object) => {
                      return accumulator + object.total * object.price;
                    }, 0)}
                  </span>
                </div>

                <hr className='w-full border !border-dashed border-gray-300 my-4' />

                <div className='flex jutify-between'>
                  <h1 className='w-full text-base font-medium text-gray-500 healer:text-gray-400'>
                    Total
                  </h1>
                  <span className='block text-base font-normal text-gray-500 healer:text-gray-400'>
                    $
                    {currentListCart?.reduce((accumulator, object) => {
                      return accumulator + object.total * object.price;
                    }, 0)}
                  </span>
                </div>

                <Button
                  className='mt-4 w-full'
                  type='primary'
                  onClick={() => {
                    navigate(ROUTE_PATH.CHECKOUT);
                  }}
                >
                  Proceed to checkout
                </Button>
              </Card>
            </div>
          )}
          {(!localStorage.getItem('amorCart') || currentListCart?.length === 0) && (
            <>
              <Result
                status='500'
                title='Your shipping bag is empty.'
                extra={
                  <Button
                    onClick={() => {
                      navigate(ROUTE_PATH.BUY_ACCOUNTS);
                    }}
                    type='primary'
                  >
                    Return to shop
                  </Button>
                }
              />
            </>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Cart;
