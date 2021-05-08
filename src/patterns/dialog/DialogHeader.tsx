import React from 'react';
import { CaptionLego } from '../../legos/caption/CaptionLego';
import { StackLego } from '../../legos/stack/StackLego';

export interface DialogHeaderProps {
  title: string;
  headline: string;
}
export function DialogHeader(props: DialogHeaderProps): JSX.Element | null {
  return (
    <StackLego width={'100%'}>
      <CaptionLego value={props.title} type='subHeading' />
      <CaptionLego value={props.headline} type='heading' />
    </StackLego>
  );
}
