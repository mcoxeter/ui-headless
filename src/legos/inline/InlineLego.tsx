import { DesignUnit, VerticalAlignment } from '../../types';
import styles from './InlineLego.module.scss';
import { PropsWithChildren, FC } from 'react';

export interface InlineProps {
  /** Valid values: 'top' | 'bottom' | 'center' | 'stretch'*/
  align?: VerticalAlignment;

  /** If set this will apply the height style to the component. */
  height?: string;

  /** If set this will apply the maxHeight style to the component. */
  maxHeight?: string;

  /** If set this will apply the minHeight style to the component. */
  minHeight?: string;

  /** If set this will apply the padding style to the component. */
  padding?: string;

  /** If set this will apply spacing between the children. Values are   | '00du' | '01du' | '02du' | '04du' | '08du' | '16du' | '32du' */
  spacing?: DesignUnit;
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
  align: 'stretch',
};
