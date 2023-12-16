import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageNotFound from '~/pages/PageNotFound';
import { ROUTE_PATH } from './route.constant';
import { IntlProvider } from 'react-intl';
import { useTheme } from '~/common/theme/redux/hooks/useTheme';
import AppLocale from '~/common/langs';
import { ConfigProvider } from 'antd';

import HomePage from '~/pages/HomePage';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import News from '~/pages/News';
import NewsDetail from '~/pages/News/NewsDetail';
import About from '~/pages/About';
import HatGiong from '~/pages/HatGiong';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <PageNotFound />,
    children: [
      {
        children: [
          {
            path: ROUTE_PATH.HOME,
            element: (
              <Suspense fallback={null}>
                <HomePage />
              </Suspense>
            )
          },

          {
            path: ROUTE_PATH.LOGIN,
            element: (
              <Suspense fallback={null}>
                <Login />
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.REGISTER,
            element: (
              <Suspense fallback={null}>
                <Register />
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.NEWS,
            element: (
              <Suspense fallback={null}>
                <News />
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.NEWSDETAIL,
            element: (
              <Suspense fallback={null}>
                <NewsDetail />
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.ABOUT_US,
            element: (
              <Suspense fallback={null}>
                <About/>
              </Suspense>
            )
          },
          {
            path: ROUTE_PATH.HATGIONG,
            element: (
              <Suspense fallback={null}>
                <HatGiong />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
]);

export const Routes = () => {
  const {
    data: { locale, direction }
  } = useTheme();

  const currentAppLocale = AppLocale[locale];
  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ConfigProvider
        locale={currentAppLocale.antd}
        direction={direction}
        autoInsertSpaceInButton={false}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </IntlProvider>
  );
};
