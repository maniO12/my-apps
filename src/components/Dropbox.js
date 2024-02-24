
import React, { useState } from 'react'
const Dropbox = () => {

const[bus,setBus] = useState('');
const[seat,setSeat] = useState('');

const handleBus = (e) => {
  setBus(e.target.value);
  console.log(e.target.value);
}

const handleSeat = (e) => {
  setBus(e.target.value);
  console.log(e.target.value);
}



  return (

    <div class="drop">
       <label class="bus">Select bus no:
      
      <select onChange={handleBus} >
      
      <option value="12656">Bus no:12656</option>
      <option value="12652">Bus no:12652</option>
      <option value="12456">Bus no:12456</option>
      <option value="14567">Bus no:14567</option>
      <option value="11564">Bus no:11564</option>
      <option value="10456">Bus no:10456</option>


      </select>
      </label>

      <label class="bus">Select seat no:
      
      <select onChange={handleSeat}>
      
      <option value="1">seat no:1</option>
      <option value="2">seat no:2</option>
      <option value="3">seat no:3</option>
      <option value="4">seat no:4</option>
      <option value="5">seat no:5</option>
      <option value="6">seat no:6</option>
      <option value="7">seat no:7</option>
      <option value="8">seat no:8</option>


      </select>
      </label>

    
    </div>


  )
}

export default Dropbox
