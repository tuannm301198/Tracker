import { Tabs } from 'antd';
import VehiclesTable from '@/components/Table/VehicleTable';
import EmployeeTable from '@/components/Table/EmployeeTable';

const { TabPane } = Tabs;

const Staff = () => {
    
    return (
        <div style={{margin:'5px'}}>
            <h2 style={{margin:10}}>Staff Management</h2>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Employees" key="1">
                    <EmployeeTable/>
                </TabPane>
                <TabPane tab="Vehicles" key="2">
                    <VehiclesTable/>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Staff;
