import React from 'react';
import { InlineLego } from '../../legos/inline/InlineLego';
import { StackLego } from '../../legos/stack/StackLego';
import { Button } from '../button/Button';
import { DialogActions } from './DialogActions';
import { DialogBody } from './DialogBody';
import { DialogHeader } from './DialogHeader';
import { DialogProps } from './logic/DialogInterfaces';
import { DialogLogic } from './logic/DialogLogic';

export function Dialog(props: React.PropsWithChildren<DialogProps>) {
  return (
    <DialogLogic {...props}>
      {(classNames, logic) => (
        <StackLego maxWidth={'800px'} spacing={'16du'}>
          <DialogHeader title={props.title} headline={props.headline} />
          <DialogBody>{props.children}</DialogBody>
          <DialogActions>
            <InlineLego>
              <StackLego width={'50%'}>
                <Button
                  kind='secondary'
                  caption={props.cancelCaption}
                  {...logic.cancel}
                />
              </StackLego>
              <StackLego width={'50%'}>
                <Button
                  kind='primary'
                  caption={props.submitCaption}
                  {...logic.submit}
                />
              </StackLego>
            </InlineLego>
          </DialogActions>
        </StackLego>
      )}
    </DialogLogic>
  );
}
