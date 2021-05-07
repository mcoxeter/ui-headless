import { useMachine } from '@xstate/react';
import React from 'react';
import {
  buttonLegoMachine,
  ButtonLegoActions,
} from './ButtonLegoLogic.statemachine';
import { ButtonLegoLogicProps, ButtonLegoSpread } from '../ButtonInterfaces';

export function ButtonLegoLogic(props: ButtonLegoLogicProps): JSX.Element {
  const [machine, setMachine] = useMachine(buttonLegoMachine);

  React.useEffect(() => {
    setMachine({ type: props.state });
  }, [props.state, setMachine]);

  React.useEffect(() => {
    if (props.applyFocus && props.buttonRef) {
      props.buttonRef.current?.focus();
    }
  }, [props.applyFocus, props.buttonRef]);

  const spreadAttributes: ButtonLegoSpread = {
    onBlur: () => setMachine({ type: ButtonLegoActions.BLUR }),
    onFocus: () => setMachine({ type: ButtonLegoActions.FOCUS }),
    onClick: props.onClick,
    disabled: machine.matches('disabled') || machine.matches('template'),
  };

  const classes = [`${machine.value}-state`].concat(
    props.caption ? ['caption-state'] : []
  );
  return props.children(classes, spreadAttributes);
}
