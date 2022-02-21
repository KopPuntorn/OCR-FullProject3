import React from 'react';
import "./login.css";
import { useDispatch } from 'react-redux';
import { Form, 
    Input, 
    Button, 
    Row,
    Col,
    Card
} from 'antd';

import { loginHandler } from '../../functions/auth';

const Login = ({ history }) => {
    const dispatch = useDispatch();

    const roleBaseRedirect = (role) => {
        if(role === 'admin') {
            history.push('/home-admin')
        } else {
            history.push('/home-user')
        }
    }


    const onFinish = (values) => {
            
            console.log('Success', values);
            loginHandler(values)
            .then(res => {
                dispatch({
                    type:'LOGGED_IN_USER',
                    payload:{
                        token: res.data.token,
                        username: res.data.payload.user.name,
                        role: res.data.payload.user.role
                    }
                })
                localStorage.setItem('token',res.data.token)
                roleBaseRedirect(res.data.payload.user.role)
                console.log(res.data.payload.user.role)
                //alert(res.data)
                //history.push('/login')
            }).catch(err => {
                console.log(err.response.data)
                alert(err.response.data)
            })
          
        };
    
        
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="container-center-horizontal">
                <div className="desktop-14 screen">
                    <div className="overlap-group2" >
                        <h1 className="text-6 db-heavent-bold-midnight-blue-36px">
                        ระบบสืบค้นเอกสารอัติโนมัติ สาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์
                        </h1>
                        <div className="group-3543 border-1px-bon-jour">
                            <div className="overlap-group">
                                <div className="text-7">
                                สำหรับสืบค้นข้อมูลเอกสาร
                                </div>
                            </div>
                            <div className="text-8">
                            สำหรับรับเข้า-ส่งออกข้อมูลเอกสาร
                            </div>
                        </div>
                        <div className="form-login db-heavent-regular-normal-black-20px border-1px-bon-jour">
                            <div className="frame-36255">
                                <img
                                    className="bxbxs-lock"
                                />
                                <div className="text-login db-heavent-bold-midnight-blue-36px">
                                เข้าสู่ระบบ
                                </div>
                            </div>
                            <div className="group-3517">
                                <div className="text-1">
                                ชื่อผู้ใช้
                                </div>
                                <div className="overlap-group-1 border-1px-bon-jour">
                                    <div className="pri001">
                                    Pri001
                                    </div>
                                </div>
                            </div>
                            <div className="group-3518">
                                <div className="text-2">
                                รหัสผ่าน
                                </div>
                                <div className="overlap-group1 border-1px-bon-jour">
                                    <div className="text-3">
                                    ********
                                    </div>
                                    <img
                                        className="fa-solid fa-eye-slash"
                                        src="fa-solid-eye-slash.svg"
                                    />
                                </div>
                            </div>
                            <div className="frame-36217">
                                <div className="text-4">
                                เข้าสู่ระบบ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login
