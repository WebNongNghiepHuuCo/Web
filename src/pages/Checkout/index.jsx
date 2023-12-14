import { Button, Card, Form, Input, Select, notification } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import BaseLayout from '~/layouts';
import TextArea from 'antd/es/input/TextArea';
import countryList from 'react-select-country-list';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';
import { useCart } from '../redux/hooks/useCart';
import { useTheme } from '~/common/theme/redux/hooks/useTheme';
import { useCheckout } from '../redux/hooks/useCheckout';
import { NOTIFICATION_DURATION } from '~/common/constants';

const Checkout = () => {
  const navigate = useNavigate();
  const [currentListCart, setCurrentListCart] = useState([]);
  const [form] = Form.useForm();
  const options = useMemo(() => countryList().getData(), []);

  const {
    data: { listCarts }
  } = useCart();

  const {
    data: { user }
  } = useTheme();

  const {
    actions,
    data: { isLoading }
  } = useCheckout();

  const rules = {
    fullName: [
      {
        required: true
      }
    ],
    country: [
      {
        required: true
      }
    ],
    phone: [
      {
        required: true
      }
    ],
    email: [
      {
        required: true
      },
      {
        type: 'email',
        message: 'Only email address format is valid'
      }
    ],
    contact: [
      {
        required: true
      }
    ]
  };

  const handleSubmit = (values) => {
    // currentListCart?.map(i =>  i.productId = i?._id)
    const params = {
      info: {
        ...values,
        userId: user?._id
      },
      products: currentListCart
    };
    actions?.checkout(params, () => {
      notification.success({
        message: 'Send email Success! Pls wait feedback!',
        duration: NOTIFICATION_DURATION
      });

      form.resetFields();
      localStorage.setItem('amorCart', JSON.stringify([]));

      setTimeout(() => {
        navigate(ROUTE_PATH.BUY_ACCOUNTS);
      }, 1500);
    });
  };

  useEffect(() => {
    if (listCarts.length === 0) {
      setCurrentListCart(JSON.parse(localStorage.getItem('amorCart')));
    } else {
      setCurrentListCart(listCarts);
    }
  }, [listCarts]);

  useEffect(() => {
    if (
      localStorage.getItem('amorCart') &&
      JSON.parse(localStorage.getItem('amorCart'))?.length === 0
    ) {
      navigate(ROUTE_PATH.BUY_ACCOUNTS);
    }
  }, []);
  return (
    <BaseLayout>
      <div className='bg-white'>
        <div className='mx-auto max-w-screen-xl p-4'>
          <Form
            onFinish={handleSubmit}
            layout={'vertical'}
            form={form}
            translate='yes'
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            autoComplete='off'
            size='middle'
            validateTrigger={['onBlur', 'onChange']}
            initialValues={{ fullname: user?.fullname, email: user?.email }}
          >
            <div className='grid grid-cols-1 md:!grid-cols-2 gap-4 w-full'>
              <Card className='shadow-md sm:rounded-lg'>
                <Form.Item
                  label={'Full Name'}
                  name='fullname'
                  rules={rules.fullName}
                  labelAlign='left'
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label={'Company name'}
                  name='company'
                  labelAlign='left'
                >
                  <Input />
                </Form.Item>

                <div className='grid md:grid-cols-2'>
                  <Form.Item
                    className='w-11/12'
                    label={'Country / Region'}
                    name='country'
                    rules={rules.country}
                    labelAlign='left'
                  >
                    <Select
                      showSearch
                      optionFilterProp='children'
                      filterOption={(input, option) =>
                        (option?.label ?? '').includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '')
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? '').toLowerCase())
                      }
                      options={options}
                    />
                  </Form.Item>

                  <Form.Item
                    className='w-full'
                    label={'Phone'}
                    name='phone'
                    labelAlign='left'
                    rules={rules.phone}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <div className='grid md:grid-cols-2'>
                  <Form.Item
                    className='w-11/12'
                    label={'Email'}
                    name='email'
                    rules={rules.email}
                    labelAlign='left'
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    className='w-full'
                    label={'Contact (Telegram, skype, whatsapp)'}
                    name='contact'
                    labelAlign='left'
                    rules={rules.contact}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <Form.Item label={'Order note'} name='order' labelAlign='left'>
                  <TextArea
                    rows={4}
                    placeholder='Note about your order, ex: special note for delivery'
                  />
                </Form.Item>
              </Card>
              <div>
                <Card className='shadow-md sm:rounded-lg'>
                  <h5 className='mb-4 text-lg font-medium text-gray-700'>
                    Your order{' '}
                  </h5>
                  <div className='text-gray-600 w-full text-base font-medium leading-tight text-gray-500 healer:text-gray-400'>
                    Product
                    <span className='block float-right text-base font-medium leading-tight text-gray-600 healer:text-gray-400'>
                      Subtotal
                    </span>
                    <hr className='w-full border border border-gray-300 mt-6 mb-6' />
                    {currentListCart?.map((data, i) => (
                      <React.StrictMode key={i?.toString()}>
                        <h1 className='w-full text-base font-regular leading-tight text-gray-500 healer:text-gray-400'>
                          {data?.name}
                          <span className='font-medium text-gray-700'>
                            x {data?.total}
                          </span>
                          <span className='block float-right text-base font-normal leading-tight text-gray-500 healer:text-gray-400'>
                            ${data?.price * data?.total}
                          </span>
                        </h1>
                        <hr className='w-full border !border-dashed border-gray-300 mt-3 mb-3' />
                      </React.StrictMode>
                    ))}
                    <div className='text-gray-600 w-full text-base font-medium leading-tight text-gray-500 healer:text-gray-400'>
                      {' '}
                      Total{' '}
                      <span className='block float-right text-base font-medium leading-tight text-gray-700 healer:text-gray-400'>
                        $
                        {currentListCart?.reduce((accumulator, object) => {
                          return accumulator + object.total * object.price;
                        }, 0)}
                      </span>
                    </div>
                  </div>

                  <Button
                    className='mt-4 w-full'
                    type='primary'
                    htmlType='submit'
                    loading={isLoading}
                  >
                    Place order
                  </Button>
                </Card>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Checkout;
