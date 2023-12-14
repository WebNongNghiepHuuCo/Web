import React, { useState } from 'react';
import { Drawer, Menu } from 'antd';
import {
  AppstoreOutlined,
  CloseOutlined,
  FacebookOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MenuOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from '@ant-design/icons';
import Logo from '../Logo';
import { getItem } from '~/helpers/common';
import { useNavigate } from 'react-router-dom';
import { ICON_TIKTOK } from '~/assets/icons/tiktok';
import { ROUTE_PATH } from '~/routes/route.constant';

export function NavPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setIsVisible(true);
  };
  const onClose = () => {
    setIsVisible(false);
  };

  const items = [
    getItem('Home', ROUTE_PATH.HOME, <HomeOutlined />),
    getItem('Our Services', 'Service', <AppstoreOutlined />, [
      getItem(
        'Facebook Rental Service',
        ROUTE_PATH.FACEBOOK_SERVICE,
        <FacebookOutlined />
      ),
      getItem(
        'Tiktok Rental Service',
        ROUTE_PATH.TIKTOK_SERVICE,
        <ICON_TIKTOK />
      ),
      getItem('Facebook Selling Service', 'fbSelling', <FacebookOutlined />)
    ]),
    getItem('About US', ROUTE_PATH.ABOUT_US, <InfoCircleOutlined />),
    getItem('Buy Accounts', ROUTE_PATH.BUY_ACCOUNTS, <UserOutlined />),
    getItem('Contact US', ROUTE_PATH.CONTACT_US, <PhoneOutlined />),
    getItem('Shopping Cart', ROUTE_PATH.CART, <ShoppingCartOutlined />)
  ];

  const onClick = (e) => {
    switch (e.key) {
      case ROUTE_PATH.HOME:
        navigate(ROUTE_PATH.HOME);
        break;
      case ROUTE_PATH.FACEBOOK_SERVICE:
        navigate(ROUTE_PATH.FACEBOOK_SERVICE);
        break;
      case ROUTE_PATH.TIKTOK_SERVICE:
        navigate(ROUTE_PATH.TIKTOK_SERVICE);
        break;
      case 'fbSelling':
        navigate(ROUTE_PATH.BUY_ACCOUNTS);
        break;
      case ROUTE_PATH.ABOUT_US:
        navigate(ROUTE_PATH.ABOUT_US);
        break;
      case ROUTE_PATH.BUY_ACCOUNTS:
        navigate(ROUTE_PATH.BUY_ACCOUNTS);
        break;
      case ROUTE_PATH.CONTACT_US:
        navigate(ROUTE_PATH.CONTACT_US);
        break;
      case ROUTE_PATH.CART:
        navigate(ROUTE_PATH.CART);
        break;
      default:
        navigate(ROUTE_PATH.HOME);
      // code block
    }
  };
  return (
    <>
      {!isVisible && (
        <MenuOutlined
          style={{ fontSize: 24 }}
          onClick={showDrawer}
          className='nav-icon mr-0'
        />
      )}
      {isVisible && (
        <CloseOutlined
          style={{ fontSize: 24 }}
          onClick={() => {
            onClose();
          }}
        />
      )}
      <Drawer
        className='menu-bar'
        title={<Logo />}
        placement={'left'}
        style={{ width: '16rem' }}
        closable={false}
        onClose={onClose}
        open={isVisible}
      >
        <Menu
          onClick={onClick}
          mode='vertical'
          items={items}
          defaultSelectedKeys={[window.location.pathname]}
        />
      </Drawer>
    </>
  );
}

export default NavPanel;
