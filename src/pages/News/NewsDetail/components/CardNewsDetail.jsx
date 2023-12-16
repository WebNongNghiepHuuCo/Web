import { Image } from 'antd';
import React from 'react'
import { IMAGE_FALLBACK } from '~/common/constants';

export default function CardNewsDetail(props) {
    const { data } = props;
  return (
    <div>
        <div className='text-[18px] font-bold'>{data?.name}</div>
        <Image
            style={{ borderRadius: 10 }}
            className='w-[300px] h-[200px]'
            // src="./images/news/may_phunthuoc_1702674912257_415495140.jpg"
            src={`${process.env.REACT_APP_BASE_URL}${data?.img}`}
            fallback={IMAGE_FALLBACK}
            alt=''
        />
        <div className='text-[16px]'>{data?.alias}</div>
        <div className='text-[16px]'>{data?.fulltext}</div>
    </div>
  )
}
