import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GoIcons from 'react-icons/go';

export const AdminSidebarData =[
    
      {
        title: 'ด้านบริหารและธุรการ(ทั่วไป)',
        path: '/admin/dashboard',
        icon: <GoIcons.GoPrimitiveDot />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        
        /*subNav: [
          {
            title: 'Reports',
            path: '/reports/reports1',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Reports 2',
            path: '/reports/reports2',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Reports 3',
            path: '/reports/reports3',
            icon: <IoIcons.IoIosPaper />
          }
        ]*/
      },
      {
        title: 'ด้านการเงิน',
        path: '/products',
        icon: <GoIcons.GoPrimitiveDot />
      },
      {
        title: 'ด้านพัสดุ',
        path: '/team',
        icon: <GoIcons.GoPrimitiveDot />
      },
      {
        title: 'ด้านวิจัย',
        path: '/messages',
        icon: <GoIcons.GoPrimitiveDot />,
    
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        /*subNav: [
          {
            title: 'Message 1',
            path: '/messages/message1',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Message 2',
            path: '/messages/message2',
            icon: <IoIcons.IoIosPaper />
          }
        ]*/
      },
      {
        title: 'ด้านแผนยุทธศาสตร์',
        path: '/support',
        icon: <GoIcons.GoPrimitiveDot />
      },
      {
        title: 'ด้านทรัพยากรบุคคล',
        path: '/support',
        icon: <GoIcons.GoPrimitiveDot />
      },
      {
        title: 'ด้านการบริการการศึกษา',
        path: '/support',
        icon: <GoIcons.GoPrimitiveDot />
      },
      {
        title: 'ด้านอาคารสถานที่',
        path: '/support',
        icon: <GoIcons.GoPrimitiveDot />
      },
      {
        title: 'สาขาวิชาต่างๆ',
        path: '/support',
        icon: <GoIcons.GoPrimitiveDot />
      },
      {
        title: 'คำสั่ง ประกาศ',
        path: '/support',
        icon: <GoIcons.GoPrimitiveDot />
      },
      {
        title: 'ระเบียบข้อบังคับ',
        path: '/support',
        icon: <GoIcons.GoPrimitiveDot />
      }
];