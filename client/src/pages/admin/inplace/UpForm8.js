import React, { useState, useEffect } from 'react';
import DownloadLink from "react-download-link";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table, Avatar, Image } from 'antd';
import "../upload.css";
import { createInPlace, getInPlace, removeInPlace } from '../../../functions/inplace';
import { DeleteOutlined, VerifiedOutlined } from '@ant-design/icons';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';

const UpForm2 = () => {
    const { user } = useSelector((state) => ({ ...state }))
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState([]);
    const [ file, setFile] = useState();
    const [ filename, setFilename] = useState('')
    const [ dateFirst, setDateFirst] = useState('');
    const [ numTo, setNumTo] = useState('');
    const [ locate, setLocate ] = useState('');
    const [ dateGen, setDateGen] = useState('');
    const [ from, setFrom] = useState('');
    const [ to, setTo] = useState('');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


    useEffect(() => {
        loadPerson(user.token);
       
    }, [])

   
    const loadPerson = (authtoken) => {
        getInPlace(authtoken)
            .then((res) => {
                setPerson(res.data)
            }).catch((err) => {
                toast.error(err)
                console.log(err)
            })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        
        formData.append('file', file);
        formData.append('data', name)
        formData.append('data', dateFirst)
        formData.append('data', numTo)
        formData.append('data', locate)
        formData.append('data', dateGen)
        formData.append('data', from)
        formData.append('data', to)



        
        createInPlace(formData, user.token)
            .then(res=>{
                loadPerson(user.token);
                setLoading(false)
                toast.success('????????????????????????????????? '+ res.data.name + ' ?????????????????? ')
            }).catch(err=>{
                setLoading(false)
                toast.error(err.response)
            })
    }

    const handleRemove = (id) => {
        if (window.confirm("?????????????????????????????????????????????????????????!")){
            setLoading(true);
            removeInPlace(id, user.token)
                .then(res=>{
                    loadPerson(user.token);
                    setLoading(false)
                    toast.success('?????????????????? '+ res.data.name + ' ?????????????????? ')
                }).catch(err=>{
                    setLoading(false)
                    toast.error(err.response)
                })
        }
    }

    const columns = [

        {
            title: '??????????????????',
            dataIndex: 'dateFirst',
            key: 'dateFirst'
        },
        {
            title: '??????????????????',
            dataIndex: 'numTo',
            key: 'numTo'
        },
        {
            title: '?????????',
            dataIndex: 'locate',
            key: 'locate'
        },
        {
            title: '????????????????????????',
            dataIndex: 'dateGen',
            key: 'dateGen'
        },
        {
            title: '?????????',
            dataIndex: 'from',
            key: 'from'
        },
        {
            title: '?????????',
            dataIndex: 'to',
            key: 'to'
        },
        {
            title: 'Download',
            render: (record) => (
                <DownloadLink className="button-field-download"  filename={record.pic} label="Download" >
                   
                    <AiOutlineVerticalAlignBottom className="button-icon-download"/>          
                    <div className="button-text-download">
                    ???????????????????????????</div>
                </DownloadLink>
            )
        },
        {
            title: '??????????????????',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '????????????',
            render: (record) => (
                <>
                
                    <a href={`http://localhost:5000/uploads/${record.pic}`} target="_blank" >
                    <Image src={`http://localhost:5000/uploads/${record.pic}`} />  
                    </a>
                </>
            )
        },
        {
            title: 'Actions',
            render: (record) => (
                <span className="btn btn-sm fload-right"
                onClick={()=> handleRemove(record._id)}>
                    <DeleteOutlined className="text-danger"/>
                </span>
            )
        }

    ]

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        setPageNumber(1);
      }
    
      function changePage(offSet){
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
      }
    
      function changePageBack(){
        changePage(-1)
      }
    
      function changePageNext(){
        changePage(+1)
      }
    


    return (
        
        <div className="container-fluid">
            
            <div >
                <div className="headfrom">
                ????????????????????????????????????????????????????????????????????????
                </div>
                <div className="previewPDF">
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page height="800" pageNumber={pageNumber} />
                    </Document>
                </div>
                <div className="realfrom">
                    <form onSubmit={onSubmit} className="allform">
                        
                    <div className="file-input">
                            <input
                                type="file"
                                className="file" 
                                onChange={ (e) => setFile(e.target.files[0]) }                                                                
                            />
                         
                            <label className="file-name"
                                htmlFor="customfile"
                            >
                                {filename} 
                            </label>
                        </div>

                

                        <div className="dateinput">
                            <label>??????????????????</label>
                            <input type="date"
                                className="date-input"
                                autoFocus
                                required
                                onChange={(e) => setDateFirst(e.target.value)}
                            />
                        </div>

                        <div className="noinput">
                            <label>??????????????????</label>
                            <input type="number"
                                className="no"
                                autoFocus
                                required
                                onChange={(e) => setNumTo(e.target.value)}
                            />
                        </div>

                        <div className="nofrominput">
                            <label>?????????</label>
                            <input type="text"
                                className="nofrom"
                                autoFocus
                                required
                                onChange={(e) => setLocate(e.target.value)}
                            />
                        </div>
                        <div className="inputdate">
                            <label>????????????????????????</label>
                            <input type="date"
                                className="datedate"
                                autoFocus
                                required
                                onChange={(e) => setDateGen(e.target.value)}
                            />
                        </div>
                    
                        <div className="frominput">
                            <label>?????????</label>
                            <input type="text"
                                className="formbox"
                                autoFocus
                                required
                                onChange={(e) => setFrom(e.target.value)}
                            />
                        </div>

                        <div className="tooinput">
                            <label>?????????</label>
                            <input type="text"
                                className="toobox"
                                autoFocus
                                required
                                onChange={(e) => setTo(e.target.value)}
                            />
                        </div>
                        <div className="nameinput">
                            <label>??????????????????</label>
                            <input type="text"
                                className="namebox"
                                autoFocus
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <button className="btnfrom">???????????????</button>
                    </form>

                </div>
                
            </div>
            
        </div>
        
    )
}

export default UpForm2
