import React, { useEffect, useState } from 'react';
import './CardPost.css';
import { useSelector } from 'react-redux';
import { getPerson } from '../../../functions/person';
import { toast } from 'react-toastify';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import DownloadLink from "react-download-link";
import { Table, Avatar, Image } from 'antd';

function CardPost(props) {
    const { CardData, onBgClick }= props;
    const [person, setPerson] = useState([]);
    const { user } = useSelector((state) => ({ ...state }))
    useEffect(() => {
      loadPerson(user.token);
    }, [])
    const loadPerson = (authtoken) => {
      getPerson(authtoken)
          .then((res) => {
              setPerson(res.data)
              console.log(res.data)
          }).catch((err) => {
              toast.error(err)
              console.log(err)
          })
  }
  
    return (
        <div className="card-post">
            <div className="card-post-bg" onClick={onBgClick}/>
            <div className="card-post-content">
                <img  src={require('../Img/CardImg/Card1.JPG').default} alt="card" />
                <div className="card-post-detail">
                <div className="card-post-detail1">{CardData.name}</div>
                <div className="card-post-detail2">หมวดหมู่: ด้านบริหารและธุรการ(ทั่วไป)</div>
                <div className="card-post-detail3">เลขที่หนังสือ : {CardData.locate}</div>
                <div className="card-post-detail4">
               <a href={`http://localhost:5000/uploads/${CardData.pic}`} target="_blank" > 
                   <div className="infobutton">
                   ดูรายละเอียด</div>
                </a>
                <DownloadLink   filename={CardData.pic} label="ดาวน์โหลด" className="button-text-download" >
                   <AiOutlineVerticalAlignBottom className="button-icon-download"/>          
               </DownloadLink>
                
                </div>
                
                
                </div>
            </div>
        </div>
    )
}

export default CardPost