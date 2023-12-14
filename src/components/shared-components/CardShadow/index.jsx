import { FacebookOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import { useTranslation } from '~/common/hooks/useTranslation';

export default function CardShadow(props) {
  const { title, price, des, status } = props;
  const { t } = useTranslation();
  return (
    <Card
      title={
        <div className='flex items-center'>
          <FacebookOutlined className='mr-1' /> {t(`service.${title}`)} {status && <> {`(${t(`service.status.${status}`)})`}</>}
        </div>
      }
      className='shadow-md sm:rounded-lg'
    >
      <h3>{price}</h3>
      <div>{des}</div>
    </Card>
  );
}
