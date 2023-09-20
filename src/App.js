import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [number, setNunmber] = useState(0);
  const [numList, setNumList] = useState();
  const onChange = (e) => {
    // setNunmber(e.target.value);
    let arr = Array.from({ length: e.target.value }, () => {
      return Array(e.target.value).fill(0);
    });

    if (arr.length > 2) {
      for (let i = 2; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
          arr[i][j] = i * j;
        }
      }
      console.log(arr);
      setNumList([...arr]);
    }
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input type="number" onClick={onChange} />
      {numList?.map((row, rIndex) => (
        <div key={rIndex}>{row}</div>
      ))}
    </div>
  );
}
