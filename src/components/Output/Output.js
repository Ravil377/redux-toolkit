import './Output.css';
import React from 'react'
import { useSelector } from 'react-redux'

export default function Output() {
  const names = useSelector(state => state.names.names)

  return (
    <div className='container'>
      {
          names.map((item, idx) => <div key={idx}>{item}</div> )
      }
    </div>
  )
}