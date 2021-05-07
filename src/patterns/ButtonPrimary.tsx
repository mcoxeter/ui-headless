import React from 'react';
import { ButtonProps } from '../legos/button/ButtonInterfaces';
import { ButtonLego } from '../legos/button/ButtonLego';
import { Caption } from '../legos/caption/Caption';
import { IconLego } from '../legos/icon/IconLego';
import { InlineLego } from '../legos/inline/InlineLego';

export interface ButtonPrimaryProps extends ButtonProps {}

export function ButtonPrimary(
  props: React.PropsWithChildren<ButtonPrimaryProps>
) {
  return (
    <ButtonLego {...props}>
      <InlineLego spacing={'08du'} align={'center'}>
        <Caption value={props.caption} template={props.state === 'TEMPLATE'} />
        <IconLego
          iconName={props.iconName}
          template={props.state === 'TEMPLATE'}
        />
      </InlineLego>
    </ButtonLego>
  );
}
