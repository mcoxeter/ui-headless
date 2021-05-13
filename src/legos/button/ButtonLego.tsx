import React, { useRef, FC, PropsWithChildren } from 'react';
import { ButtonLegoLogic } from './logic/ButtonLegoLogic';
import styles from './ButtonLego.module.scss';
import { ButtonLegoProps } from './ButtonInterfaces';
import { toCssModuleName } from '../../utils/css-module-helper';

/** A ButtonLego is a composable button. Unlike the [Button](#button) component, it is not opinionated about how it should look. The ButtonLego can children. */
export let ButtonLego: FC<PropsWithChildren<ButtonLegoProps>> = (
  props: PropsWithChildren<ButtonLegoProps>
) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <ButtonLegoLogic {...props} buttonRef={buttonRef}>
      {(state, previousState, spreadAttributes) => {
        const classNames = ['component'].concat(
          props.kind ? props.kind : 'primary'
        );

        return (
          <button
            ref={buttonRef}
            type='button'
            className={toCssModuleName(classNames, styles)}
            data-state={state}
            data-state-previous={previousState}
            {...spreadAttributes}
          >
            <Ring {...props}>{props.children}</Ring>
          </button>
        );
      }}
    </ButtonLegoLogic>
  );
};

ButtonLego.defaultProps = {
  kind: 'primary',
  onClick: () => {},
  initialState: 'IDLE',
};

function Ring(props: React.PropsWithChildren<ButtonLegoProps>) {
  return <div className={styles['button-ring']}>{props.children}</div>;
}
