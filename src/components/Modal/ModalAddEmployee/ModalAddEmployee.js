import EmployeeForm from '../../Form/EmployeeForm/EmployeeForm';
import {  Modal } from 'antd';

const ModalAddEmployee = (props) => {
    const { visible, setVisible } = props

    const handleCancel = () => {
        setVisible(false);
    }


    return (
        <Modal
            visible={visible}
            title="New Employee"
            onCancel={handleCancel}
            footer={null}
        >
           <EmployeeForm />
        </Modal>
    )
}

export default ModalAddEmployee;