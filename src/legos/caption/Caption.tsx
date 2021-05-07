import styles from './Caption.module.scss';
export interface CaptionProps {
  value?: string;
  template?: boolean;
}
export function Caption(props: CaptionProps): JSX.Element | null {
  let classes = ['component'].concat(props.template ? ['template'] : []);
  const className = classes.map((x) => styles[x]).join(' ');

  return props.value ? <span className={className}>{props.value}</span> : null;
}
