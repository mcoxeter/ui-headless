import { ButtonHTMLAttributes } from 'react';

export interface ButtonLegoProps {
  kind?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  onClick?: () => void;
  initialState: 'IDLE' | 'DISABLED' | 'INERT';
  applyFocus?: boolean;
}
export interface ButtonLegoLogicProps extends ButtonLegoProps {
  buttonRef: React.RefObject<HTMLButtonElement>;
  children: (
    state: string,
    previousState: string,
    spreadAttributes: ButtonLegoSpread
  ) => JSX.Element;
}

type SpreadAttributes = 'onFocus' | 'onBlur' | 'onClick' | 'disabled';
export interface ButtonLegoSpread
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, SpreadAttributes> {}
