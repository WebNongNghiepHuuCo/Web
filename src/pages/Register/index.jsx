import { Button, Card, Form, Input } from 'antd';
import { REGEX } from '~/helpers/regex';
import BaseLayout from '~/layouts';
import Logo from '~/layouts/Header/Logo';
import { useAuth } from '../redux/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';
import { useTheme } from '~/common/theme/redux/hooks/useTheme';

const Register = () => {
  const { actions, isLoading } = useAuth();
  const navigate = useNavigate();
  const { actions: actionsTheme } = useTheme();

  const handleRegister = (values) => {
    const params = {
      email: values?.email.toLowerCase(),
      fullname: values?.name,
      password: values?.password,
      passwordConfirm: values?.passwordConfirm
    };

    actions.register(params, () => {
      actionsTheme?.onSaveUserRegister(params);
      navigate(ROUTE_PATH.LOGIN);
    });
  };

  return (
    <BaseLayout>
      <div className='mx-auto max-w-screen-xl p-4'>
        <div className='h-full w-full flex justify-center items-center mt-12'>
          <Card className='w-[90%]'>
            <Logo />
            <div className='text-2xl font-bold text-center'>REGISTER FORM</div>

            <Form
              layout='vertical'
              name='register-form'
              onFinish={handleRegister}
              initialValues={{ name: '', password: '' }}
            >
              <Form.Item
                name='name'
                label={<span style={{ fontWeight: '600' }}>Name</span>}
                rules={[
                  {
                    required: true
                  }
                ]}
                validateTrigger={['onBlur', 'onChange']}
              >
                <Input
                  style={{
                    background:
                      'linear-gradient(120deg, rgba(250,250,250,1) 1%, rgba(230,244,246,1) 67%, rgba(226,240,247,1) 85%)',
                    borderRadius: '30px'
                  }}
                />
              </Form.Item>
              <Form.Item
                name='email'
                label={<span style={{ fontWeight: '600' }}>Email</span>}
                rules={[
                  {
                    required: true
                  },
                  {
                    type: 'email',
                    message: 'Validate Failed'
                  }
                ]}
                validateTrigger={['onBlur', 'onChange']}
              >
                <Input
                  style={{
                    background:
                      'linear-gradient(120deg, rgba(250,250,250,1) 1%, rgba(230,244,246,1) 67%, rgba(226,240,247,1) 85%)',
                    borderRadius: '30px'
                  }}
                />
              </Form.Item>
              <Form.Item
                name='password'
                label={<span style={{ fontWeight: '600' }}>Password</span>}
                rules={[
                  {
                    required: true,
                    message: 'Please enter password'
                  },
                  () => ({
                    validator(rule, value) {
                      var regex = new RegExp(REGEX.PASSWORD);
                      var regex_space = new RegExp(REGEX.NOT_WHITESPACE);
                      if (!value) {
                        // return Promise.reject('Please enter password');
                      } else if (!regex_space.test(value)) {
                        return Promise.reject('reEnterpasswordNotSpace');
                      } else if (!regex.test(value)) {
                        return Promise.reject('Validate Failed');
                      }
                      return Promise.resolve();
                    }
                  })
                ]}
                validateTrigger={['onBlur', 'onChange']}
              >
                <Input.Password
                  style={{
                    background:
                      'linear-gradient(120deg, rgba(250,250,250,1) 1%, rgba(230,244,246,1) 67%, rgba(226,240,247,1) 85%)',
                    borderRadius: '30px'
                  }}
                />
              </Form.Item>

              <Form.Item
                name='passwordConfirm'
                label={
                  <span style={{ fontWeight: '600' }}>Password Confirm</span>
                }
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: 'Please enter password'
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      var regex_space = new RegExp(REGEX.NOT_WHITESPACE);
                      var regex = new RegExp(REGEX.PASSWORD);

                      if (!value) {
                        // return Promise.reject('Please enter password');
                      } else if (!regex_space.test(value)) {
                        return Promise.reject('reEnterpasswordNotSpace');
                      } else if (getFieldValue('password') !== value) {
                        return Promise.reject('passwordNotMatch');
                      } else if (!regex.test(value)) {
                        return Promise.reject('Validate Failed');
                      }
                      return Promise.resolve();
                    }
                  })
                ]}
                validateTrigger={['onBlur', 'onChange']}
              >
                <Input.Password
                  style={{
                    background:
                      'linear-gradient(120deg, rgba(250,250,250,1) 1%, rgba(230,244,246,1) 67%, rgba(226,240,247,1) 85%)',
                    borderRadius: '30px'
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  block
                  style={{
                    background:
                      '#73c509',
                    border: 'none',
                    borderRadius: 40
                  }}
                  loading={isLoading}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>

            <div className='flex item-center justify-center'></div>
          </Card>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Register;
