import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export default function Confirm(
  content,
  onConfirm,
  t,
  title = null,
  btnOk = null
) {
  Modal.confirm({
    title: title ?? t('common.titleConfirmDeleteModal'),
    icon: <ExclamationCircleOutlined />,
    content,
    okText: btnOk ?? t('common.btn.delete'),
    cancelText: t('common.btn.cancel'),
    onOk: onConfirm,
    keyboard: true,
    maskClosable: true
  });
}
