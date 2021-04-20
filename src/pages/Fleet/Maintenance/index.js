import React from 'react';
import MaintenanceTable from '../../../components/Table/MaintenanceTable';
import { Row, Col } from 'antd';
const Maintenance = props => {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
      <Col style={{ margin: '10px ', boxShadow: '0 3px 6px rgba(0,0,0,0.3)', width: '100%' }}>
        <div style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
          <h2 style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>Device Management</h2>
        </div>
        <div style={{ width: '100%' }}>
          <MaintenanceTable />
        </div>
      </Col>
    </div>
  );
};

export default Maintenance;
