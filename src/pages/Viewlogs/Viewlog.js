import './Viewlog.css';
import React, { useState } from "react";
import Backbtn from './viewlog/backbtn.js'
import Logsarea from './viewlog/logsarea.js'
function App() {
  return (
    <div className='main'>
    <Backbtn/>
    <Logsarea/>
    </div>
  );
}

export default App;