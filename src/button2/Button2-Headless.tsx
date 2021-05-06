import { useMachine } from '@xstate/react';
import React, { ButtonHTMLAttributes } from 'react';
import { button2Machine, Button2Actions } from './Button2-Headless.statemachine';
import { Button2HeadlessProps } from './Button2-Interfaces';

export function ButtonHeadless (props:Button2HeadlessProps): JSX.Element {
  const [machine, setMachine] = useMachine(button2Machine);  

  React.useEffect( () => {
    setMachine({type: props.state});
  }, [props.state, setMachine]);

  React.useEffect( () => {
    if( props.applyFocus && props.buttonRef) {
      props.buttonRef.current?.focus();
    }
}, [props.applyFocus, props.buttonRef]);

  const spreadAttributes: Button2Spread = {
    onBlur: () => setMachine({type: Button2Actions.BLUR}),
    onFocus: () => setMachine({type: Button2Actions.FOCUS}),
    onClick: props.onClick,
    disabled: machine.matches('disabled') || machine.matches('template')
  };

  const classes = [`${machine.value}-state`].concat(props.caption ? ['caption-state'] : []);
  return props.children(classes, spreadAttributes);
}

type SpeadAttributes = 'onFocus' | 'onBlur' | 'onClick' | 'disabled';
export interface Button2Spread extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, SpeadAttributes> {}