import { useState } from 'react';
import { Layout, Menu, Icon, DatePicker, Button, Select, Modal, Collapse, Form, Input } from 'antd';
import Link from 'umi/link';
import styles from './index.css';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;
const { Panel } = Collapse;
const { RangePicker } = DatePicker;

const BasicLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  // const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  };

  const prefixSelector = (
      <Select defaultValue="86" style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
  )
  

  const showModal = () => {
    console.log(1);
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  }

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };


  return (
    <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
      <Header style={{ padding: 0, backgroundColor: '#000' }} >
        <a href="#" style={{ marginLeft: '25px', float: 'left' }}>
          <div style={{ width: '140px', textAlign: 'center' }}><h1 style={{ color: '#fff' }}>Track360</h1></div>
        </a>
        <div className={styles.topheader} >
          <ul className={styles.leftheader}>
            <li>
              <Button ghost style={{ borderRadius: 0 }}>
                <Link to="/">
                  <Icon type="google-plus" style={{ marginRight: 2 }} />
                  <span>Map</span>
                </Link>
              </Button>
              <Button style={{ borderRadius: 0 }}>
                <Link to="/report/">
                  <Icon type="unordered-list" style={{ marginRight: 2 }} />
                  <span>List</span>
                </Link>
              </Button>
            </li>
            <li>
              <DatePicker placeholder="Today" style={{ width: 120 }} />
            </li>
            <li>
              <Select defaultValue="allteam" style={{ width: 120 }} >
                <Option value="allteam" > All Team </Option>
                <Option value="lucy" > Lucy </Option>
                <Option value="Yiminghe" > yiminghe </Option>
              </Select >
            </li>
          </ul>
          <ul className={styles.rightheader}>
            <li>
              <Button ghost onClick={showModal}>
                Create Task
              </Button>
            </li>
            <li>
              <a href="#" style={{ color: '#fff', fontSize: '25px' }}>
                <Icon type="bell" theme="filled" />
              </a>
            </li>
          </ul>
        </div>
      </Header>
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item style={{ marginTop: '0' }} key="1">
              <Link to="/">
                <Icon type="pie-chart" />
                <span>Tracking</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/report/">
                <Icon type="desktop" />
                <span>Report</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Field service</span>
                </span>
              }
            >
              <Menu.Item key="3"><Link to="/task/">Task</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/templates/">Templates</Link></Menu.Item>
              <Menu.Item key="5">Form</Menu.Item>
              <Menu.Item key="6"><Link to="/staff/">Staff</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Fleet management</span>
                </span>
              }
            >
              <Menu.Item key="7">Vehicles</Menu.Item>
              <Menu.Item key="8">Maintenance</Menu.Item>
              <Menu.Item key="9">Drives</Menu.Item>
            </SubMenu>
            <Menu.Item key="10">
              <Icon type="file" />
              <span>Devices and Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ margin: '0', background: '#fff', minHeight: 'calc(100vh - 64px)' }}>
          <Modal
            visible={visible}
            title="New Task"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="assign">
                <span>Assign Agents</span>
                <Icon type="caret-up" />
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Create Task
              </Button>,
            ]}
          >
            <Select defaultValue="fieldworkforce" style={{ width: 240, marginBottom: 20 }} >
              <Option value="pickup&delivery" > Pickup & Delivery </Option>
              <Option value="appointment" > Appointment </Option>
              <Option value="fieldworkforce" > Field Workforce </Option>
            </Select>
            <Collapse>
              <Panel header="Field Workforce" key="1">
                <Form {...formItemLayout}>
                  <Form.Item label="Name">
                    <Input placeholder="Name" />
                  </Form.Item>
                  <Form.Item label="Phone">
                    <Input addonBefore={prefixSelector} 
                                      placeholder="Phone" />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item label="Order ID">
                    <Input placeholder="Order ID" />
                  </Form.Item>
                  <Form.Item label="Address">
                    <Input placeholder="Address" />
                  </Form.Item>
                  <Form.Item label="RangeTime">
                    <RangePicker />
                  </Form.Item>
                  <Form.Item label="Desciption">
                    <Input placeholder="Desciption" />
                  </Form.Item>
                </Form>
              </Panel>
            </Collapse>
          </Modal>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
