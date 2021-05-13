import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconLego.module.scss';
import { IconName as IconNameFA } from '@fortawesome/free-solid-svg-icons';

export type IconName = IconNameFA;

export interface IconProps {
  /** The Fontawesome free solid icon name */
  iconName?: IconName;

  /** Will draw the template version of the icon when set true */
  template?: boolean;
}

export let IconLego: FC<IconProps> = (props: IconProps): JSX.Element | null => {
  let classes = ['component'].concat(props.template ? ['template'] : []);
  const className = classes.map((x) => styles[x]).join(' ');
  return props.iconName ? (
    <FontAwesomeIcon className={className} icon={['fas', props.iconName]} />
  ) : null;
};

IconLego.defaultProps = {
  iconName: undefined,
  template: undefined,
};
