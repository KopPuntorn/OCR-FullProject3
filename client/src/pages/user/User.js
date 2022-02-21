import React, { useState } from 'react';
import Select from 'react-select';
import './user.css';
function User() {

  const options = [
    { value: 'ด้านบริหารและธุรการ(ทั่วไป)', label: 'ด้านบริหารและธุรการ(ทั่วไป)' },
    { value: 'ด้านการเงิน', label: 'ด้านการเงิน' },
    { value: 'ด้านพัสดุ', label: 'ด้านพัสดุ' },
    { value: 'ด้านวิจัย', label: 'ด้านวิจัย' },
    { value: 'ด้านแผนยุทธศาสตร์', label: 'ด้านแผนยุทธศาสตร์' },
    { value: 'ด้านพัด้านทรัพยากรบุคคลสดุ', label: 'ด้านทรัพยากรบุคคล' },
    { value: 'ด้านการบริการการศึกษา', label: 'ด้านการบริการการศึกษา' },
    { value: 'ด้านอาคารสถานที่', label: 'ด้านอาคารสถานที่' },
    { value: 'สาขาวิชาต่างๆ', label: 'สาขาวิชาต่างๆ' },
    { value: 'คำสั่ง ประกาศ', label: 'คำสั่ง ประกาศ' },
    { value: 'ระเบียบข้อบังคับ', label: 'ระเบียบข้อบังคับ' }
  ]

  const options1 = [
    { value: 'มหาวิทยาลัยขอนแก่น', label: 'มหาวิทยาลัยขอนแก่น' },

  ]

  const options2 = [
    { value: '1', label: 'มกราคม' },
    { value: '2', label: 'กุมภาพันธ์' },
    { value: '3', label: 'มีนาคม' },
    { value: '4', label: 'เมษายน' },
    { value: '5', label: 'พฤษภาคม' },
    { value: '6', label: 'มิถุนายน' },
    { value: '7', label: 'กรกฎาคม' },
    { value: '8', label: 'สิงหาคม' },
    { value: '9', label: 'กันยายน' },
    { value: '10', label: 'ตุลาคม' },
    { value: '11', label: 'พฤศจิกายน' },
    { value: '12', label: 'ธันวาคม' }
  ]

  const options3 = [
    { value: '2553', label: '2553' },
    { value: '2554', label: '2554' },
    { value: '2555', label: '2555' },
    { value: '2556', label: '2556' },
    { value: '2557', label: '2557' },
    { value: '2558', label: '2558' },
    { value: '2559', label: '2559' },
    { value: '2560', label: '2560' },
    { value: '2561', label: '2561' },
    { value: '2562', label: '2562' },
    { value: '2563', label: '2563' },
    { value: '2564', label: '2564' }
  ]


  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);

  const [input, setInput] = useState({
    email: '',
    password: '',
    term: false,
  })
  const handleChange = e => {
    const { target } = e
    const { name } = target
    const value = name === 'term' ? target.checked : target.value
    setInput({
      ...input,
      [name]: value
    })
  }

  const handleChanges = e => {
    setSelectedValue(e.value);
  }

  const handleChanges1 = e => {
    setSelectedValue1(e.value);
  }

  const handleChanges2 = e => {
    setSelectedValue2(e.value);
  }

  const handleChanges3 = e => {
    setSelectedValue3(e.value);
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log('submit value',{ selectedValue, selectedValue1, selectedValue2, selectedValue3})
  }
  return (

    <div className="body-home">
                <div>
                <div className="headtext">กรุณากรอกข้อมูลที่ต้องการสืบค้น</div>
                <form onSubmit={onSubmit} className="grid-body">
                <div className="form1">
                <label>มหาวิทยาลัย</label>
                  <Select placeholder="มหาวิทยาลัย"value={options1.find(obj => obj.value === selectedValue1)} // set selected value
                    options={options1} // set list of the data
                    onChange={handleChanges1}/>
                </div>
                <div className="form2">
                <label>หมวดหมู่</label>
                <Select placeholder="หมวดหมู่"value={options.find(obj => obj.value === selectedValue)} // set selected value
                    options={options} // set list of the data
                    onChange={handleChanges}
                     />
                </div>
                <div className="form3">
                  <label for="exampleInputPassword1">เลขที่คำสั่ง/ประกาศ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="ระบุเลขที่คำสั่ง/ประกาศ"
                    onChange={handleChange}
                  />
                </div>
                <div className="form4">
                  <label for="exampleInputPassword1">เลขที่หนังสือ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="ระบุเลขที่หนังสือ"
                    onChange={handleChange}
                  />
                </div>
                <div className="form5">
                  <label for="exampleInputPassword1">ชื่อเรื่อง</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="ระบุชื่อเรื่อง"
                    onChange={handleChange}
                  />
                </div>
                <div className="form6">
                  <label>เดือน</label>
                  <Select placeholder="เดือน"value={options2.find(obj => obj.value === selectedValue2)} // set selected value
                    options={options2} // set list of the data
                    onChange={handleChanges2}
                    maxMenuHeight= {120} />
                </div>
                <div className="form7">
                  <label>ปี</label>
                  <Select placeholder="ปี"value={options2.find(obj => obj.value === selectedValue3)} // set selected value
                    options={options3} // set list of the data
                    onChange={handleChanges3}
                    maxMenuHeight= {120}/>
                </div>
                <div className="form8">
                  <label for="exampleInputPassword1">จากคณะ/หน่วยงาน</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="ระบุคณะ/หน่วยงาน"
                    onChange={handleChange}
                  />
                </div>
                <div className="form9">
                  <label for="exampleInputPassword1">ถึง</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="โปรดระบุ"
                    onChange={handleChange}
                  />
                </div>
                <div className="form10">
                <button type="submit" >
                  ค้นหา
                </button>
                </div>
                </form>
                </div>
    </div>
   
  )
}

export default User

