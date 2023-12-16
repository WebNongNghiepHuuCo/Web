import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';
import { Logo } from './Logo';
import { useCart } from '~/pages/redux/hooks/useCart';
import { DownOutlined } from '@ant-design/icons';
import { Col, Dropdown, Image, Row } from 'antd';
import { IMAGE_FALLBACK } from '~/common/constants';
import { useAuth } from '~/pages/redux/hooks/useAuth';
import { useTheme } from '~/common/theme/redux/hooks/useTheme';

export default function Header() {
  const navigate = useNavigate();
  const { actions } = useAuth();

  const {
    actions: actionsTheme,
    data: { user }
  } = useTheme();

  const logout = () => {
    actions.logout({}, actionsTheme.updateInfoUser(null));
  };
  const items = [
    {
      label: (
        <div
          className={`cursor-pointer nav-top-link mr-8 ${
            window.location.pathname === ROUTE_PATH?.HATGIONG &&
            'active'
          }`}
          onClick={() => {
            if (window.location.pathname === ROUTE_PATH?.HATGIONG) {
              window.scrollTo(0, 0);
            }
            navigate(ROUTE_PATH.HATGIONG);
          }}
        >
          Hạt Giống
        </div>
      ),
      key: '0'
    },
    {
      label: (
        <div
          className={`cursor-pointer nav-top-link mr-8 ${
            window.location.pathname === ROUTE_PATH?.TIKTOK_SERVICE && 'active'
          }`}
          onClick={() => {
            if (window.location.pathname === ROUTE_PATH?.TIKTOK_SERVICE) {
              window.scrollTo(0, 0);
            }
            navigate(ROUTE_PATH.TIKTOK_SERVICE);
          }}
        >
          Tiktok Rental Service
        </div>
      ),
      key: '1'
    },
    {
      type: 'divider'
    },
    {
      label: (
        <div
          className={`cursor-pointer nav-top-link mr-8 ${
            window.location.pathname === ROUTE_PATH?.BUY_ACCOUNTS && 'active'
          }`}
          onClick={() => {
            if (window.location.pathname === ROUTE_PATH?.BUY_ACCOUNTS) {
              window.scrollTo(0, 0);
            }
            navigate(ROUTE_PATH.BUY_ACCOUNTS);
          }}
        >
          Facebook Selling Service
        </div>
      ),
      key: '3'
    }
  ];
  const ref = useRef(null);
  const [total, setTotal] = useState(0);
  const [stickyActive, setStickyActive] = useState(false);

  const handleScroll = () => {
    if (ref.current && ref.current.offsetTop > 0) {
      setStickyActive(true);
    } else setStickyActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {
    data: { cart }
  } = useCart();

  useEffect(() => {
    if (localStorage.getItem('amorCart')) {
      setTotal(JSON.parse(localStorage.getItem('amorCart'))?.length);
    }
  }, [cart]);

  return (
    <>
      <div className='flex items-center w-full '>
        <Row className='max-w-screen-xl  mx-auto py-2 px-4 w-full'>
          <Col span={12}>
            <Logo handleScroll={handleScroll} />
          </Col>
          <Col span={12} className=''>
            <div className='flex justify-end items-center h-full w-full'>
              <div
                className={`mr-8 cursor-pointer nav-top-link block relative text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 healer:text-white md:healer:hover:text-blue-500 healer:hover:bg-gray-700 healer:hover:text-white md:healer:hover:bg-transparent ${
                  (window.location.pathname === ROUTE_PATH?.CART ||
                    window.location.pathname === ROUTE_PATH?.CHECKOUT) &&
                  'active'
                }`}
                onClick={() => {
                  if (window.location.pathname === ROUTE_PATH?.CART) {
                    window.scrollTo(0, 0);
                  }
                  navigate(ROUTE_PATH.CART);
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1.5em'
                  height='1.5em'
                  viewBox='0 0 24 24'
                  data-v-b364a039=''
                >
                  <path
                    fill='currentColor'
                    d='M12 13a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a5 5 0 0 1-5 5m0-10a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m7 3h-2a5 5 0 0 0-5-5a5 5 0 0 0-5 5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z'
                    data-v-b364a039=''
                  ></path>
                </svg>
                {total > 0 && (
                  <div
                    data-v-b364a039=''
                    className='absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-700 border-1 border-white rounded-full -top-2 -right-2 healer:border-gray-900'
                  >
                    {total}
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <header
        ref={ref}
        className='header sticky top-0 transition-all duration-500 z-30	'
      >
        <div className={`header-wrapper ${stickyActive && 'bg-white/90'}`}>
          <div
            className={`w-full shadow-lg transition-all duration-500 header-main bg-[#73c509]`}
          >
            <div className='max-w-screen-xl flex justify-between items-center mx-auto py-2 px-4 h-[80px]'>
              <div className='flex items-center'>
                <div
                  className={`cursor-pointer nav-top-link mr-8 ${
                    window.location.pathname === ROUTE_PATH?.HOME && 'active'
                  }`}
                  onClick={() => {
                    if (window.location.pathname === ROUTE_PATH?.HOME) {
                      window.scrollTo(0, 0);
                    }
                    navigate(ROUTE_PATH.HOME);
                  }}
                >
                  Trang Chủ
                </div>

                <div
                  className={`cursor-pointer nav-top-link mr-8 ${
                    window.location.pathname === ROUTE_PATH?.ABOUT_US &&
                    'active'
                  }`}
                  onClick={() => {
                    if (window.location.pathname === ROUTE_PATH?.ABOUT_US) {
                      window.scrollTo(0, 0);
                    }
                    navigate(ROUTE_PATH.ABOUT_US);
                  }}
                >
                  Giới Thiệu
                </div>

                <div
                  className={`cursor-pointer nav-top-link mr-8 ${
                    window.location.pathname === ROUTE_PATH?.NEWS &&
                    'active'
                  }`}
                  onClick={() => {
                    if (window.location.pathname === ROUTE_PATH?.NEWS) {
                      window.scrollTo(0, 0);
                    }
                    navigate(ROUTE_PATH.NEWS);
                  }}
                >
                  Tin tức
                </div>

                <Dropdown
                  menu={{
                    items
                  }}
                >
                  <div
                    className={`cursor-pointer nav-top-link mr-8 ${
                      (window.location.pathname ===
                        ROUTE_PATH?.HATGIONG ||
                        window.location.pathname ===
                          ROUTE_PATH?.TIKTOK_SERVICE) &&
                      'active'
                    }`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className='!flex !items-center '>
                      Sản Phẩm
                      <DownOutlined className='ml-1' style={{ fontSize: 12 }} />
                    </div>
                  </div>
                </Dropdown>
              </div>

              {!user && (
                <div
                  className={`cursor-pointer nav-top-link mr-8 ${
                    window.location.pathname === ROUTE_PATH?.LOGIN && 'active'
                  }`}
                  onClick={() => {
                    if (window.location.pathname === ROUTE_PATH?.LOGIN) {
                      window.scrollTo(0, 0);
                    }
                    navigate(ROUTE_PATH.LOGIN);
                  }}
                >
                  Login
                </div>
              )}
              {user && (
                <Dropdown
                  menu={{
                    items: [
                      {
                        label: (
                          <div className='flex font-bold text-base w-[150px]'>
                            {user?.fullname}
                          </div>
                        ),
                        key: '0'
                      },
                      {
                        type: 'divider'
                      },
                      {
                        label: (
                          <div
                            className='flex font-bold text-base text-[#dc2626]'
                            onClick={logout}
                          >
                            Logout
                          </div>
                        ),
                        key: '1'
                      }
                    ]
                  }}
                  trigger={['click']}
                >
                  <div className='flex items-center cursor-pointer'>
                    <Image
                      width={48}
                      height={48}
                      src={`../images/common/avatar.png`}
                      fallback={IMAGE_FALLBACK}
                      preview={false}
                      style={{ borderRadius: '50%' }}
                      placeholder={
                        <Image
                          style={{ borderRadius: '50%' }}
                          preview={false}
                          src={IMAGE_FALLBACK}
                          width={48}
                          height={48}
                        />
                      }
                    />
                  </div>
                </Dropdown>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
