import React from 'react';
import { Button2PrimaryHead } from './button2/Button2-PrimaryHead';
import { Inline } from './inline/Inline';
import { Stack } from './stack/Stack';
 
function App() {

  const click = () => console.log('click');
  return (<div style={{padding: '10px', display: 'inline-block'}}>
    <Stack spacing={'01du'} align={'left'}>
      <Button2PrimaryHead caption={"Primary button"} state={'TEMPLATE'} onClick={click} />    
      <Button2PrimaryHead iconName='plus-square' caption={"Primary button"} state={'TEMPLATE'} onClick={click} />
      <Button2PrimaryHead iconName='plus-square' state={'TEMPLATE'} onClick={click} />
      <Button2PrimaryHead caption={"Primary button"} state={'IDLE'} onClick={click} applyFocus={true} />      
      <Button2PrimaryHead iconName='plus-square' caption={"Primary button"} state={'IDLE'} onClick={click} />
      <Button2PrimaryHead iconName='plus-square' state={'IDLE'} onClick={click} />
      <Button2PrimaryHead caption={"Primary button"} state={'DISABLE'} onClick={click} />  
      <Button2PrimaryHead iconName='plus-square' caption={"Primary button"} state={'DISABLE'} onClick={click} />
      <Button2PrimaryHead iconName='plus-square' state={'DISABLE'} onClick={click} />
    </Stack>
  </div>);
}

export default App;
