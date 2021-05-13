import React, { FC, PropsWithChildren } from 'react';
import { ButtonLegoProps } from '../../legos/button/ButtonInterfaces';
import { ButtonLego } from '../../legos/button/ButtonLego';
import { CaptionLego } from '../../legos/caption/CaptionLego';
import { IconLego, IconName } from '../../legos/icon/IconLego';
import { InlineLego } from '../../legos/inline/InlineLego';
import { StackLego } from '../../legos/stack/StackLego';

interface ButtonProps extends PropsWithChildren<ButtonLegoProps> {
  caption?: string;
  icon?: IconName;
  template?: boolean;
}

export let Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <ButtonLego
      {...props}
      {...(props.template ? { initialState: 'INERT' } : {})}
    >
      <StackLego spacing={'08du'}>
        <InlineLego spacing={'08du'} align={'center'} padding='8px'>
          <CaptionLego value={props.caption} template={props.template} />
          <IconLego iconName={props.icon} template={props.template} />
        </InlineLego>
      </StackLego>
    </ButtonLego>
  );
};
