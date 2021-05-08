import { Machine } from 'xstate';

function askUserToCancel(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

export const dialogMachine = Machine({
  initial: 'pristine',
  states: {
    pristine: {
      on: {
        CHANGE: 'changed',
        SUBMIT: 'success',
        CANCEL: 'cancelled',
      },
    },
    changed: {
      on: {
        SUBMIT: [
          {
            target: 'processing',
            cond: (ctx: any, event: any) => true,
          },
          { target: 'error' },
        ],
        CANCEL: 'cancelling',
      },
    },
    cancelling: {
      invoke: {
        src: () => askUserToCancel(),
        onDone: { target: 'cancelled' },
        onError: { target: 'changed' },
      },
    },
    processing: {
      on: {
        OPERATION_SUCESS: 'success',
        OPERATION_FAILED: 'error',
      },
    },
    error: {
      on: {
        SUBMIT: [
          {
            target: 'processing',
            cond: (ctx: any, event: any) => true,
          },
          { target: 'error' },
        ],
        CANCEL: 'cancelling',
      },
    },
    success: {
      type: 'final',
    },
    cancelled: {
      type: 'final',
    },
  },
});
