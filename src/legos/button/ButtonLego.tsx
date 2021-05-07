import React, { useRef } from 'react';
import { ButtonLegoLogic } from './logic/ButtonLegoLogic';
import styles from './ButtonLego.module.scss';
import { ButtonProps } from './ButtonInterfaces';

export function ButtonLego(props: React.PropsWithChildren<ButtonProps>) {
  const myRef = useRef<HTMLButtonElement>(null);

  return (
    <ButtonLegoLogic {...props} buttonRef={myRef}>
      {(classes, spreadAttributes) => {
        const className = toClassName(classes.concat('button-component'));
        return (
          <button
            ref={myRef}
            type='button'
            className={className}
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

function toClassName(classes: string[]): string {
  const mapped = classes.map((x) => styles[x]);
  return mapped.join(' ');
}
