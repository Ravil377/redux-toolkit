import './Input.css';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addText } from '../../app/InputSlice'

export default function Input() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const add = () => {
      dispatch(addText(inputValue));
      setInputValue('');
    }

  return (
    <div className="input">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Введите текст' />
        <button onClick={add}>Отправить</button>
    </div>
  )
}