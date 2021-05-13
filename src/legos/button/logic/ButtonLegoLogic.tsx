import { useMachine } from '@xstate/react';
import React, { useState } from 'react';
import { buttonLegoMachine } from './ButtonLegoLogic.statemachine';
import { ButtonLegoLogicProps, ButtonLegoSpread } from '../ButtonInterfaces';

export function ButtonLegoLogic(props: ButtonLegoLogicProps): JSX.Element {
  const [machine, setMachine] = useMachine(buttonLegoMachine);
  const [prevState, setPrevState] = useState('');

  const setState = (newState: string): void => {
    setPrevState(`${machine.value}`);
    setMachine({ type: newState });
  };

  React.useEffect(() => {
    setMachine({ type: props.initialState });
  }, [props.initialState, setMachine]);

  React.useEffect(() => {
    if (props.applyFocus && props.buttonRef) {
      props.buttonRef.current?.focus();
    }
  }, [props.applyFocus, props.buttonRef]);

  const spreadAttributes: ButtonLegoSpread = {
    onBlur: () => setState('BLUR'),
    onFocus: () => setState('FOCUS'),
    onClick: props.onClick,
    disabled: machine.matches('disabled') || machine.matches('inert'),
  };

  return props.children(`${machine.value}`, prevState, spreadAttributes);
}
