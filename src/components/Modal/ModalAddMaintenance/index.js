import MaintenanceForm from '../../Form/MaintenanceForm/MaintenanceForm';
import { Modal } from 'antd';
const ModalAddMaintenance = props => {
  const { visible, setVisible } = props;

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} title="New Vehicle" onCancel={handleCancel} width={1000}>
      <MaintenanceForm />
    </Modal>
  );
};

export default ModalAddMaintenance;
