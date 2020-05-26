import { useEffect } from 'react';
import { Link, router } from 'umi';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const Login = ({ dispatch, loginData }) => {
  const onFinish = values => {
    dispatch({
      type: 'auth/login',
      payload: values,
    })
  };

  useEffect(() => {
    const user = localStorage.getItem('user')
    if(user && loginData) {
      router.push('/')
    }
  }, [loginData])

  return (
    <div style={{ maxWidth: 400, margin:'0 auto', paddingTop: '150px'}}>
      <div style={{ textAlign: 'center', margin: '20px 0', fontWeight: 'bold' }}>LOGIN</div>
      <Form
        onFinish={onFinish}
      >
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
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      <div style={{textAlign: 'center'}}>Don't have an account? <Link to="/auth/register">Sign Up</Link></div>
    </div>
  );
};

export default connect(state => ({
  loginData: state.auth.loginData,
}))(Login);
