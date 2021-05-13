import styles from './MarkerLego.module.scss';

export interface MarkerLegoProps {
  /** The property sets the width of the component. */
  width?: string;
  /** The property sets the height of the component. */
  height?: string;
}

/** A MarkerLego is a placehoder element. It is oftern used to represent unknown content. */
export let MarkerLego: React.FC<MarkerLegoProps> = (props: MarkerLegoProps) => {
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
};
MarkerLego.defaultProps = {
  height: '100px',
  width: '100%',
};
