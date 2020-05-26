import VehiclesTable from '@/components/Table/VehicleTable';
import { Col } from 'antd';
import { Badge } from 'antd';

const Vehicles = () => {
    return (
        <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
            <Col span={14} style={{ margin: '10px 5px 5px 10px', boxShadow: '0 3px 6px rgba(0,0,0,0.3)' }}>
                <div style={{ backgroundColor: '#002140', padding: 5 }}>
                    <h2 style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>Vehicles Management</h2>
                </div>
                <div><VehiclesTable /></div>
            </Col>
            <Col span={9} style={{ margin: '10px 10px 5px 5px', boxShadow: '0 3px 6px rgba(0,0,0,0.3)' }}>
                <div style={{ backgroundColor: '#002140', padding: 5 }}>
                    <h2 style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>Tracker status</h2>
                </div>
                <div style={{ padding: 15, borderBottom: '1px solid #d9d9d9' }}>
                    <span style={{ fontWeight: 'bold' }}>Paul (Man truck)</span><br />
                    <span style={{ fontSize: '12px', color: '#c0c0c0' }} >Model: WondeProud VT350</span><br />
                    <span style={{ fontSize: '12px', color: '#c0c0c0' }}>Plan: Unknown</span><br />
                    <span style={{ fontSize: '12px', color: '#c0c0c0' }}>ID: 2559 4139 51</span><br />
                    <Badge dot offset={[5, 0]} status="success"></Badge><span style={{ fontSize: '12px', color: '#c0c0c0' }}>Online</span>
                </div>
                <div style={{ padding: 15 }}>
                    <span style={{ fontWeight: 'bold' }}>Recent Events</span><br />
                    <span style={{ fontSize: '12px', color: '#c0c0c0' }} >
                        Rahul Adenauer: task "Stall Shawarma - 49km MKAD" FAILED!   4 days ago</span><br />
                    <span style={{ fontSize: '12px', color: '#c0c0c0' }}>
                        Rahul Adenauer: task "Oil shop No6" FAILED!   4 days ago</span><br />
                </div>
            </Col>
        </div>

    )
}

export default Vehicles;
