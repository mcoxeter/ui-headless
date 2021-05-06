import { Button2Spread } from './Button2-Headless';
import { Button2Actions } from './Button2-Headless.statemachine';

export interface ButtonProps {
  onClick: () => void;
  state:
    | `${Button2Actions.TEMPLATE}`
    | `${Button2Actions.IDLE}`
    | `${Button2Actions.DISABLE}`;

  iconName?: 'plus-square';

  caption?: string;

  applyFocus?: boolean;
}
export interface Button2HeadlessProps extends ButtonProps {
  buttonRef: React.RefObject<HTMLButtonElement>;
  children: (
    classNames: string[],
    spreadAttributes: Button2Spread
  ) => JSX.Element;
}
