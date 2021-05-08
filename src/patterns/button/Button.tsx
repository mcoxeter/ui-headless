import React from 'react';
import { ButtonProps } from '../../legos/button/ButtonInterfaces';
import { ButtonLego } from '../../legos/button/ButtonLego';
import { CaptionLego } from '../../legos/caption/CaptionLego';
import { IconLego } from '../../legos/icon/IconLego';
import { InlineLego } from '../../legos/inline/InlineLego';
import { StackLego } from '../../legos/stack/StackLego';

export function Button(props: React.PropsWithChildren<ButtonProps>) {
  return (
    <ButtonLego {...props}>
      <StackLego spacing={'08du'}>
        <InlineLego spacing={'08du'} align={'center'} padding='8px'>
          <CaptionLego
            value={props.caption}
            template={props.state === 'TEMPLATE'}
          />
          <IconLego
            iconName={props.icon}
            template={props.state === 'TEMPLATE'}
          />
        </InlineLego>
      </StackLego>
    </ButtonLego>
  );
}
