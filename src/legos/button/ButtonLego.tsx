import React, { useRef } from 'react';
import { ButtonLegoLogic } from './logic/ButtonLegoLogic';
import styles from './ButtonLego.module.scss';
import { ButtonProps } from './ButtonInterfaces';
import { toCssModuleName } from '../../utils/css-module-helper';

export function ButtonLego(props: React.PropsWithChildren<ButtonProps>) {
  const myRef = useRef<HTMLButtonElement>(null);

  return (
    <ButtonLegoLogic {...props} buttonRef={myRef}>
      {(classes, spreadAttributes) => {
        const classNames = classes
          .concat('component')
          .concat(props.kind ? props.kind : 'primary');

        return (
          <button
            ref={myRef}
            type='button'
            className={toCssModuleName(classNames, styles)}
            {...spreadAttributes}
          >
            <Ring {...props}>{props.children}</Ring>
          </button>
        );
      }}
    </ButtonLegoLogic>
  );
}

function Ring(props: React.PropsWithChildren<ButtonProps>) {
  return <div className={styles['button-ring']}>{props.children}</div>;
}
