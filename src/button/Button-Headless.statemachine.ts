import { Machine } from 'xstate';
const hoverStates = {
  initial: 'no_hover',
  states: {
    hover: {
      on: {
        END_HOVER: 'no_hover',
      },
    },
    no_hover: {
      on: {
        START_HOVER: 'hover',
      },
    },
  },
};
export const buttonMachine = Machine({
  initial: 'idle',
  states: {
    idle: {
      on: {
        FOCUS: 'focused',
        ACTIVATE: 'active',
        DISABLE: 'disabled',
      },
      ...hoverStates,
    },
    working: {
      on: {
        IDLE: 'idle',
        FOCUS: 'focused',
      },
    },
    focused: {
      on: {
        BLUR: 'idle',
        ACTIVATE: 'active',
        BEGIN_WORK: 'working',
      },
      ...hoverStates,
    },
    active: {
      on: {
        BEGIN_WORK: 'working',
        IDLE: 'idle',
      },
    },
    disabled: {
      on: {
        ENABLE: 'idle',
        FOCUS: 'focused',
      },
    },
  },
});
