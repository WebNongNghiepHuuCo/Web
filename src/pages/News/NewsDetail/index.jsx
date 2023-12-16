import React, { useEffect } from 'react';
import BaseLayout from '~/layouts';
import CardNewsDetail from './components/CardNewsDetail';
import { Spin } from 'antd';
import { useNews } from '~/pages/redux/hooks/useNews';

export default function NewsDetail() {
  const {
    actions,
    data: { isLoading, newDetail }
  } = useNews();
  const currentURL = window.location.href;

  useEffect(() => {
    actions?.getDetailNews(currentURL?.split('/')[4]);
  }, []);
  return (
    <BaseLayout>
      <div className='flex items-center w-full'>
        <div className='max-w-screen-xl mx-auto py-2 px-4 w-full'>
          <Spin spinning={isLoading}>
            <CardNewsDetail data={newDetail} />
          </Spin>
        </div>
      </div>
    </BaseLayout>
  );
}
