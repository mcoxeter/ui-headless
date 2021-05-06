import React from 'react';
import { Button2PrimaryHead } from './button2/Button2-PrimaryHead';
import { Stack } from './stack/Stack';
 
function App() {

  const click = () => console.log('click');
  return (<div style={{padding: '10px', display: 'inline-block'}}>
    <Stack>
      <div><Button2PrimaryHead caption={"Primary button"} state={'TEMPLATE'} onClick={click} /></div>      
      <div><Button2PrimaryHead iconName='plus-square' caption={"Primary button"} state={'TEMPLATE'} onClick={click} /></div>
      <div><Button2PrimaryHead iconName='plus-square' state={'TEMPLATE'} onClick={click} /></div>
      <div><Button2PrimaryHead caption={"Primary button"} state={'IDLE'} onClick={click} applyFocus={true} /></div>      
      <div><Button2PrimaryHead iconName='plus-square' caption={"Primary button"} state={'IDLE'} applyFocus={true} onClick={click} /></div>
      <div><Button2PrimaryHead iconName='plus-square' state={'IDLE'} onClick={click} /></div>
      <div><Button2PrimaryHead caption={"Primary button"} state={'DISABLE'} onClick={click} /></div>      
      <div><Button2PrimaryHead iconName='plus-square' caption={"Primary button"} state={'DISABLE'} onClick={click} /></div>
      <div><Button2PrimaryHead iconName='plus-square' state={'DISABLE'} onClick={click} /></div>
    </Stack>
  </div>);
}

export default App;
