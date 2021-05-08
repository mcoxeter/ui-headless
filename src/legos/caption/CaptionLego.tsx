import styles from './CaptionLego.module.scss';
export interface CaptionLegoProps {
  value?: string;
  template?: boolean;

  type?: 'heading' | 'subHeading' | 'normal';
}
export function CaptionLego(props: CaptionLegoProps): JSX.Element | null {
  let classes = ['component']
    .concat(props.template ? ['template'] : [])
    .concat(props.type ? props.type : 'paragraph');
  const className = classes.map((x) => styles[x]).join(' ');

  if (!props.value) {
    return null;
  }

  switch (props.type) {
    case 'heading':
      return <h1 className={className}>{props.value}</h1>;
    case 'subHeading':
      return <h2 className={className}>{props.value}</h2>;
  }

  return <span className={className}>{props.value}</span>;
}
