import styles from './Inline.module.scss';
export interface InlineProps {
  align?: 'top' | 'bottom' | 'center';
  spacing?: '01du' | '02du' | '04du' | '08du' | '16du' | '32du';
  height?: string;
}
export function Inline (props: React.PropsWithChildren<InlineProps>): JSX.Element {
  const alignItems = props.align ? props.align : 'stretch';
  const spacing = props.spacing ? props.spacing : '0du';
  const className = ['component', alignItems, spacing].map( x => styles[x]).join(' ');  
  return (<div style= {{height: props.height}} className={className}>{props.children}</div>)
}