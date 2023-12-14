import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  MailOutlined,
  WhatsAppOutlined
} from '@ant-design/icons';
import { openInNewTab } from '~/helpers/common';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const BaseLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <Header />
      <>{children}</>

      <div className='fixed bottom-[15rem] z-[99999]'>
        <div className='flex'>
          <div
            className='relative cursor-pointer'
            onClick={() => {
              openInNewTab('#');
            }}
          >
            <div className='circle-fill fill-tele'></div>
            <div className='img-circle !bg-[#1d4ed8] flex items-center justify-center'>
              <svg
                fill='#fff'
                className='mx-auto'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z'></path>
              </svg>
            </div>
          </div>

          <div
            className='relative cursor-pointer	top-[70px]'
            onClick={() => {
              navigate(ROUTE_PATH.CONTACT_US);
            }}
          >
            <div className='circle-fill fill-googlle'></div>
            <div className='img-circle !bg-[#34A853]'>
              <WhatsAppOutlined
                style={{ color: '#fff', fontSize: 20 }}
                className='!flex !items-center'
              />
            </div>
          </div>

          <div
            className='relative cursor-pointer	top-[140px]'
            onClick={() => {
              navigate(ROUTE_PATH.CONTACT_US);
            }}
          >
            <div className='circle-fill fill-mail'></div>
            <div className='img-circle !bg-[#FBBC05]'>
              <MailOutlined
                style={{ color: '#fff', fontSize: 20 }}
                className='!flex !items-center'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
