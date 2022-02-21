import React, { useState } from 'react';
import { Row,
         Form, 
         Input, 
         Button, 
         Checkbox, 
         Col, 
         Card, 
         DatePicker, 
         InputNumber,
         Divider,
         Upload,
         message

} from 'antd';

import { UploadOutlined } from '@ant-design/icons';





import { useSelector } from 'react-redux';









const DocUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    






    const { user } = useSelector((state) => ({ ...state }));
    console.log('user', user);





    
    const onFinish = (values) => {
        
        //const formData = new FormData();
        //formData.append('file', file);
       // formData.append('name', values)
        console.log('Success:',values);

/*        uploadData(formData, user.token)
            .then( res => {
                console.log(res);
            }).catch( err => {
                console.log(err);
            })
*/
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    

    return (

    <>  
        <Row justify="center">
            <Card>

                
                <div className="custom-file mb-4">
                    <input
                        type="file"
                        className="custome-file-input"                   
                    />
                    <label className="custom-file-label"
                        htmlFor="customfile"
                    >
                        {filename}
                    </label>

                    <button className="btn btn-outline-primary"></button>

                </div>





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
                        label="เลขรับ"
                        name="ulInID"
                       
                        rules={[
                            {
                                required: true,
                            },
                            ]}
                    >
                        <Input type="number"/>
                    </Form.Item>

                    <Form.Item
                        label="วันที่"
                        name="ulDate"
                        rules={[
                            {
                                required: true,
                                message: 'กรุณากรอกวันที่!',
                            },
                            ]}
                    >
                        <DatePicker />
                    </Form.Item>


                    <Form.Item
                        label="ที่"
                        name="ulLocate"
                        rules={[
                            {
                                required: true,
                                message: 'ระบุที่',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="ลงวันที่"
                        name="ulDateGen"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="จาก"
                        name="ulFrom"
                        rules={[
                            {
                                required: true,
                                message: "ระบุจาก",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="ถึง"
                        name="ulTo"
                        rules={[
                            {
                                required: true,
                                message: "ระบุถึง",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="เรื่อง"
                        name="ulTitle"
                        rules={[
                            {
                                required: true,
                                message: 'ระบุเรื่อง',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                                        

                    <Form.Item
                        wrapperCol={{
                                offset: 3,
                                span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>

                </Form>

            </Card>
        </Row>
    </>             
        
    );
}

export default DocUpload;

