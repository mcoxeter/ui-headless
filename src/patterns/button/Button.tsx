import React from 'react';
import { ButtonProps } from '../../legos/button/ButtonInterfaces';
import { ButtonLego } from '../../legos/button/ButtonLego';
import { Caption } from '../../legos/caption/Caption';
import { IconLego } from '../../legos/icon/IconLego';
import { InlineLego } from '../../legos/inline/InlineLego';

export function Button(props: React.PropsWithChildren<ButtonProps>) {
  return (
    <ButtonLego {...props}>
      <InlineLego spacing={'08du'} align={'center'}>
        <Caption value={props.caption} template={props.state === 'TEMPLATE'} />
        <IconLego iconName={props.icon} template={props.state === 'TEMPLATE'} />
      </InlineLego>
    </ButtonLego>
  );
}