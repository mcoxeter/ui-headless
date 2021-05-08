import styles from './MarkerLego.module.scss';

export interface MarkerLegoProps {
  width?: string;
  height?: string;
}
export function MarkerLego(props: MarkerLegoProps) {
  return (
    <svg
      style={{ width: props.width, height: props.height }}
      className={styles['component']}
      xmlns='http://www.w3.org/2000/svg'
    >
      <line x1='0' y1='0' x2='100%' y2='100%'>
        {' '}
      </line>
      <line x1='100%' y1='0' x2='0' y2='100%'></line>
    </svg>
  );
}
