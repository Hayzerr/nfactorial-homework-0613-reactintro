import React from 'react';
import {format} from 'date-fns';
import './App.css';

const App = () =>{
  const date = format(new Date(), "dd.MM.yy HH:MMg");
  return (
    <div className = 'App'>
      <div className='head'>
          <div className='icon'></div>
          <div className='box'></div>
          <div className='time'>{date}</div>
      </div>
      <div className= 'container'>
      <div className='imgcontainer' id = "mountain">
          <div className="Text"> HEY</div>
      </div>

      <div className='imgcontainer' id = "flashlight">
          <div className="Text"> LET'S </div>
      </div>

      <div className='imgcontainer' id = "girl">
          <div className="Text"> GIVE </div>
      </div>

      <div className='imgcontainer' id = "fox">
          <div className="Text"> ALL </div>  
      </div>
      <div className='imgcontainer' id = "cloud">
          <div className="Text"> YOU CAN</div>
      </div>
    </div >
    </div>
  );
};

export default App;
