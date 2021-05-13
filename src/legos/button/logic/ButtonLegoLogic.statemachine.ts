import { Machine } from 'xstate';
export const buttonLegoMachine = Machine({
  initial: 'idle',
  states: {
    inert: {
      on: {
        IDLE: 'idle',
        DISABLED: 'disabled',
      },
    },
    idle: {
      on: {
        FOCUS: 'focused',
        DISABLED: 'disabled',
        INERT: 'inert',
      },
    },
    focused: {
      on: {
        BLUR: 'idle',
        DISABLED: 'disabled',
        INERT: 'inert',
      },
    },
    disabled: {
      on: {
        ENABLE: 'idle',
      },
    },
  },
});
