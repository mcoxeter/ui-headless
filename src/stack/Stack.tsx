import styles from './Stack.module.scss';

interface StackProps {
  children?: React.ReactNode;
}

export function Stack (props: StackProps): JSX.Element {
  return (<div className={styles['component']}>{props.children}</div>);
}