import { DesignUnit, HorizontalAlignment } from '../../types';
import styles from './StackLego.module.scss';

interface StackProps {
  align?: HorizontalAlignment;
  spacing?: DesignUnit;
  padding?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;

  flex?: string;
}

/**
 * A stack is a container component.
 * It controls the layout of its children.
 * It lists the children as a stack of components.
 */
export function StackLego(
  props: React.PropsWithChildren<StackProps>
): JSX.Element {
  const className = ['component']
    .concat(props.align ? props.align : 'stretch')
    .concat(props.spacing ? [`spacing-${props.spacing}`] : [])
    .map((x) => styles[x])
    .join(' ');
  return (
    <div
      style={{
        width: props.width,
        padding: props.padding,
        minWidth: props.minWidth,
        maxWidth: props.maxWidth,
      }}
      className={className}
    >
      {props.children}
    </div>
  );
}