// class BasicLayout extends React.Component {
//   state = {
//     collapsed: false,
//   };
//   onCollapse = collapsed => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };


//   onChangeDate = (date, dateString) => {
//     console.log(date, dateString);
//   }

//   componentDidMount() {
//     fetch('https://5d985c8661c84c00147d6edb.mockapi.io/api/task').then(res => res.json()).then(data => console.log(data));
//   }

//   render() {
//     return (
//       <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
//         <Header style={{ padding: 0, backgroundColor: '#000' }} >
//           <a href="#" style={{ marginLeft: '25px', float: 'left' }}>
//             <div style={{ width: '140px', textAlign: 'center' }}><h1 style={{ color: '#fff' }}>Track360</h1></div>
//           </a>
//           <div className={styles.topheader} >
//             <ul className={styles.leftheader}>
//               <li>
//                 <Button ghost style={{ borderRadius: 0 }}>
//                   <Link to="/">
//                     <Icon type="google-plus" style={{ marginRight: 2 }} />
//                     <span>Map</span>
//                   </Link>
//                 </Button>
//                 <Button style={{ borderRadius: 0 }}>
//                   <Link to="/report/">
//                     <Icon type="unordered-list" style={{ marginRight: 2 }} />
//                     <span>List</span>
//                   </Link>
//                 </Button>
//               </li>
//               <li>
//                 <DatePicker onChange={this.onChangeDate} placeholder="Today" style={{ width: 120 }} />
//               </li>
//               <li>
//                 <Select defaultValue="allteam" style={{ width: 120 }} >
//                   <Option value="allteam" > All Team </Option>
//                   <Option value="lucy" > Lucy </Option>
//                   <Option value="Yiminghe" > yiminghe </Option>
//                 </Select >
//               </li>
//             </ul>
//             <ul className={styles.rightheader}>
//               <li>
//                 <Button ghost>
//                   Create Task
//                                 </Button>
//               </li>
//               <li>
//                 <a href="#" style={{ color: '#fff', fontSize: '25px' }}>
//                   <Icon type="bell" theme="filled" />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </Header>
//         <Layout>
//           <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
//             <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//               <Menu.Item style={{ marginTop: '0' }} key="1">
//                 <Link to="/">
//                   <Icon type="pie-chart" />
//                   <span>Tracking</span>
//                 </Link>
//               </Menu.Item>
//               <Menu.Item key="2">
//                 <Link to="/report/">
//                   <Icon type="desktop" />
//                   <span>Report</span>
//                 </Link>
//               </Menu.Item>
//               <SubMenu
//                 key="sub1"
//                 title={
//                   <span>
//                     <Icon type="user" />
//                     <span>Field service</span>
//                   </span>
//                 }
//               >
//                 <Menu.Item key="3"><Link to="/task/">Task</Link></Menu.Item>
//                 <Menu.Item key="4"><Link to="/templates/">Templates</Link></Menu.Item>
//                 <Menu.Item key="5">Form</Menu.Item>
//               </SubMenu>
//               <SubMenu
//                 key="sub2"
//                 title={
//                   <span>
//                     <Icon type="team" />
//                     <span>Fleet management</span>
//                   </span>
//                 }
//               >
//                 <Menu.Item key="6">Vehicles</Menu.Item>
//                 <Menu.Item key="7">Maintenance</Menu.Item>
//                 <Menu.Item key="8">Drives</Menu.Item>
//               </SubMenu>
//               <Menu.Item key="9">
//                 <Icon type="file" />
//                 <span>Devices and Settings</span>
//               </Menu.Item>
//             </Menu>
//           </Sider>
//           <Content style={{ margin: '0' }}>
//             <div style={{ background: '#fff', minHeight: 'calc(100vh - 64px)' }}>{this.props.children}</div>
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
// }

export default BasicLayout;