import React from 'react';
import { ButtonLego } from './legos/button/ButtonLego';
import { IconLego } from './legos/icon/IconLego';
import { InlineLego } from './legos/inline/InlineLego';
import { StackLego } from './legos/stack/StackLego';
import { ButtonPrimary } from './patterns/ButtonPrimary';

function App() {
  const click = () => console.log('click');
  return (
    <div style={{ padding: '10px', display: 'inline-block' }}>
      <StackLego spacing={'04du'} align={'left'}>
        <ButtonPrimary
          caption='Primary button'
          state='TEMPLATE'
          onClick={click}
        />
        <ButtonPrimary
          iconName='plus-square'
          caption='Primary button'
          state='TEMPLATE'
          onClick={click}
        />
        <ButtonPrimary
          iconName='plus-square'
          state='TEMPLATE'
          onClick={click}
        />
        <ButtonPrimary
          caption='Primary button'
          state='IDLE'
          onClick={click}
          applyFocus={true}
        />
        <ButtonPrimary
          iconName='plus-square'
          caption='Primary button'
          state='IDLE'
          onClick={click}
        />
        <ButtonPrimary iconName='plus-square' state='IDLE' onClick={click} />
        <ButtonPrimary
          caption='Primary button'
          state='DISABLE'
          onClick={click}
        />
        <ButtonPrimary
          iconName='plus-square'
          caption='Primary button'
          state='DISABLE'
          onClick={click}
        />
        <ButtonPrimary iconName='plus-square' state='DISABLE' onClick={click} />

        <ButtonLego state={'IDLE'} onClick={() => {}}>
          <InlineLego height={'100px'} align={'center'}>
            <StackLego width={'100px'} align={'center'}>
              <IconLego iconName={'plus-square'}></IconLego>
            </StackLego>
          </InlineLego>
        </ButtonLego>
      </StackLego>
    </div>
  );
}

export default App;
