import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconLego.module.scss';

export type IconName = 'plus-square';
export interface IconProps {
  iconName?: IconName;
  template?: boolean;
}

export function IconLego(
  props: React.PropsWithChildren<IconProps>
): JSX.Element | null {
  let classes = ['component'].concat(props.template ? ['template'] : []);
  const className = classes.map((x) => styles[x]).join(' ');
  return props.iconName ? (
    <FontAwesomeIcon className={className} icon={['fas', props.iconName]} />
  ) : null;
}
