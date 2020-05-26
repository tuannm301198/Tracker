import { Form, Input, Button } from 'antd';
import { Link, router } from 'umi';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import firebase from '../../../firebase';

const db = firebase.firestore();

const Register = () => {

  const onFinish = values => {
    const { username, email, password } = values;
    db.collection('manager').add({
      avatar: "",
      company: "AgileTech",
      name: username,
      email,
      password,
      phone: "0123456789",
      user_id: "43216"
    }).then(ref => {
      if(ref.id) {
        router.push('/auth/login');
      }
    });
  };

  return (
    <div style={{ maxWidth: 400, margin:'0 auto', paddingTop: '150px'}}>
      <div style={{ textAlign: 'center', margin: '20px 0', fontWeight: 'bold' }}>SIGN UP</div>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input placeholder="Username" prefix={<UserOutlined />}/>
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input  placeholder="Email" prefix={<MailOutlined />}/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div style={{textAlign: 'center'}}>Already have an account? <Link to="/auth/login">Login</Link></div>
    </div>
  );
};

export default Register;
