import React, { useState } from 'react';
import { Button, Typography, Input } from 'antd';
import ModalOperatorCreateTask from '../../components/Modal/ModalOperatorCreateTask/ModalOperatorCreateTask';
import styles from './index.less';
const Operator = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const checkModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Button onClick={checkModal}>Add</Button>
      <ModalOperatorCreateTask
        className={styles.modal}
        classNameSider={styles.modalSider}
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalVisible={isModalVisible}
      />
    </div>
  );
};

export default Operator;
