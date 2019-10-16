import VehicleForm from '../VehicleForm/VehicleForm';
import {  Modal } from 'antd';

const ModalAddVehicle = (props) => {
    const { visible, setVisible } = props

    const handleCancel = () => {
        setVisible(false);
    }


    return (
        <Modal
            visible={visible}
            title="New Vehicle"
            onCancel={handleCancel}
            footer={null}
            width={1000}
        >
           <VehicleForm/>
        </Modal>
    )
}

export default ModalAddVehicle;