import React from 'react'
import Select from 'react-select'

export const Selected1 = () => {

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
  return (
    <Select options={options} placeholder="ทั้งหมด.."/>
  )
}
