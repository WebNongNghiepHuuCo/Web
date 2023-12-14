import { Row } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1500);
  }, []);

  return (
    <Row align={'middle'} justify='center'>
      <h1 className={styles.title}>Coming Soon!</h1>
    </Row>
  );
};

export default PageNotFound;
