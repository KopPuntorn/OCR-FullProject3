import React, { useState, useEffect } from 'react';
import DownloadLink from "react-download-link";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table, Avatar, Image } from 'antd';
import "./upload.css";
import { createOutPerson, getOutPerson, removeOutPerson } from '../../functions/outperson';
import { ocrBeforeUpload } from '../../functions/ocr';
import { DeleteOutlined, VerifiedOutlined } from '@ant-design/icons';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';




const AdminDashboard = () => {
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
        getOutPerson(authtoken)
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
        formData.append('data', to);


        console.log({dateFirst});



        
        createOutPerson(formData, user.token)
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
            removeOutPerson(id, user.token)
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

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        setPageNumber(1);
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
                                defaultValue={dateFirst}
                            />
                        </div>

                        <div className="noinput">
                            <label>??????????????????</label>
                            <input type="number"
                                className="no"
                                autoFocus
                                required
                                onChange={(e) => setNumTo(e.target.value)}
                                defaultValue={numTo}
                            />
                        </div>

                        <div className="nofrominput">
                            <label>?????????</label>
                            <input type="text"
                                className="nofrom"
                                autoFocus
                                required
                                onChange={(e) => setLocate(e.target.value)}
                                defaultValue={locate}
                            />
                        </div>


                        <div className="inputdate">
                            <label>????????????????????????</label>
                            <input type="date"
                                className="datedate"
                                autoFocus
                                required
                                onChange={(e) => setDateGen(e.target.value)}
                                defaultValue={dateGen}
                            />
                        </div>
                    
                        <div className="frominput">
                            <label>?????????</label>
                            <input type="text"
                                className="formbox"
                                autoFocus
                                required
                                onChange={(e) => setFrom(e.target.value)}
                                defaultValue={from}
                            />
                        </div>

                        <div className="tooinput">
                            <label>?????????</label>
                            <input type="text"
                                className="toobox"
                                autoFocus
                                required
                                onChange={(e) => setTo(e.target.value)}
                                defaultValue={to}
                            />
                        </div>
                        <div className="nameinput">
                            <label>??????????????????</label>
                            <input type="text"
                                className="namebox"
                                autoFocus
                                required
                                onChange={(e) => setName(e.target.value)}
                                defaultValue={name}
                            />
                        </div>

                        <button className="btnfrom">???????????????</button>
                    </form>

                </div>
                
            </div>
            
        </div>
        
    )
}

export default AdminDashboard
