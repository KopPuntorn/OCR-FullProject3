import React, { useState, useEffect } from 'react';
import SearchBox from '../../../components/UserComponent/SearchBox/SearchBox';
import { ConfigProvider, DatePicker, Button, Table, Radio, Image } from 'antd';
import locale from 'antd/lib/locale/th_TH';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import DownloadLink from "react-download-link";
import { getInPlace } from '../../../functions/inplace';
import { getOutPlace } from '../../../functions/outplace';
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
    const [person1, setPerson1] = useState([]);
    const [game, setGame] = useState('card')

    useEffect(() => {
        loadPerson(user.token);
      }, [])
    
      const loadPerson = (authtoken) => {
        getInPlace(authtoken)
            .then((res) => {
                setPerson(res.data)
                console.log(res.data)
            }).catch((err) => {
                toast.error(err)
                console.log(err)
            })
    }

    const handleClick = (gameState) => {
        setGame(gameState)
      }

      useEffect(() => {
        loadPerson1(user.token);
      }, [])
      const loadPerson1 = (authtoken) => {
        getOutPlace(authtoken)
            .then((res) => {
                setPerson1(res.data)
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
            title: '??????????????????',
            dataIndex: 'dateFirst',
            key: 'dateFirst',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: '??????????????????',
            dataIndex: 'numTo',
            key: 'numTo',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: '?????????',
            dataIndex: 'locate',
            key: 'locate',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: '????????????????????????',
            dataIndex: 'dateGen',
            key: 'dateGen',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: '?????????',
            dataIndex: 'from',
            key: 'from',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: '?????????',
            dataIndex: 'to',
            key: 'to',
            sorter: (a, b) => a.name.length - b.name.length
        },{
            title: '??????????????????',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: '???????????????????????????',
            render: (record) => (
                <DownloadLink className="button-field-download"  filename={record.pic} label="???????????????????????????" >
                   
                    <AiOutlineVerticalAlignBottom className="button-icon-download"/>          
                    <div className="button-text-download">
                    ???????????????????????????</div>
                </DownloadLink>
            )
        },
        {
            title: '??????????????????????????????',
            render: (record) => (
                <>
                
                    <a href={`http://localhost:5000/uploads/${record.pic}`} target="_blank" >
                    ?????????????????????????????? 
                    </a>
                </>
            )
        }
    ]

    const filteredData = person.filter((CardData) => CardData.name.includes(searchText)).filter((CardData) => CardData.locate.includes(searchNo)).filter((CardData) => CardData.from.includes(searchFrom))
    const filteredData1 = person1.filter((CardData) => CardData.name.includes(searchText)).filter((CardData) => CardData.locate.includes(searchNo)).filter((CardData) => CardData.from.includes(searchFrom))   

  return <div>
      <div className='SearchBar'><div className='headsearch'>???????????????</div>
        <div className="search11"> 
        <ConfigProvider locale={locale}>??????????????????
            <RangePicker
                value={hackValue || value}
                disabledDate={disabledDate}
                onCalendarChange={val => setDates(val)}
                onChange={val => setValue(val)}
                onOpenChange={onOpenChange}
                format= 'DD/MM/YYYY'
            /></ConfigProvider></div>
        <div className="search22">?????????????????????????????? <SearchBox value={searchText} onValueChange={setSearchText} placeholder="?????????????????????"/></div>
        <div className="search33">????????? <SearchBox value={searchNo} onValueChange={setSearchNo} placeholder="?????????"/></div>
        <div className="search44">????????? <SearchBox value={searchFrom} onValueChange={setSearchFrom} placeholder="?????????????????????"/>
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a" onClick={ () => handleClick('card')}>?????????????????????</Radio.Button>
            <Radio.Button value="b" onClick={ () => handleClick('playing')}>??????????????????</Radio.Button>
        </Radio.Group></div>
        </div>
        {(() => {
        switch (game) {
          case 'card':
            return <div><div className="search55"><div className="headbtn">?????????????????????????????????????????????????????????</div><Link to="/admin/upload8/upfrom" className="outbtn">
            <button className="btnadd">+ ??????????????????????????????????????????????????????</button></Link></div><div><Table columns={columns} dataSource={filteredData} rowKey="_id" className="upload-table" defaultPageSize= "2"/></div></div>
          case 'playing':
            return <div><div className="search55"><div className="headbtn">??????????????????????????????????????????????????????</div><Link to="/admin/upload8/upfrom2" className="outbtn">
            <button className="btnadd">+ ???????????????????????????????????????????????????</button></Link></div><div><Table columns={columns} dataSource={filteredData1} rowKey="_id" className="upload-table" defaultPageSize= "2"/></div></div>
          default:
            return null
        }
      })()}
        
      </div>;
};

export default Inmoney

