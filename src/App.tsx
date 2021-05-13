import React from 'react';
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
      <StackLego>
        <Button caption='Primary' initialState='IDLE'></Button>
      </StackLego>
    </Dialog>
  );
}

export default App;
