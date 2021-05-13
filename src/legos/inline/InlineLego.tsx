import { DesignUnit, VerticalAlignment } from '../../types';
import styles from './InlineLego.module.scss';
import { PropsWithChildren, FC } from 'react';

export interface InlineProps {
  align?: VerticalAlignment;
  spacing?: DesignUnit;
  padding?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
}
export let InlineLego: FC<PropsWithChildren<InlineProps>> = (
  props: PropsWithChildren<InlineProps>
): JSX.Element => {
  const className = ['component']
    .concat(props.align ? props.align : 'stretch')
    .concat(props.spacing ? [`spacing-${props.spacing}`] : [])
    .map((x) => styles[x])
    .join(' ');
  return (
    <div
      style={{
        height: props.height,
        padding: props.padding,
        minHeight: props.minHeight,
        maxHeight: props.maxHeight,
      }}
      className={className}
    >
      {props.children}
    </div>
  );
};
InlineLego.defaultProps = {
  spacing: '04du',
};
