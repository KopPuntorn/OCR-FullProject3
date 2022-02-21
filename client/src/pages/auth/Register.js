import React from 'react'
import { toast } from 'react-toastify';
import { Form, 
        Input, 
        Button, 
        Row,
        Col,
        Card
} from 'antd';

//functions
import { registerHandler } from '../../functions/auth';

const Register = ({history}) => {
    const onFinish = (values) => {
        console.log('Success:', values);
        if (values.password !== values.password2 ) {
            return alert('not match')
        } else {
            console.log('Success', values);
            registerHandler(values)
            .then(res => {
                toast.success('Register Success')
                console.log(res)
                history.push('/login')
            }).catch(err => {
                toast.error('User นี้มีแล้วในระบบ')
                console.log(err.response.data)
            })
        }
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Row justify="center">
            <Col>
                <Card>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                    <Form.Item
                        label="Username"
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="ConfirmPassword"
                        name="password2"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    
                    

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default Register
