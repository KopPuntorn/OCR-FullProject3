import React, { useState, useEffect } from 'react';
import SearchBox from '../../../components/UserComponent/SearchBox/SearchBox';
import { ConfigProvider, DatePicker, Button, Table, Radio, Image } from 'antd';
import locale from 'antd/lib/locale/th_TH';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import DownloadLink from "react-download-link";
import { getInRul } from '../../../functions/inrul';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PlusOutlined } from '@ant-design/icons';
import '../upload1.css';
import { Link } from 'react-router-dom';

const Inmoney = () => {
    const [searchText, setSearchText] = useState('');
    const [searchNo, setSearchNo] = useState('');
    const [searchFrom, setSearchFrom] = useState('');
    const { RangePicker } = DatePicker;
    const [hackValue, setHackValue] = useState();
    const [dates, setDates] = useState([]);
    const [value, setValue] = useState();
    const [person, setPerson] = useState([]);
    const { user } = useSelector((state) => ({ ...state }))
    

    useEffect(() => {
        loadPerson(user.token);
      }, [])
    
      const loadPerson = (authtoken) => {
        getInRul(authtoken)
            .then((res) => {
                setPerson(res.data)
                console.log(res.data)
            }).catch((err) => {
                toast.error(err)
                console.log(err)
            })
    }



    const disabledDate = current => {
        if (!dates || dates.length === 0) {
          return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
        return tooEarly || tooLate;
      };


      const onOpenChange = open => {
        if (open) {
          setHackValue([]);
          setDates([]);
        } else {
          setHackValue(undefined);
        }
      };
      const columns = [

        {
            title: 'วันที่',
            dataIndex: 'dateFirst',
            key: 'dateFirst',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: 'เลขรับ',
            dataIndex: 'numTo',
            key: 'numTo',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: 'ที่',
            dataIndex: 'locate',
            key: 'locate',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: 'ลงวันที่',
            dataIndex: 'dateGen',
            key: 'dateGen',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: 'จาก',
            dataIndex: 'from',
            key: 'from',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: 'ถึง',
            dataIndex: 'to',
            key: 'to',
            sorter: (a, b) => a.name.length - b.name.length
        },{
            title: 'เรื่อง',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: 'ดาวน์โหลด',
            render: (record) => (
                <DownloadLink className="button-field-download"  filename={record.pic} label="ดาวน์โหลด" >
                   
                    <AiOutlineVerticalAlignBottom className="button-icon-download"/>          
                    <div className="button-text-download">
                    ดาวน์โหลด</div>
                </DownloadLink>
            )
        },
        {
            title: 'รายละเอียด',
            render: (record) => (
                <>
                
                    <a href={`http://localhost:5000/uploads/${record.pic}`} target="_blank" >
                    รายละเอียด 
                    </a>
                </>
            )
        }
    ]

    const filteredData = person.filter((CardData) => CardData.name.includes(searchText)).filter((CardData) => CardData.locate.includes(searchNo)).filter((CardData) => CardData.from.includes(searchFrom))
      

  return <div>
      <div className='SearchBar'><div className='headsearch'>ค้นหา</div>
        <div className="search11"> 
        <ConfigProvider locale={locale}>วันที่
            <RangePicker
                value={hackValue || value}
                disabledDate={disabledDate}
                onCalendarChange={val => setDates(val)}
                onChange={val => setValue(val)}
                onOpenChange={onOpenChange}
                format= 'DD/MM/YYYY'
            /></ConfigProvider></div>
        <div className="search22">ใส่คำค้นหา <SearchBox value={searchText} onValueChange={setSearchText} placeholder="คำค้นหา"/></div>
        <div className="search33">ที่ <SearchBox value={searchNo} onValueChange={setSearchNo} placeholder="ที่"/></div>
        <div className="search44">จาก <SearchBox value={searchFrom} onValueChange={setSearchFrom} placeholder="ระบุจาก"/>
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">รับเข้า</Radio.Button>
            <Radio.Button value="b">ส่งออก</Radio.Button>
        </Radio.Group></div>
        </div>
      <div><div className="search55"><div className="headbtn">รายการรับเข้าเอกสาร</div><Link to="/admin/upload11/upfrom" className="outbtn">
      <button className="btnadd">+ เพิ่มรับเข้าเอกสาร</button></Link></div><div><Table columns={columns} dataSource={filteredData} rowKey="_id" className="upload-table" defaultPageSize= "2"/></div></div>
        
      </div>;
};

export default Inmoney

