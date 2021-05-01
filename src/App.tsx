import React from 'react';
import { ButtonPrimaryHead } from './button/Button-PrimaryHead';
import { ButtonSecondaryHead } from './button/Button-SecondaryHead';

function App() {

  return (<div>
    <div><ButtonPrimaryHead caption={"Primary"} /></div>

    <div><ButtonSecondaryHead caption={"Secondary"} /></div>    
  </div>);
}

export default App;
