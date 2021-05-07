import { DesignUnit, VerticalAlignment } from '../../types';
import styles from './InlineLego.module.scss';
export interface InlineProps {
  align?: VerticalAlignment;
  spacing?: DesignUnit;
  height?: string;
}
export function InlineLego(
  props: React.PropsWithChildren<InlineProps>
): JSX.Element {
  const alignItems = props.align ? props.align : 'stretch';
  const spacing = props.spacing ? props.spacing : '00du';
  const className = ['component', alignItems, spacing]
    .map((x) => styles[x])
    .join(' ');
  return (
    <div style={{ height: props.height }} className={className}>
      {props.children}
    </div>
  );
}
