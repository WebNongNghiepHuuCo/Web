import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';

export function Logo({ center }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`flex ${
          center && 'justify-center'
        } cursor-pointer nav-top-link`}
      >
        <div
          title='AmorAgency'
          onClick={() => {
            if (window.location.pathname === ROUTE_PATH?.HOME) {
              window.scrollTo(0, 0);
            } else {
              navigate(ROUTE_PATH.HOME);
            }
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-new-04.png`}
            width={200}
            height={200}
            alt='Image 1'
          />
        </div>
      </div>
    </>
  );
}

export default Logo;
