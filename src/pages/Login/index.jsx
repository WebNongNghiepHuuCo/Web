import { Button, Card, Form, Input } from 'antd';
import { REGEX } from '~/helpers/regex';
import BaseLayout from '~/layouts';
import Logo from '~/layouts/Header/Logo';
import { useAuth } from '../redux/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';
import { useTheme } from '~/common/theme/redux/hooks/useTheme';

const Login = () => {
  const { actions, isLoading } = useAuth();
  const navigate = useNavigate();

  const {
    actions: actionsTheme,
    data: { userRegister }
  } = useTheme();
  const handleLogin = (values) => {
    const params = {
      email: values?.email.toLowerCase(),
      password: values?.password
    };

    actions.login(params, (res) => {
      actionsTheme.updateInfoUser(res);
      navigate(ROUTE_PATH.HOME);
    });
  };

  return (
    <BaseLayout>
      <div className='mx-auto max-w-screen-xl p-4'>
        <div className='h-full w-full flex justify-center items-center mt-12'>
          <Card className='w-[90%]'>
            <Logo center />
            <div className='text-2xl mt-3 font-bold text-center'>Đăng Nhập</div>

            <Form
              layout='vertical'
              name='login-form'
              onFinish={handleLogin}
              initialValues={{ email: userRegister?.email }}
            >
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
                    borderRadius: '30px'
                  }}
                />
              </Form.Item>
              <Form.Item
                name='password'
                label={<span style={{ fontWeight: '600' }}>Mật Khẩu</span>}
                rules={[
                  {
                    required: true
                  },
                  {
                    pattern: REGEX.PASSWORD,
                    message: 'Validate Failed'
                  }
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
                  Đăng Nhập
                </Button>
              </Form.Item>
            </Form>

            <div className='flex item-center justify-center'>
              <div
                className='cursor-pointer text-[#0284c7] font-bold text-base'
                onClick={() => {
                  navigate(ROUTE_PATH.REGISTER);
                }}
              >
                Đăng ký
              </div>
            </div>
          </Card>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Login;
