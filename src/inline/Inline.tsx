import styles from './Inline.module.scss';
export interface InlineProps {

}
export function Inline (props: React.PropsWithChildren<InlineProps>): JSX.Element {
  return (<div className={styles['component']}>{props.children}</div>)
}