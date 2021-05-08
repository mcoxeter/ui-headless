import { useMachine } from '@xstate/react';
import { dialogMachine } from './DialogLogic.statemachine';

export interface DialogLogicProps {
  children: (classNames: string[], logic: DialogLogicSpread) => JSX.Element;
}

export interface DialogLogicSpread {
  cancel: DialogButtonLogic;
  submit: DialogButtonLogic;
}

export interface DialogButtonLogic {
  click: () => void;
  state: 'TEMPLATE' | 'IDLE' | 'DISABLE';
}

export function DialogLogic(props: DialogLogicProps): JSX.Element {
  const [machine, send] = useMachine(dialogMachine);

  const classes = [`${machine.value}-state`];
  return props.children(classes, {
    cancel: {
      click: () => {},
      state: 'IDLE',
    },
    submit: {
      click: () => {},
      state: 'IDLE',
    },
  });
}
