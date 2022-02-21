import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardPost from './Card/CardPost';
import Cards from './Card/Cards';
import SearchBox from '../../../components/UserComponent/SearchBox/SearchBox';
import './inobj.css';
import ReactPaginate from 'react-paginate';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import th from 'date-fns/locale/th';
import { BlockOutlined, UnorderedListOutlined, FilePdfTwoTone } from '@ant-design/icons';
import { getInPlace } from '../../../functions/inplace';
import { toast } from 'react-toastify';
import { ConfigProvider, DatePicker , Table} from 'antd';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import DownloadLink from "react-download-link";
import locale from 'antd/lib/locale/th_TH';
import IconButton from '@mui/material/IconButton';



function Inmoney() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchNo, setSearchNo] = useState('');
  const { RangePicker } = DatePicker;
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const [dates, setDates] = useState([]);
  const [person, setPerson] = useState([]);
  const { user } = useSelector((state) => ({ ...state }))
  const [game, setGame] = useState('card')
  const { Column, ColumnGroup } = Table;

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

registerLocale('th', th)

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

  function onCardOpenClick(theCard){
    setSelectedCard(theCard);
  }

  function onCardCloseClick(){
    setSelectedCard(null);
  }

  const filteredCards = person.filter((person) => person.name.includes(searchText)).filter((person) => person.locate.includes(searchNo))
  const filteredData = person.filter((CardData) => CardData.name.includes(searchText)).filter((CardData) => CardData.locate.includes(searchNo))

  const cardElements = filteredCards.map((CardData, index) => {
      return <Cards key={index} CardData={CardData} onCardClick={onCardOpenClick}/>;
  });

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((cardElements) => (
            <div>
              {cardElements}
            </div>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
 
  
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(cardElements.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(cardElements.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % cardElements.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

  
    return (
      <><div className="app-grid">
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={"paginationBttns"}
          previousClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
        />
        </div>

      </>
    );
  }

  /*const columns = [

    {
      title: 'เรื่อง',
      dataIndex: 'name',
      key: 'name'
    },
    {
        title: 'Download',
        render: (record) => (
            <DownloadLink className="button-field-download"  filename={record.pic} label="Download" >
               
                <AiOutlineVerticalAlignBottom className="button-icon-download"/>          
                <div className="button-text-download">
                ดาวน์โหลด</div>
            </DownloadLink>
        )
    },
    

]*/

  let cardPost = null;
  if(!!selectedCard){
    cardPost = <CardPost CardData={selectedCard} onBgClick={onCardCloseClick}/>
  }

  const handleClick = (gameState) => {
    setGame(gameState)
  }

  return (
    <div ><div className='HeadSearch1'>ค้นหา</div>
      <div className="searh">
        <div className="search2">ใส่คำค้นหา<SearchBox value={searchText} onValueChange={setSearchText} placeholder="คำค้นหา"/></div>
        <div className="search3">เลขที่หนังสือ<SearchBox value={searchNo} onValueChange={setSearchNo} placeholder="เลขที่หนังสือ"/></div>
        <div className="search4">วันที่ <ConfigProvider locale={locale}> 
        <RangePicker
            value={hackValue || value}
            disabledDate={disabledDate}
            onCalendarChange={val => setDates(val)}
            onChange={val => setValue(val)}
            onOpenChange={onOpenChange}
            format= 'DD/MM/YYYY'
            /></ConfigProvider></div>
        <div className="chblog">
        <IconButton aria-label="delete" onClick={ () => handleClick('card')} color="primary"> 
        <BlockOutlined />
      </IconButton>
      <IconButton aria-label="delete" onClick={ () => handleClick('playing')} color="primary"> 
        <UnorderedListOutlined />
      </IconButton>
        </div>
      </div> 
      {(() => {
        switch (game) {
          case 'card':
            return <div><PaginatedItems itemsPerPage={12} />{cardPost}</div>
          case 'playing':
            return <div className="chblog-table"><div></div><Table dataSource={filteredData} rowKey="_id" className="search-table" defaultPageSize= "2">
                <Column render={ (record) => (
                <>
                    <a href={`http://localhost:5000/uploads/${record.pic}`} target="_blank" >
                    <FilePdfTwoTone twoToneColor="#ff0000"/>
                    </a>
                </>
            )}></Column>
                <Column title="เรื่อง" dataIndex="name" key="name" width={900}></Column>
                
                <Column render={ (record) => (
                <>
                    <a href={`http://localhost:5000/uploads/${record.pic}`} target="_blank" >
                    รายละเอียด
                    </a>
                </>
            )}></Column>
            <Column render={(record) => (
                      <DownloadLink className="button-field-download"  filename={record.pic} label="Download" >        
                          <AiOutlineVerticalAlignBottom className="button-icon-download"/>          
                          <div className="button-text-download">
                          ดาวน์โหลด</div>
                      </DownloadLink>
                  )}></Column>
              
              </Table></div>
          default:
            return null
        }

      })()}
    </div>
    
  )
}

export default Inmoney
