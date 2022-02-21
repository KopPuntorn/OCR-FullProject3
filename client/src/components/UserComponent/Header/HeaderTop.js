import React from 'react'
import { Button } from 'antd'
import './headertop.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


function HeaderTop() {
    const { user } = useSelector((state) =>  ({ ...state }))
    const dispatch = useDispatch();
    const history = useHistory();
    

    const logout = () => {
        dispatch({
          type: 'LOGOUT',
          payload: null
        })
        history.push('/')
        toast.success('Logout Success')
    }


    return (
        <div >
            <div className ="Header1">
                    <div> 
                        <img src={require('../Img/CS.jpg').default} alt="CS image" className="Logo" />
                    </div>
                    <div className ="HeadText">
                         ระบบการสืบค้นข้อมูลเอกสารอัตโนมัติ 
                    </div>
                    {user && (
                        <>
                            <div className ="StatusLoginText">{user.name}</div>
                            <a className="LogoutButton" onClick={logout}>ออกจากระบบ</a>
                        </>
                        
                    )}
                </div>
        </div>
    )
}

export default HeaderTop
