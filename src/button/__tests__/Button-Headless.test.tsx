import { getClassNameFromState } from '../Button-Headless';
import { buttonMachine } from '../Button-Headless.statemachine';

describe( 'Given a button', () => {

  it('shoud have an initial state of idle', () => {
    expect(buttonMachine.initialState.matches('idle')).toBeTruthy();    
  })

  describe( 'when the user hovers over the button', () => {
    it('should enter reach a state of idle and hovering', () => {
      const actualState = buttonMachine.transition(buttonMachine.initialState, 'START_HOVER');
      const classes = getClassNameFromState(actualState.value);
      expect(classes).toContain('idle');
      expect(classes).toContain('hover');
    })
  })

  describe( 'when the user hovers over the button and moves away', () => {
    it('should enter reach a state of idle', () => {
      let currentState = buttonMachine.transition(buttonMachine.initialState, 'START_HOVER');
      currentState = buttonMachine.transition(currentState, 'END_HOVER');
      const classes = getClassNameFromState(currentState.value);
      expect(classes).toContain('idle');
      expect(classes).not.toContain('hover');
    })
  })

  describe( 'when the button is disabled', () => {
    it('should enter reach a state of disabled', () => {
      const newState = buttonMachine.transition(buttonMachine.initialState, 'DISABLE');
      expect(newState.matches('disabled')).toBeTruthy();
    })
  })

  describe( 'when the button is disabled and the user hovers', () => {
    it('should keep this disabled state', () => {
      let currentState = buttonMachine.transition(buttonMachine.initialState, 'DISABLE');
      currentState = buttonMachine.transition(currentState, 'START_HOVER');
      expect(currentState.matches('disabled')).toBeTruthy();
      expect(currentState.matches('hover')).toBeFalsy();
    })
  })
});