import { DesignUnit, HorizontalAlignment } from '../../types';
import styles from './StackLego.module.scss';

interface StackProps {
  align?: HorizontalAlignment;
  spacing?: DesignUnit;
  width?: string;
}

export function StackLego(
  props: React.PropsWithChildren<StackProps>
): JSX.Element {
  const alignItems = props.align ? props.align : 'stretch';
  const spacing = props.spacing ? props.spacing : '00du';
  const className = ['component', alignItems, spacing]
    .map((x) => styles[x])
    .join(' ');
  return (
    <div style={{ width: props.width }} className={className}>
      {props.children}
    </div>
  );
}
