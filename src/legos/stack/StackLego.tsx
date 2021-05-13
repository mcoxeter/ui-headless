import { DesignUnit, HorizontalAlignment } from '../../types';
import styles from './StackLego.module.scss';

interface StackProps {
  /** Defaults to 'stretch'. Valid values: 'left' | 'right' | 'center' */
  align?: HorizontalAlignment;

  /** Optional. Will apply the maxWidth style to the component. e.g. maxWidth='100px' */
  maxWidth?: string;
  /** Optional. If set this will apply the minWidth style to the component. */
  minWidth?: string;
  /** Optional. If set this will apply the padding style to the component. */
  padding?: string;
  /** Optional. If set this will apply spacing between the children. Values are   | '00du' | '01du' | '02du' | '04du' | '08du' | '16du' | '32du' */
  spacing?: DesignUnit;

  /** Optional. If set this will apply the width style to the component. */
  width?: string;
}

/**
 * A StackLego is a container component.
 * It controls the layout of its children.
 * It lists the children as a stack of components.
 * @author [Michael Coxeter](https://github.com/mcoxeter)
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
