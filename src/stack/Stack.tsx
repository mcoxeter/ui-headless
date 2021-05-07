import styles from './Stack.module.scss';

interface StackProps {
  align?: 'left' | 'right' | 'center';
  spacing?: '01du' | '02du' | '04du' | '08du' | '16du' | '32du';
  width?: string;
}

export function Stack (props: React.PropsWithChildren<StackProps>): JSX.Element {
  const alignItems = props.align ? props.align : 'stretch';
  const spacing = props.spacing ? props.spacing : '0du';
  const className = ['component', alignItems, spacing].map( x => styles[x]).join(' ');  
  return (<div style= {{width: props.width}} className={className}>{props.children}</div>);
}