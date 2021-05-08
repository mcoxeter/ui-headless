import { ButtonHTMLAttributes } from 'react';
import { IconName } from '../icon/IconLego';

export interface ButtonProps {
  onClick?: () => void;
  state: 'TEMPLATE' | 'IDLE' | 'DISABLE';

  kind?: 'primary' | 'secondary' | 'tertiary' | 'danger';

  icon?: IconName;

  caption?: string;

  applyFocus?: boolean;
}
export interface ButtonLegoLogicProps extends ButtonProps {
  buttonRef: React.RefObject<HTMLButtonElement>;
  children: (
    classNames: string[],
    spreadAttributes: ButtonLegoSpread
  ) => JSX.Element;
}

type SpeadAttributes = 'onFocus' | 'onBlur' | 'onClick' | 'disabled';
export interface ButtonLegoSpread
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, SpeadAttributes> {}
