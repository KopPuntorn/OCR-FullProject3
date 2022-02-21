import React from 'react'
import Select from 'react-select'

export const Selected = () => {

  const options = [
    { value: 'มหาวิทยาลัยขอนแก่น', label: 'มหาวิทยาลัยขอนแก่น' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <Select options={options} placeholder="มหาวิทยาลัย.."/>
  )
}
