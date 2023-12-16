import { Image } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGE_FALLBACK } from '~/common/constants';
import { ROUTE_PATH } from '~/routes/route.constant';

export default function CardNews(props) {
  const { data} = props;
  const navigate = useNavigate(); // Get the navigate function

  const handleCardClick = () => {
    navigate(`${ROUTE_PATH.NEWS}/${data?._id}`);
  };
  return (
    <div className='flex mb-3'>
      <Image
        style={{ borderRadius: 10 }}
        className='w-[300px] h-[200px]'
        src={`${data?.img}`}
        fallback={IMAGE_FALLBACK}
        alt=''
      />
      <div className='ml-[18px] '>
        <div
          className='text-[18px] font-bold text-blue-500'
          onClick={handleCardClick}
        >
          {data?.name}
        </div>
        <div className='text-[16px]'>{data?.alias}</div>
      </div>
    </div>
  );
}
