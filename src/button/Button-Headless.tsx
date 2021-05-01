import * as React from 'react';
import { StateValue } from 'xstate';
import { useMachine } from '@xstate/react';
import { buttonMachine } from './Button-Headless.statemachine';
import { DOMAttributes } from 'react';

export interface ButtonHeadlessProps {
    onPress: () => void;
    working?: boolean;
    children: (className: string[], spreadAttributes: ButtonAttributes) => JSX.Element
}

type SpeadAttributes = 'onFocus' | 'onBlur' | 'onMouseEnter' | 'onMouseLeave' | 'onClick' | 'onMouseDown' | 'onKeyPress';
export interface ButtonAttributes extends Pick<DOMAttributes<HTMLButtonElement>, SpeadAttributes> {}

export function ButtonHeadless (props: ButtonHeadlessProps): JSX.Element | null {
  const [machine, setMachine] = useMachine(buttonMachine);
  const [focus, setFocus] = React.useState(false);
  const className = getClassNameFromState(machine.value);

  React.useEffect( () => {
    let op = focus ? 'FOCUS' : 'IDLE';
    if( props.working ) {
        op = 'BEGIN_WORK';
    }

    setMachine({type: op});
  }, [props.working, setMachine, focus]);

  const click = () => {
    setMachine({type: 'BEGIN_WORK'});      
    props.onPress();
  };

  const spreadAttributes: ButtonAttributes = {
        onBlur: () => { setMachine({type: 'BLUR'}); setFocus(false) },
        onFocus: () => { setMachine({type: 'FOCUS'}); setFocus(true) },
        onMouseEnter: () => setMachine({type: 'START_HOVER'}),
        onMouseDown: () => setMachine({type: 'ACTIVATE'}),
        onMouseLeave: () => setMachine({type: 'IDLE'}),
        onKeyPress: ({code}) => (code === 'Space'|| code === 'Enter') && click(),
        onClick: () => click()
  };

  if( !(props.children instanceof Function) ) {
      return null;
  }
  return props.children(className, spreadAttributes);
}

export function getClassNameFromState( value: StateValue): string[] {
    if( typeof value === 'string' ) {
        return [value];
    }
    const firstKey = Object.keys(value)[0];
    return  [firstKey, value[firstKey].toString()];
}
