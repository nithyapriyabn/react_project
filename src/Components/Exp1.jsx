import React from 'react'
import { useState } from 'react';

const Exp1 = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Hook 1 : useState Hook </h2>
      <p>This is a simple example of using the useState hook in React.</p>
      <div>
        <label> type something below:</label>
        <br/>
        <input 
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
         placeholder='start typing...'/>
         <div>
            <h3>live output</h3>
            <h2>{text}</h2>
         </div>
      </div>
    </div>
  )
}

export default Exp1