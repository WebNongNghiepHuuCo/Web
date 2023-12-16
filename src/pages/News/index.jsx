import React, { useEffect } from 'react';
import BaseLayout from '~/layouts';
import CardNews from './components/CardNews';
import { useNews } from '../redux/hooks/useNews';
import { Spin, Image  } from 'antd';
export default function News() {
  const {
    actions,
    data: { isLoading, allnews }
  } = useNews();
  useEffect(() => {
    actions?.getAllNews({ page: 1, perPage: 10 });
  }, []);
  return (
    <BaseLayout>
      <div></div>
      <div className='flex items-center w-full'>
        <div className='max-w-screen-xl mx-auto py-2 px-4 w-full'>
          <Spin spinning={isLoading}>
            {allnews?.map((data) => (
              <CardNews data={data} />
              // test={1}
            ))}
          </Spin>
        </div>
      </div>
    </BaseLayout>
  );
}
