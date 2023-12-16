import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function HomeBanner() {
  const listImages = [
    './images/home/CAM-KẾT-BÁN-HÀNG.png',
    './images/home/PHÂN-BÓN-LÁ-2.png',
    './images/home/PHỤC-HỒI-CẢI-TẠO-DẤT.png',
    './images/home/Thiết-kế-không-tên-1.png',
  ];

  return (
    <div className='py-2 px-4 mx-auto max-w-screen-xl rounded-md w-full'>
      <Splide
        aria-label='My Favorite Images'
        options={{
          width: '100%',
          type: 'loop',
          arrows: true,
          pagination: true,
          lazyLoad: true,
          perPage: 1,
          gap: 10,
          autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
          }
        }}
        extensions={{ AutoScroll }}
      >
        {listImages?.map((data) => (
          <SplideSlide>
            <img
              src={data}
              alt='Image 1'
              className='w-full'
              style={{ maxHeight: 500, borderRadius: 12 }}
            />
          </SplideSlide>
        ))}
      </Splide>
      
    </div>
  );
}
