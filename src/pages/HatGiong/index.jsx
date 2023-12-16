import { Spin } from 'antd'
import React, { useEffect } from 'react'
import BaseLayout from '~/layouts'
import PageHatGiong from './components/PageHatGiong'
import { useProduct } from '../redux/hooks/useProduct';

export default function HatGiong() {
    const {
        actions,
        data: { isLoading, allproduct }
      } = useProduct();
      useEffect(() => {
        actions?.getAllProduct({ page: 1, perPage: 10 });
      }, []);  
  return (
    <BaseLayout>
      <div className='flex items-center w-full'>
        <div className='max-w-screen-xl mx-auto py-2 px-4 w-full'>
          <Spin spinning={isLoading}>
            {allproduct?.map((data) => (
              <PageHatGiong data={data} />
            ))}
          </Spin>
        </div>
      </div>
    </BaseLayout>
  )
}
