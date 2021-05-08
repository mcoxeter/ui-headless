import React from 'react';
import { ButtonLego } from './legos/button/ButtonLego';
import { IconLego } from './legos/icon/IconLego';
import { InlineLego } from './legos/inline/InlineLego';
import { StackLego } from './legos/stack/StackLego';
import { Button } from './patterns/button/Button';
import { Dialog } from './patterns/dialog/Dialog';

function App() {
  return (
    <Dialog
      title='Account'
      headline='Edit contact information'
      submitCaption='Save'
      cancelCaption='Cancel'
    >
      <InlineLego>
        <StackLego spacing={'04du'} align={'left'}>
          <Button caption='Primary button' state='TEMPLATE' />
          <Button
            icon='plus-square'
            caption='Primary button'
            state='TEMPLATE'
          />
          <Button icon='plus-square' state='TEMPLATE' />
          <Button caption='Primary button' state='IDLE' applyFocus={true} />
          <Button icon='plus-square' caption='Primary button' state='IDLE' />
          <Button icon='plus-square' state='IDLE' />
          <Button caption='Primary button' state='DISABLE' />
          <Button icon='plus-square' caption='Primary button' state='DISABLE' />
          <Button icon='plus-square' state='DISABLE' />

          <ButtonLego state={'IDLE'} onClick={() => {}}>
            <InlineLego height={'100px'} align={'center'}>
              <StackLego width={'100px'} align={'center'}>
                <IconLego iconName={'plus-square'}></IconLego>
              </StackLego>
            </InlineLego>
          </ButtonLego>
          <Button
            icon='plus-square'
            caption='Secondary button'
            state='IDLE'
            kind='secondary'
          />
          <Button
            icon='plus-square'
            caption='Secondary button'
            state='TEMPLATE'
            kind='secondary'
          />

          <Button
            icon='plus-square'
            caption='Tertiary button'
            state='IDLE'
            kind='tertiary'
          />
          <Button
            icon='plus-square'
            caption='Tertiary button'
            state='TEMPLATE'
            kind='tertiary'
          />

          <Button
            icon='plus-square'
            caption='Danger button'
            state='IDLE'
            kind='danger'
          />
          <Button
            icon='plus-square'
            caption='Danger button'
            state='TEMPLATE'
            kind='danger'
          />
        </StackLego>
      </InlineLego>
    </Dialog>
  );
}

export default App;
