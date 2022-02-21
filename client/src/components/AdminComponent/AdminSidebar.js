import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AdminSidebarData } from './AdminSidebarData';
import { IconContext } from 'react-icons/lib';
import AdminSubmenu from './AdminSubmenu';
import Button from '@mui/material/Button';
import './AdminSidebar.css';



const Nav = styled.div`
    background: #0;
    height: 88px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`; 

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 88px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
`;

const SidebarNav = styled.nav`
    background-image: linear-gradient(#0192c5, #10457a);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    width: 270px;
    height: 800px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 90px;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};


    z-index: 999;
`;

const SidebarWrap = styled.div`
    width: 100%;
    height: 50vh;
`;




const AdminSidebar = () => {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color : '#fff'}}>
            <Nav>     
                
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>

                {AdminSidebarData.map((item, index) => {
                    return <AdminSubmenu item={item} key={index} />;
                })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
        </>


    );
    
    
    
};

export default AdminSidebar
