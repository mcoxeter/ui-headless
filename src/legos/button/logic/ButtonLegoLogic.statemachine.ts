import { Machine } from 'xstate';
export const buttonLegoMachine = Machine({
  initial: 'idle',
  states: {
    template: {
      on: {
        IDLE: 'idle',
        DISABLE: 'disabled',
      },
    },
    idle: {
      on: {
        FOCUS: 'focused',
        DISABLE: 'disabled',
        TEMPLATE: 'template',
      },
    },
    focused: {
      on: {
        BLUR: 'idle',
        DISABLE: 'disabled',
        TEMPLATE: 'template',
      },
    },
    disabled: {
      on: {
        ENABLE: 'idle',
      },
    },
  },
});

export enum ButtonLegoActions {
  TEMPLATE = 'TEMPLATE',
  IDLE = 'IDLE',
  DISABLE = 'DISABLE',
  FOCUS = 'FOCUS',
  BLUR = 'BLUR',
}
